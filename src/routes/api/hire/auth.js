import express from "express";
import jwt from "jsonwebtoken";
import {sprintf} from "sprintf-js";
import dateformat from "dateformat";

import {dbTblName, session} from "core/config";
import db from "core/db";
import myCrypto from "core/myCrypto";
import strings from "core/strings";
import tracer from "core/tracer";
import consts, {accountTypes} from "core/consts";

const signUpProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {name, location, size, type, countryCode, phone, firstName, fatherName, lastName, email, password} = req.body;
  const hash = myCrypto.hmacHex(password || "");
  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");
  const timestamp = today.toISOString();

  let sql = sprintf("SELECT `email` FROM `%s` WHERE `email` = ?;", dbTblName.core.users);
  let rows;
  try {
    rows = await db.query(sql, [email]);
    if (rows.length > 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.emailAlreadyRegistered,
      });
      return;
    }
    let newRows = [
      [null, name, 0, location, size, 0, 0, type, "", "", date, date, ""],
    ];
    sql = sprintf("INSERT INTO `%s` VALUES ?;", dbTblName.hire.accounts);
    rows = await db.query(sql, [newRows]);

    newRows = [
      [null, 0, "", rows.insertId, "ADMIN", email, "", hash, firstName, fatherName, lastName, countryCode, phone, "", location, location, 0, "", "U", date, date, "", 0, 0, ""],
    ];
    sql = sprintf("INSERT INTO `%s` VALUES ?;", dbTblName.core.users);
    await db.query(sql, [newRows]);

    // sendVerificationEmail(email);

    res.status(200).send({
      result: langs.success,
      message: langs.successfullyRegistered,
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

router.post("/sign-up", signUpProc);

export default router;
