import express from "express";
import {sprintf} from "sprintf-js";
import config, {dbTblName, smtp} from "core/config";
import db from "core/db";
import strings from "core/strings";
import tracer from "core/tracer";
import consts from "core/consts";
import mailer from "core/mailer";
import helpers from "core/helpers";


const sendProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {name, subject, message} = req.body;

  try {
    let sql = sprintf("SELECT * FROM `%s`;", dbTblName.users);
    let rows = await db.query(sql);
    let to = [];
    let result = [];
    for (let row of rows) {
      // mailer.sendMassMail(row['email'], subject, message);
      to.push(row["email"]);
      if (to.length >= smtp.limit.receipt) {
        result.push(await mailer.sendMassMail(to.join(","), name, subject, message));
        to = [];
        await helpers.sleep(60000 / smtp.limit.message);
      }
    }
    if (!!to.length) {
      result.push(await mailer.sendMassMail(to.join(","), name, subject, message));
    }

    res.status(200).send({
      result: langs.success,
      message: langs.successfullySent,
      // data: result,
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

router.post("/send", sendProc);

export default router;
