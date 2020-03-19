import express from "express";
import {sprintf} from "sprintf-js";
import dateformat from "dateformat";
import path from "path";
import fs from "fs";

import {dbTblName} from "core/config";
import db from "core/db";
import myCrypto from "core/myCrypto";
import strings from "core/strings";
import tracer from "core/tracer";
import consts from "core/consts";
import helpers from "core/helpers";

const signUpProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {firstName, fatherName, lastName, email, password, jobRoleId, file} = req.body;
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

    let cvPath = "";
    if (!!file) {
      const cwd = process.cwd();
      const fileDir = path.join(cwd, "public", consts.uploadPath.work.cvs);
      const fileName = await helpers.uploadFile(file, fileDir);
      cvPath = `${consts.uploadPath.work.cvs}/${fileName}`;
    }

    let newRows = [
      [null, jobRoleId, "", "", "", "", 0, 0, 0, 0, 0, 0, 0, 0, "", 0, "", "U", 0, 0, 0, 0, !!file, cvPath, 0, ""],
    ];
    sql = sprintf("INSERT INTO `%s` VALUES ?;", dbTblName.work.accounts);
    rows = await db.query(sql, [newRows]);

    newRows = [
      [null, rows.insertId, "ADMIN", 0, "", email, "", hash, firstName, fatherName, lastName, "", "", "", 0, 0, 0, "", "U", date, date, "", 0, 0, ""],
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
