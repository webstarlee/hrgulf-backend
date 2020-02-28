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

const _listQuestionnaires = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {userId, keyword, page, pageSize} = req.body;

  try {
    let conditions = {
      userId: {
        type: "=",
        value: userId,
      },
      name: {
        type: "LIKE",
        value: `%${keyword}%`,
      }
    };
    const data = await helpers.listQuery({table: dbTblName.hireQuestionnaire, conditions, page: page || 1, pageSize});

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

const _listQuestions = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {questionnaireId, page, pageSize} = req.body;

  try {
    let conditions = {
      questionnaireId: {
        type: "=",
        value: questionnaireId,
      },
    };
    const data = await helpers.listQuery({table: dbTblName.hireQuestionnaireQuestions, conditions, page: page || 1, pageSize});

    let index = 0;
    for (let row of data.data) {
      row["number"] = ++index;
    }

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
  await _listQuestionnaires(req, res, next);
};

const saveProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, userId, name, description, filterByScore, minScore} = req.body;

  const newRows = [
    [id, userId, name, description, filterByScore, minScore],
  ];

  try {
    let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `name` = VALUES(`name`), `description` = VALUES(`description`), `filterByScore` = VALUES(`filterByScore`), `minScore` = VALUES(`minScore`);", dbTblName.hireQuestionnaire);
    let rows = await db.query(sql, [newRows]);
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

const getProc = async (req, res, next) => {
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
    const data = await helpers.getQuery({table: dbTblName.hireQuestionnaire, conditions});
    if (!!data) {
      res.status(200).send({
        result: langs.success,
        data,
      });
    } else {
      res.status(200).send({
        result: langs.error,
        message: langs.notFound,
      });
    }
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
    await helpers.deleteQuery({table: dbTblName.hireQuestionnaire, conditions});

    await _listQuestionnaires(req, res, next);
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

const listQuestionsProc = async (req, res, next) => {
  await _listQuestions(req, res, next);
};

const saveQuestionProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, questionnaireId, question, required} = req.body;

  const newRows = [
    [id, questionnaireId, question, 0],
  ];

  try {
    let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `questionnaireId` = VALUES(`questionnaireId`), `question` = VALUES(`question`);", dbTblName.hireQuestionnaireQuestions);
    let rows = await db.query(sql, [newRows]);
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

const getQuestionProc = async (req, res, next) => {
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
    const data = await helpers.getQuery({table: dbTblName.hireQuestionnaireQuestions, conditions});
    if (!!data) {
      res.status(200).send({
        result: langs.success,
        data,
      });
    } else {
      res.status(200).send({
        result: langs.error,
        message: langs.notFound,
      });
    }
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

const deleteQuestionProc = async (req, res, next) => {
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
    await helpers.deleteQuery({table: dbTblName.hireQuestionnaireQuestions, conditions});

    await _listQuestions(req, res, next);
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
router.post("/save", saveProc);
router.post("/get", getProc);
router.post("/delete", deleteProc);

router.post("/list-questions", listQuestionsProc);
router.post("/save-question", saveQuestionProc);
router.post("/get-question", getQuestionProc);
router.post("/delete-question", deleteQuestionProc);

export default router;
