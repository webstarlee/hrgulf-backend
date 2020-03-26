import express from "express";
import path from "path";
import fs from "fs";
import {dbTblName} from "core/config";
import strings from "core/strings";
import tracer from "core/tracer";
import consts from "core/consts";
import helpers from "core/helpers";
import db from "core/db";
import {sprintf} from "sprintf-js";

const _listItems = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {userId, type, keyword, page, pageSize} = req.body;

  try {
    let conditions = {
      userId: {
        type: "=",
        value: userId,
      },
      name: {
        type: "LIKE",
        value: `%${keyword}%`,
      },
      deletedDate: {
        type: "=",
        value: "",
      },
    };
    if (!!type) {
      conditions["type"] = {
        type: "=",
        value: type,
      }
    }
    const data = await helpers.listQuery({table: dbTblName.hire.letters, conditions, page: page || 1, pageSize});

    res.status(200).send({
      result: langs.success,
      ...data,
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

const _listLocations = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];

  try {
    let sql = sprintf("SELECT C.*, J.count FROM %s C JOIN (SELECT J.countryId, COUNT(*) `count` FROM %s J WHERE  J.deletedDate = ? AND J.isActive = ? GROUP BY J.countryId) J ON J.countryId = C.id ORDER BY J.count DESC, C.id ASC;", dbTblName.core.countries, dbTblName.hire.jobs.main);
    const rows = await db.query(sql, ["", 1]);

    res.status(200).send({
      result: langs.success,
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

const listProc = async (req, res, next) => {
  await _listItems(req, res, next);
};

const listLocationsProc = async (req, res, next) => {
  await _listLocations(req, res, next);
};

const router = express.Router();

router.post("/list", listProc);
router.post("/list-locations", listLocationsProc);
// router.post("/upload-attachment", deleteProc);

export default router;
