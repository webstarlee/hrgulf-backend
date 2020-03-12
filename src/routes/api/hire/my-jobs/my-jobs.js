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

const _listItems = async (req) => {
  const {hireId, keyword, type, page, pageSize} = req.body;

  try {
    let conditions = {
      hireId: {
        type: "=",
        value: hireId,
      },
      deletedDate: {
        type: "=",
        value: "",
      },
    };
    if (!!keyword) {
      conditions["title"] = {
        type: "LIKE",
        value: `%${keyword}%`,
      }
    }
    if (!!type) {
      conditions["isActive"] = {
        type: "=",
        value: type,
      }
    }
    const data = await helpers.listQuery({table: dbTblName.hire.jobs.main, conditions, page: page || 1, pageSize});

    return data;
  } catch (err) {
    throw err;
  }
};

const _listItemsProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];

  try {
    const data = await _listItems(req);

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

const listProc = async (req, res, next) => {
  await _listItemsProc(req, res, next);
};

const getProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id} = req.body;

  try {
    let conditions = {
      id: {
        type: "=",
        value: id,
      },
      deletedDate: {
        type: "=",
        value: "",
      },
    };
    const jobInformation = await helpers.getQuery({table: dbTblName.hire.jobs.main, conditions});
    const candidateRequirements = await helpers.getQuery({table: dbTblName.hire.jobs.candidateRequirements, conditions});

    res.status(200).send({
      result: langs.success,
      data: {
        jobInformation,
        candidateRequirements,
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

const activateProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, isActive} = req.body;

  let updates = {
    isActive,
  };

  let conditions = {
    id: {
      type: "=",
      value: id,
    }
  };

  try {
    await helpers.updateQuery({table: dbTblName.hire.jobs.main, updates, conditions});

    const data = await _listItems(req);

    res.status(200).send({
      result: langs.success,
      message: langs[!!isActive ? "successfullyActivated" : "successfullyDeactivated"],
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

const deleteProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id} = req.body;

  let conditions = {
    id: {
      type: "=",
      value: id,
    }
  };

  try {
    await helpers.deleteQuery({table: dbTblName.hire.jobs.main, conditions});

    await _listItemsProc(req, res, next);
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

router.post("/list", listProc);
router.post("/get", getProc);
router.post("/activate", activateProc);
router.post("/delete", deleteProc);

export default router;
