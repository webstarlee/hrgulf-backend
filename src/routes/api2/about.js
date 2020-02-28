import express from "express";
import {sprintf} from "sprintf-js";
import dateformat from "dateformat";
import path from "path";
import uuid from "uuid";
import fs from "fs";
import mkdirp from "mkdirp";
import {dbTblName} from "core/config";
import db from "core/db";
import strings from "core/strings";
import tracer from "core/tracer";
import consts from "core/consts";

const loadAboutUs = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];

  let sql = sprintf("SELECT * FROM `%s`;", dbTblName.aboutUs);

  try {
    let rows = await db.query(sql);
    let data = {
      brochure: "",
      video: "",
    };
    if (rows.length > 0) {
      data = rows[0];
    }

    res.status(200).send({
      result: langs.success,
      data,
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

router.post("/load-aboutus", loadAboutUs);

export default router;
