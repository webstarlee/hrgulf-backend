import express from "express";
import {sprintf} from "sprintf-js";
import dateformat from "dateformat";
import {dbTblName} from "core/config";
import db from "core/db";
import strings from "core/strings";
import tracer from "core/tracer";
import consts from "core/consts";

const _loadData = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {page, pageSize, userId, scope, search} = req.body;
  page || (page = 1);
  pageSize || (pageSize = consts.defaultPageSize);

  const start = pageSize * (page - 1);

  search = `%${search}%`;

  let allowedWhere = "";
  if (scope === "new") {
    allowedWhere = "AND `allowedDate` = ''";
  }

  let sql = sprintf("SELECT * FROM `%s` WHERE `deletedDate` = ? AND (`email` LIKE ? OR `username` LIKE ? AND `firstName` LIKE ? AND `lastName` LIKE ? AND `jobTitle` LIKE ? AND `sector` LIKE ? AND `company` LIKE ? AND `city` LIKE ? AND `phone` LIKE ?) %s ORDER BY `createdDate` DESC LIMIT ?, ?;", dbTblName.users, allowedWhere);
  // let sql = sprintf("SELECT * FROM `%s` WHERE `deletedDate` = ? %s ORDER BY LENGTH(`allowedDate`) ASC, `createdDate` DESC LIMIT ?, ?;", dbTblName.users, allowedWhere);

  // tracer.info(sql);

  try {
    let rows = await db.query(sql, ["", search, search, search, search, search, search, search, search, search, start, pageSize]);
    let number = start + 1;
    for (let row of rows) {
      row["number"] = number++;
      row["gender"] = row["gender"] === consts.male ? langs.male : langs.female;
    }

    sql = sprintf("SELECT COUNT(`id`) `count` FROM `%s` WHERE `deletedDate` = ? AND (`email` LIKE ? OR `username` LIKE ? AND `firstName` LIKE ? AND `lastName` LIKE ? AND `jobTitle` LIKE ? AND `sector` LIKE ? AND `company` LIKE ? AND `city` LIKE ? AND `phone` LIKE ?) %s;", dbTblName.users, allowedWhere);

    let count = await db.query(sql, ["", search, search, search, search, search, search, search, search, search]);
    let pageCount = 0;
    count.length > 0 && (pageCount = Math.ceil(count[0]["count"] / pageSize));
    res.status(200).send({
      result: langs.success,
      count: count[0]["count"],
      pageCount,
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
  _loadData(req, res, next)
};

const allowProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, allow} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");

  let sql = sprintf("UPDATE `%s` SET `allowedDate` = ? WHERE `id` = ?;", dbTblName.users);
  try {
    await db.query(sql, [!!allow ? date : "", id]);

    _loadData(req, res, next);
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

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");

  let sql = sprintf("UPDATE `%s` SET `deletedDate` = ? WHERE `id` = ?;", dbTblName.users);
  try {
    await db.query(sql, [date, id]);

    _loadData(req, res, next);
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

const saveProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, email, username, firstName, fatherName, lastName, gender, birthday, jobTitle, sector, company, city, phone} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");

  let sql = sprintf("UPDATE `%s` SET `email` = ?, `username` = ?, `firstName` = ?, `fatherName` = ?, `lastName` = ?, `gender` = ?, `birthday` = ?, `jobTitle` = ?, `sector` = ?, `company` = ?, `city` = ?, `phone` = ?, `modifiedDate` = ? WHERE `id` = ?;", dbTblName.users);
  try {
    await db.query(sql, [email, username, firstName, fatherName, lastName, gender, birthday, jobTitle, sector, company, city, phone, date, id]);

    res.status(200).send({
      result: langs.success,
      message: langs.successfullySaved,
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

  let sql = sprintf("SELECT * FROM `%s` WHERE `id` = ?;", dbTblName.users);
  try {
    let rows = await db.query(sql, [id]);

    if (rows.length === 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.noData,
      });
      return;
    }

    const row = rows[0];
    res.status(200).send({
      result: langs.success,
      data: row,
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

const countProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];

  let sql = sprintf("SELECT (SELECT COUNT(`id`) FROM `%s` WHERE `deletedDate` = ?) `count`, (SELECT COUNT(`id`) FROM `%s` WHERE `allowedDate` = ? AND `deletedDate` = ?) `countAwaiting`;", dbTblName.users, dbTblName.users);

  try {
    let rows = await db.query(sql, ["", "", ""]);
    if (rows.length === 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.noData,
      });
      return;
    }

    const row = rows[0];
    res.status(200).send({
      result: langs.success,
      data: {
        count: row.count,
        countAwaiting: row.countAwaiting,
      }
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

const signInHistoryProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {days} = req.body;

  const today = new Date();
  const before = new Date(today.getTime() - (days || 15) * 24 * 3600000);
  const startDate = dateformat(before, "yyyy-mm-dd");
  const endDate = dateformat(today, "yyyy-mm-dd");

  let sql = sprintf("SELECT `date`, COUNT(`date`) `count` FROM `%s` WHERE `date` BETWEEN ? AND ? GROUP BY `date` ORDER BY `date` ASC;", dbTblName.usersSigninHistory);

  try {
    let rows = await db.query(sql, [startDate, endDate]);
    for (let row of rows) {
      // row["date"] = sprintf("%s GMT", dateformat(new Date(row["date"]), "mm-dd-yyyy"));
      row["date"] = new Date(row["date"]).getTime();
    }

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

const countPerGenderProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];

  let sql = sprintf("SELECT `gender`, COUNT(`id`) `count` FROM `%s` GROUP BY `gender`;", dbTblName.users);

  try {
    let rows = await db.query(sql);

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

const router = express.Router();

router.post("/list", listProc);
router.post("/allow", allowProc);
router.post("/delete", deleteProc);
router.post("/get", getProc);
router.post("/save", saveProc);
router.post("/count", countProc);
router.post("/sign-in-history", signInHistoryProc);
router.post("/count-per-gender", countPerGenderProc);

export default router;