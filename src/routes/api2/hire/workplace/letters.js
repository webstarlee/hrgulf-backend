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
      }
    };
    if (!!type) {
      conditions["type"] = {
        type: "=",
        value: type,
      }
    }
    const data = await helpers.listQuery({table: dbTblName.hireLetters, conditions, page: page || 1, pageSize});

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
  await _listItems(req, res, next);
};

const saveProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, userId, type, name, subject, message, file} = req.body;

  const appDir = process.cwd();
  const fileDir = path.join(appDir, "public", consts.uploadPath.hire.workplace.letters);
  let fileName = "";

  if (!!file) {
    fileName = await helpers.uploadFile(file, fileDir);
  }
  let attachment = sprintf("%s/%s", consts.uploadPath.hire.workplace.letters, fileName);

  let sql;
  let rows;
  let row;
  if (!!id) {
    sql = sprintf("SELECT * FROM `%s` WHERE `id` = ?;", dbTblName.hireLetters);
    rows = await db.query(sql, [id]);
    if (rows.length > 0) {
      row = rows[0];
      let oldFilename = path.join(fileDir, path.basename(row["attachment"]));
      !!file && fs.unlink(oldFilename, e => {

      });
    }
  }

  if (!fileName.length) {
    attachment = !!row ? row.attachment : "";
  }
  const attached = !!attachment.length;

  const newRows = [
    [id, userId, type, name, subject, message, attached, attachment, ""],
  ];
  sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `type` = VALUES(`type`), `name` = VALUES(`name`), `subject` = VALUES(`subject`), `message` = VALUES(`message`), `attached` = VALUES(`attached`), `attachment` = VALUES(`attachment`), `attachmentName` = VALUES(`attachmentName`);", dbTblName.hireLetters);
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
    const data = await helpers.getQuery({table: dbTblName.hireLetters, conditions});
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
    await helpers.deleteQuery({table: dbTblName.hireLetters, conditions});

    await _listItems(req, res, next);
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

const uploadAttachmentProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id} = req.body;
};

const router = express.Router();

router.post("/list", listProc);
router.post("/save", saveProc);
router.post("/get", getProc);
router.post("/delete", deleteProc);
// router.post("/upload-attachment", deleteProc);

export default router;
