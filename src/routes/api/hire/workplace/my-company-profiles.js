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

const loadSalaryProc = async (req, res, next) => {
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
    let data = await helpers.getQuery({table: dbTblName.hireMyCompanyProfiles, conditions});
    if (!!data) {
      res.status(200).send({
        result: langs.success,
        data: {
          unit: data.salaryUnit,
          min: data.salaryMin,
          max: data.salaryMax,
        },
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

const saveSalaryProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, unit, min, max} = req.body;

  const newRows = [
    [id, unit, min, max, "", "", "", ""],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `salaryUnit` = VALUES(`salaryUnit`), `salaryMin` = VALUES(`salaryMin`), `salaryMax` = VALUES(`salaryMax`);", dbTblName.hireMyCompanyProfiles);
  try {
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

const loadAboutProc = async (req, res, next) => {
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
    let data = await helpers.getQuery({table: dbTblName.hireMyCompanyProfiles, conditions});
    if (!!data) {
      res.status(200).send({
        result: langs.success,
        data: {
          value: data.about,
        },
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

const saveAboutProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, value} = req.body;

  const newRows = [
    [id, "", 0, 0, value, "", "", ""],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `about` = VALUES(`about`);", dbTblName.hireMyCompanyProfiles);
  try {
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

const loadVisionProc = async (req, res, next) => {
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
    let data = await helpers.getQuery({table: dbTblName.hireMyCompanyProfiles, conditions});
    if (!!data) {
      res.status(200).send({
        result: langs.success,
        data: {
          value: data.vision,
        },
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

const saveVisionProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, value} = req.body;

  const newRows = [
    [id, "", 0, 0, "", value, "", ""],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `vision` = VALUES(`vision`);", dbTblName.hireMyCompanyProfiles);
  try {
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

const loadMissionProc = async (req, res, next) => {
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
    let data = await helpers.getQuery({table: dbTblName.hireMyCompanyProfiles, conditions});
    if (!!data) {
      res.status(200).send({
        result: langs.success,
        data: {
          value: data.mission,
        },
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

const saveMissionProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, value} = req.body;

  const newRows = [
    [id, "", 0, 0, "", "", value, ""],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `mission` = VALUES(`mission`);", dbTblName.hireMyCompanyProfiles);
  try {
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

const loadCoverPhotoProc = async (req, res, next) => {
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
    let data = await helpers.getQuery({table: dbTblName.hireMyCompanyProfiles, conditions});
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

const saveCoverPhotoProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, file} = req.body;

  const appDir = process.cwd();
  const fileDir = path.join(appDir, "public", consts.uploadPath.hire.workplace.myCompanyProfiles);
  let fileName = "";

  if (!!file) {
    fileName = await helpers.uploadFile(file, fileDir);
  }
  let coverPhoto = sprintf("%s/%s", consts.uploadPath.hire.workplace.myCompanyProfiles, fileName);

  let rows, row;
  let sql
  if (!!id) {
    sql = sprintf("SELECT * FROM `%s` WHERE `id` = ?;", dbTblName.hireMyCompanyProfiles);
    rows = await db.query(sql, [id]);
    if (rows.length > 0) {
      row = rows[0];
      let oldFilename = path.join(fileDir, path.basename(row["coverPhoto"]));
      !!file && fs.unlink(oldFilename, e => {

      });
    }
  }

  const newRows = [
    [id, "", 0, 0, "", "", "", !!file ? coverPhoto : ""],
  ];
  sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `coverPhoto` = VALUES(`coverPhoto`);", dbTblName.hireMyCompanyProfiles);
  try {
    let rows = await db.query(sql, [newRows]);
    res.status(200).send({
      result: langs.success,
      message: langs.successfullySaved,
      data: {rows, coverPhoto},
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

router.post("/load-salary", loadSalaryProc);
router.post("/save-salary", saveSalaryProc);
router.post("/load-about", loadAboutProc);
router.post("/save-about", saveAboutProc);
router.post("/load-vision", loadVisionProc);
router.post("/save-vision", saveVisionProc);
router.post("/load-mission", loadMissionProc);
router.post("/save-mission", saveMissionProc);
router.post("/load-cover-photo", loadCoverPhotoProc);
router.post("/save-cover-photo", saveCoverPhotoProc);

export default router;
