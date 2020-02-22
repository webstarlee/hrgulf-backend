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

const _loadDepartments = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  // const {} = req.body;

  try {
    const data = await helpers.listQuery({table: dbTblName.hireEmployerTestDepartments});

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

const _loadCategories = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {departmentId} = req.body;

  try {
    let conditions = {
      departmentId: {
        type: "=",
        value: departmentId,
      },
    };
    const data = await helpers.listQuery({table: dbTblName.hireEmployerTestCategories, conditions});

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

const departmentsProc = async (req, res, next) => {
  await _loadDepartments(req, res, next);
};

const categoriesProc = async (req, res, next) => {
  await _loadCategories(req, res, next);
};

const router = express.Router();

router.post("/departments", departmentsProc);
router.post("/categories", categoriesProc);

export default router;
