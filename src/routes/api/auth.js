import express from "express";
import jwt from "jsonwebtoken";
import {sprintf} from "sprintf-js";
import dateformat from "dateformat";

import config, {dbTblName, session} from "core/config";
import db from "core/db";
import myCrypto from "core/myCrypto";
import strings from "core/strings";
import tracer from "core/tracer";
import consts, {accountTypes, auth, resetPasswordUri, social, tokenStatus} from "core/consts";
import mailer from "core/mailer";
import fetch, {GET} from "core/fetch";
import helpers from "core/helpers";

const _validateToken = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {email, token} = req.body;
  const today = new Date();
  const timestamp = today.getTime();

  try {
    let sql = sprintf("SELECT * FROM `%s` WHERE `email` = ? AND `token` = ?;", dbTblName.resetPasswordTokens);
    let rows = await db.query(sql, [email, token]);
    if (!rows.length) {
      return tokenStatus.NOT_FOUND;
    }

    const row = rows[0];

    if (timestamp >= row.expire) {
      return tokenStatus.EXPIRED;
    }

    const used = myCrypto.hmacHex(`${row.timestamp}${row.token}${row.expire}`);
    if (used !== row.used) {
      return tokenStatus.ALREADY_USED;
    }

    return tokenStatus.VALID;
  } catch (err) {
    throw err;
  }
};

const _validateGoogleAccount = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {googleId, email, id_token} = req.body;

  const url = "https://www.googleapis.com/oauth2/v3/tokeninfo";
  const params = {
    id_token,
  };

  try {
    const data = await fetch(GET, url, params);
    let sql = sprintf("SELECT U.*, A.accountType FROM `%s` U LEFT JOIN `%s` A ON A.id = U.id WHERE U.social = ? AND U.socialId = ?;", dbTblName.users, dbTblName.accountSettings);

    let rows = await db.query(sql, [social.name.GOOGLE, data.sub]);

    let registered = !!rows.length;
    const invalidToken = data.sub !== googleId;

    let result = {...data, registered, invalidToken};
    if (!!registered) {
      result = Object.assign({}, result, {...rows[0], accountType: rows[0]["accountType"] || accountTypes.WORK})
    }

    sql = sprintf("SELECT U.*, A.accountType FROM `%s` U LEFT JOIN `%s` A ON A.id = U.id WHERE U.email = ?;", dbTblName.users, dbTblName.accountSettings);

    rows = await db.query(sql, [data.email, social.name.GOOGLE]);

    registered = !!rows.length;

    result = {...result, emailRegistered: registered};

    return result;
  } catch (err) {
    throw err;
  }
};

const _validateFacebookAccount = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {socialId, accessToken} = req.body;

  const url = "https://graph.facebook.com/v2.3/me";
  const params = {
    access_token: accessToken,
  };

  try {
    const data = await fetch(GET, url, params);
    let sql = sprintf("SELECT U.*, A.accountType FROM `%s` U LEFT JOIN `%s` A ON A.id = U.id WHERE U.social = ? AND U.socialId = ?;", dbTblName.users, dbTblName.accountSettings);

    let rows = await db.query(sql, [social.name.FACEBOOK, socialId]);

    let registered = !!rows.length;
    const invalidToken = data.id !== socialId;
    
    let result = {...data, registered, invalidToken};
    if (!!registered) {
      result = Object.assign({}, result, {...rows[0], accountType: rows[0]["accountType"] || accountTypes.WORK})
    }

    return result;
  } catch (err) {
    throw err;
  }
};

const signInProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {email, password} = req.body;

  let sql = sprintf("SELECT `email` FROM `%s` WHERE `email` = ?;", dbTblName.core.users);
  try {
    let rows = await db.query(sql, [email]);
    if (rows.length === 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.emailIsNotRegistered,
      });
      return;
    }

    const hash = myCrypto.hmacHex(password);
    sql = sprintf("SELECT * FROM `%s` WHERE `email` = ? AND BINARY `hash` = ?;", dbTblName.core.users);
    rows = await db.query(sql, [email, hash]);

    if (rows.length === 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.passwordIsIncorrect,
      });
      return;
    }

    const user = rows[0];

    if (user.deletedDate.length > 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.yourAccountIsClosed,
      });
      return;
    }

    if (user.allowedDate.length === 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.yourAccountIsNotAllowed,
      });
      return;
    }

    sql = sprintf("SELECT * FROM `%s` WHERE `id` = ?;", dbTblName.hire.accounts);
    const hire = await db.query(sql, [user.hireId]);

    sql = sprintf("SELECT * FROM `%s` WHERE `id` = ?", dbTblName.work.accounts);
    const work = await db.query(sql, [user.workId]);

    const token = jwt.sign(
      {
        id: user["id"],
        email: user["email"],
        firstName: user["firstName"],
        fatherName: user["fatherName"],
        lastName: user["lastName"],
      },
      session.secret
    );

    const today = new Date();
    const date = dateformat(today, "yyyy-mm-dd");
    const time = dateformat(today, "hh:MM TT");
    const timestamp = today.getTime();
    const remoteAddress = req.header["x-forwarded-for"] || req.connection.remoteAddress;
    const newRows = [
      [null, user.id, timestamp, date, time, remoteAddress]
    ];
    sql = sprintf("INSERT INTO `%s` VALUES ?;", dbTblName.core.signInHistory);
    await db.query(sql, [newRows]);

    const accountType = user["accountType"] || accountTypes.WORK;

    res.status(200).send({
      result: langs.success,
      message: langs.successfullySignedIn,
      data: {
        user: {...user},
        hire: !!hire.length ? hire[0] : {},
        work: !!work.length ? work[0] : {},
        token,
      },
    });
  } catch (err) {
    helpers.handleErr(res, langs, err);
  }
};

const sendForgotPasswordMailProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {email} = req.body;

  let today = new Date();

  const timestamp = today.getTime();
  today = new Date(timestamp + consts.tokenLifetime * 3600 * 1000);
  const expire = today.getTime();
  const token = myCrypto.hmacHex(`${email}${timestamp}`);
  const used = myCrypto.hmacHex(`${timestamp}${token}${expire}`);

  let sql = sprintf("SELECT * FROM `%s` WHERE `email` = ?;", dbTblName.users);

  try {
    let rows = await db.query(sql, [email]);
    if (!rows.length) {
      res.status(200).send({
        result: langs.error,
        message: langs.emailIsNotRegistered,
      });
      return;
    }
    const user = rows[0];
    const name = `${user.firstName} ${user.lastName}`;
    const url = `${config.server.baseUrl}${resetPasswordUri}/${email}/${token}`;
    tracer.info(token);
    await mailer.sendForgotPasswordMail({email, name, url, subject: langs.forgotPassword});

    sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `timestamp` = VALUES(`timestamp`), `token` = VALUES(`token`), `expire` = VALUES(`expire`), `used` = VALUES(`used`);", dbTblName.resetPasswordTokens);

    const newRows = [
      [email, timestamp, token, expire, used],
    ];

    await db.query(sql, [newRows]);
    res.status(200).send({
      result: langs.success,
      message: langs.resetEmailIsSent,
    });
  } catch (err) {
    helpers.handleErr(res, langs, err);
  }
};

const validateTokenProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  try {
    const result = await _validateToken(req, res, next);
    switch (result) {
      case tokenStatus.VALID:
        res.status(200).send({
          result: langs.success,
          message: langs.tokenIsValid,
        });
        break;
      case tokenStatus.EXPIRED:
        res.status(200).send({
          result: langs.error,
          message: langs.tokenIsExpired,
        });
        break;
      case tokenStatus.NOT_FOUND:
        res.status(200).send({
          result: langs.error,
          message: langs.tokenIsNotFound,
        });
        break;
      case tokenStatus.ALREADY_USED:
        res.status(200).send({
          result: langs.error,
          message: langs.tokenIsAlreadyUsed,
        });
        break;
    }
  } catch (err) {
    helpers.handleErr(res, langs, err);
  }
};

const resetPasswordProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {email, password} = req.body;

  try {
    const result = await _validateToken(req, res, next);
    switch (result) {
      case tokenStatus.EXPIRED:
        res.status(200).send({
          result: langs.error,
          message: langs.tokenIsExpired,
        });
        return;
      case tokenStatus.NOT_FOUND:
        res.status(200).send({
          result: langs.error,
          message: langs.tokenIsNotFound,
        });
        return;
      case tokenStatus.ALREADY_USED:
        res.status(200).send({
          result: langs.error,
          message: langs.tokenIsAlreadyUsed,
        });
        return;
    }

    const hash = myCrypto.hmacHex(password);
    tracer.info(password, hash);
    let sql = sprintf("UPDATE `%s` SET `used` = ? WHERE `email` = ?;", dbTblName.resetPasswordTokens);
    await db.query(sql, [1, email]);
    sql = sprintf("UPDATE `%s` SET `hash` = ? WHERE `email` = ?;", dbTblName.users);
    await db.query(sql, [hash, email]);
    res.status(200).send({
      result: langs.success,
      message: langs.successfullyChanged,
    });
  } catch (err) {
    helpers.handleErr(res, langs, err);
  }
};

const router = express.Router();

router.post("/sign-in", signInProc);
router.post("/send-forgot-password-mail", sendForgotPasswordMailProc);
router.post("/validate-token", validateTokenProc);
router.post("/reset-password", resetPasswordProc);

export default router;
