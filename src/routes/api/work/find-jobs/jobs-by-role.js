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

const _listRoles = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {countryId, cityId} = req.body;

  try {
    let locationWhereArr = [];
    let locationValueArr = [];
    if (!!countryId) {
      locationWhereArr.push(sprintf("J.countryId = ?"));
      locationValueArr.push(countryId);
    }
    if (!!cityId) {
      locationWhereArr.push(sprintf("J.cityId = ?"));
      locationValueArr.push(cityId);
    }
    let locationWhere = !!locationWhereArr.length ? `${locationWhereArr.join(" AND ")} AND` : "";
    let sql = sprintf("SELECT R.*, J.count FROM %s R JOIN (SELECT J.jobRoleId, COUNT(*) `count` FROM %s J WHERE %s J.deletedDate = ? AND J.isActive = ? GROUP BY J.jobRoleId) J ON J.jobRoleId = R.id ORDER BY J.count DESC, R.id ASC;", dbTblName.core.jobRoles, dbTblName.hire.jobs.main, locationWhere);
    const rows = await db.query(sql, [...locationValueArr, "", 1]);

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

const listRolesProc = async (req, res, next) => {
  await _listRoles(req, res, next);
};

const router = express.Router();

router.post("/list", listProc);
router.post("/list-roles", listRolesProc);
// router.post("/upload-attachment", deleteProc);

export default router;
