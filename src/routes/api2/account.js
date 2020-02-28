import express from "express";
import {sprintf} from "sprintf-js";
import jwt from "jsonwebtoken";
import dateformat from "dateformat";
import path from "path";
import fs from "fs";
import {dbTblName, session} from "core/config";
import db from "core/db";
import strings from "core/strings";
import tracer from "core/tracer";
import consts, {avatar} from "core/consts";
import myCrypto from "core/myCrypto";
import helpers from "core/helpers";
import {accountTypes} from "core/consts";

const avatarProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id} = req.body;

  let sql = sprintf("SELECT * FROM `%s` WHERE `id` = ?;", dbTblName.userAvatars);
  try {
    let rows = await db.query(sql, [id]);
    if (!!rows.length) {
      const row = rows[0];
      res.status(200).send({
        result: langs.success,
        data: {
          url: !!row.url.length ? row.url : avatar.DEFAULT_AVATAR,
          originUrl: !!row.originUrl.length ? row.originUrl : avatar.DEFAULT_AVATAR,
          scale: row.scale,
          borderRadius: row.borderRadius,
          position: {
            x: row.xPosition,
            y: row.yPosition,
          },
          rotate: row.rotate,
        },
      });
    } else {
      res.status(200).send({
        result: langs.success,
        data: {
          url: avatar.DEFAULT_AVATAR,
          originUrl: avatar.DEFAULT_AVATAR,
          scale: 1,
          borderRadius: 0,
          position: {
            x: 0.5,
            y: 0.5,
          },
          rotate: 0,
        },
      });
    }
  } catch (err) {
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
    });
  }
};

const saveAvatarProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, file, base64, scale, borderRadius, xPosition, yPosition, rotate} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");
  // const time = dateformat(today, "hh:MM TT");
  // const timestamp = today.getTime();

  const appDir = process.cwd();
  const fileDir = path.join(appDir, "public", consts.uploadPath.avatars);
  let fileName = "";
  if (!!file) {
    fileName = await helpers.uploadFile(file, fileDir);
  }
  let originUrl = sprintf("%s/%s", consts.uploadPath.avatars, fileName);

  let fileName2 = await helpers.uploadBase64Image(base64, fileDir);
  let url = sprintf("%s/%s", consts.uploadPath.avatars, fileName2);

  let sql;
  let rows;
  let row;
  if (!!id) {
    sql = sprintf("SELECT * FROM `%s` WHERE `id` = ?;", dbTblName.userAvatars);
    rows = await db.query(sql, [id]);
    if (rows.length > 0) {
      row = rows[0];
      let oldFilename = path.join(fileDir, path.basename(row["originUrl"]));
      !!file && fs.unlink(oldFilename, e => {

      });
      oldFilename = path.join(fileDir, path.basename(row["url"]));
      !!fileName2.length && fs.unlink(oldFilename, e => {

      });
    }
  }

  if (!fileName2.length) {
    url = !!row ? row.url : "";
  }

  if (!fileName.length) {
    originUrl = !!row ? row.originUrl : "";
  }

  const newRows = [
    [id, url, originUrl, scale, borderRadius, xPosition, yPosition, rotate],
  ];
  sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `url` = VALUES(`url`), `originUrl` = VALUES(`originUrl`), `scale` = VALUES(`scale`), `borderRadius` = VALUES(`borderRadius`), `xPosition` = VALUES(`xPosition`), `yPosition` = VALUES(`yPosition`), `rotate` = VALUES(`rotate`);", dbTblName.userAvatars);
  try {
    rows = await db.query(sql, [newRows]);
    res.status(200).send({
      result: langs.success,
      message: langs.successfullySaved,
      data: rows,
    });
  } catch (err) {
    tracer.error(JSON.stringify(err));
    tracer.error(__filename);
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
      err,
    });
  }
};

const savePersonalInfo = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {id, username, firstName, fatherName, lastName} = req.body;

  let sql = sprintf("UPDATE `%s` SET `username` = ?, `firstName` = ?, `fatherName` = ?, `lastName` = ? WHERE `id` = ?", dbTblName.users);
  try {
    await db.query(sql, [username, firstName, fatherName, lastName, id]);

    sql = sprintf("SELECT U.*, A.accountType FROM `%s` U LEFT JOIN `%s` A ON A.id = U.id WHERE U.id = ?;", dbTblName.users, dbTblName.accountSettings);
    let rows = await db.query(sql, [id]);

    if (rows.length === 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.invalidUser,
      });
      return;
    }

    const user = rows[0];

    const token = jwt.sign(
      {
        id: id,
        email: user.email,
        firstName: firstName,
        fatherName: fatherName,
        lastName: lastName,
      },
      session.secret
    );

    const accountType = user["accountType"] || accountTypes.WORK;
    res.status(200).send({
      result: langs.success,
      message: langs.successfullySaved,
      data: {
        user: {...user, accountType},
        account: {type: accountType},
        token,
      },
    });
  } catch (err) {
    tracer.error(JSON.stringify(err));
    tracer.error(__filename);
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
      err,
    });
  }
};

const changePasswordProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {id, password0, password} = req.body;

  const hash0 = myCrypto.hmacHex(password0 || "");
  const hash = myCrypto.hmacHex(password || "");

  let sql = sprintf("SELECT * FROM `%s` WHERE `id` = ? AND `hash` = ?;", dbTblName.users);
  try {
    let rows = await db.query(sql, [id, hash0]);
    if (rows.length === 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.currentPasswordIncorrect,
      });
      return;
    }
    sql = sprintf("UPDATE `%s` SET `hash` = ? WHERE `id` = ?;", dbTblName.users);
    await db.query(sql, [hash, id]);
    res.status(200).send({
      result: langs.success,
      message: langs.passwordIsSuccessfullyChanged,
    });
  } catch (err) {
    tracer.error(JSON.stringify(err));
    tracer.error(__filename);
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
      err,
    });
  }
};

const changeAccountTypeProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {id, type} = req.body;

  let sql = sprintf("INSERT INTO `%s`(`id`, `accountType`) VALUES ? ON DUPLICATE KEY UPDATE `accountType` = VALUES(`accountType`);", dbTblName.accountSettings);
  let newRows = [
    [id, type],
  ];
  try {
    await db.query(sql, [newRows]);

    sql = sprintf("SELECT U.*, A.accountType FROM `%s` U LEFT JOIN `%s` A ON A.id = U.id WHERE U.id = ?;", dbTblName.users, dbTblName.accountSettings);
    let rows = await db.query(sql, [id]);

    if (rows.length === 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.invalidUser,
      });
      return;
    }

    const user = rows[0];

    const token = jwt.sign(
      {
        id: id,
        email: user.email,
        firstName: user.firstName,
        fatherName: user.fatherName,
        lastName: user.lastName,
      },
      session.secret
    );

    const accountType = user["accountType"] || accountTypes.WORK;
    res.status(200).send({
      result: langs.success,
      message: langs.successfullyChanged,
      data: {
        user: {...user, accountType},
        account: {type: accountType},
        token,
      },
    });
  } catch (err) {
    tracer.error(JSON.stringify(err));
    tracer.error(__filename);
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
      err,
    });
  }
};

const router = express.Router();

router.post("/avatar", avatarProc);
router.post("/save-avatar", saveAvatarProc);
router.post("/save-personal-info", savePersonalInfo);
router.post("/change-password", changePasswordProc);
router.post("/change-account-type", changeAccountTypeProc);

export default router;
