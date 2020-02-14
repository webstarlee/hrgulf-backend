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

const saveAboutUs = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {scope, brochure, video} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");
  const time = dateformat(today, "hh:MM TT");
  const timestamp = today.getTime();

  const appDir = process.cwd();
  const fileDir = path.join(appDir, "public", consts.uploadPath.aboutUs);

  const brochureName = sprintf("%s%s", uuid(), path.extname(brochure.path));
  const brochurePath = path.join(fileDir, brochureName);
  const brochureWritable = fs.createWriteStream(brochurePath);
  const brochureMedia = sprintf("%s/%s", consts.uploadPath.aboutUs, brochureName);

  const videoName = sprintf("%s%s", uuid(), path.extname(video.path));
  const videoPath = path.join(fileDir, videoName);
  const videoWritable = fs.createWriteStream(videoPath);
  const videoMedia = sprintf("%s/%s", consts.uploadPath.aboutUs, videoName);
  mkdirp(fileDir, () => {
    brochure.on("end", async e => {
      video.on("end", async e => {
        let sql;
        let rows;
        if (scope) {
          sql = sprintf("SELECT * FROM `%s` WHERE `scope` = ?;", dbTblName.aboutUs);
          rows = await db.query(sql, [scope]);
          if (rows.length > 0) {
            let oldFilename = path.join(fileDir, path.basename(rows[0]["brochure"]));
            tracer.debug(oldFilename);
            fs.unlink(oldFilename, e => {

            });
            oldFilename = path.join(fileDir, path.basename(rows[0]["video"]));
            tracer.debug(oldFilename);
            fs.unlink(oldFilename, e => {

            });
          }
        }

        const newRows = [
          [scope || null, brochureMedia, videoMedia],
        ];
        sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `brochure` = VALUES(`brochure`), `video` = VALUES(`video`);", dbTblName.aboutUs);
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
      });
      video.on("error", err => {
        tracer.error(JSON.stringify(err));
        tracer.error(__filename);
        res.status(200).send({
          result: langs.error,
          message: langs.unknownServerError,
          err,
        });
      });
      video.pipe(videoWritable);
    });
    brochure.on("error", err => {
      tracer.error(JSON.stringify(err));
      tracer.error(__filename);
      res.status(200).send({
        result: langs.error,
        message: langs.unknownServerError,
        err,
      });
    });
    brochure.pipe(brochureWritable);
  });
};

const saveAboutUsBrochure = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {scope, brochure, originBrochure} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");
  const time = dateformat(today, "hh:MM TT");
  const timestamp = today.getTime();

  const appDir = process.cwd();
  const fileDir = path.join(appDir, "public", consts.uploadPath.aboutUs);

  const brochureName = sprintf("%s%s", uuid(), path.extname(brochure.path));
  const brochurePath = path.join(fileDir, brochureName);
  const brochureWritable = fs.createWriteStream(brochurePath);
  const brochureMedia = sprintf("%s/%s", consts.uploadPath.aboutUs, brochureName);
  mkdirp(fileDir, () => {
    brochure.on("end", async e => {
      let sql;
      let rows;
      if (scope) {
        sql = sprintf("SELECT * FROM `%s` WHERE `scope` = ?;", dbTblName.aboutUs);
        rows = await db.query(sql, [scope]);
        if (rows.length > 0) {
          let oldFilename = path.join(fileDir, path.basename(rows[0]["brochure"]));
          tracer.debug(oldFilename);
          fs.unlink(oldFilename, e => {

          });
        }
      }

      const newRows = [
        [scope || null, brochureMedia, originBrochure, "", ""],
      ];
      sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `brochure` = VALUES(`brochure`), `originBrochure` = VALUES(`originBrochure`);", dbTblName.aboutUs);
      try {
        rows = await db.query(sql, [newRows]);
        res.status(200).send({
          result: langs.success,
          message: langs.successfullySaved,
          data: {
            originBrochure,
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
    });
    brochure.on("error", err => {
      tracer.error(JSON.stringify(err));
      tracer.error(__filename);
      res.status(200).send({
        result: langs.error,
        message: langs.unknownServerError,
        err,
      });
    });
    brochure.pipe(brochureWritable);
  });
};

const saveAboutUsVideo = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {scope, brochure, video, originVideo} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");
  const time = dateformat(today, "hh:MM TT");
  const timestamp = today.getTime();

  const appDir = process.cwd();
  const fileDir = path.join(appDir, "public", consts.uploadPath.aboutUs);

  const videoName = sprintf("%s%s", uuid(), path.extname(video.path));
  const videoPath = path.join(fileDir, videoName);
  const videoWritable = fs.createWriteStream(videoPath);
  const videoMedia = sprintf("%s/%s", consts.uploadPath.aboutUs, videoName);
  mkdirp(fileDir, () => {
    video.on("end", async e => {
      let sql;
      let rows;
      if (scope) {
        sql = sprintf("SELECT * FROM `%s` WHERE `scope` = ?;", dbTblName.aboutUs);
        rows = await db.query(sql, [scope]);
        if (rows.length > 0) {
          let
          oldFilename = path.join(fileDir, path.basename(rows[0]["video"]));
          tracer.debug(oldFilename);
          fs.unlink(oldFilename, e => {

          });
        }
      }

      const newRows = [
        [scope || null, "", "", videoMedia, originVideo],
      ];
      sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `video` = VALUES(`video`), `originVideo` = VALUES(`originVideo`);", dbTblName.aboutUs);
      try {
        rows = await db.query(sql, [newRows]);
        res.status(200).send({
          result: langs.success,
          message: langs.successfullySaved,
          data: {
            originVideo,
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
    });
    video.on("error", err => {
      tracer.error(JSON.stringify(err));
      tracer.error(__filename);
      res.status(200).send({
        result: langs.error,
        message: langs.unknownServerError,
        err,
      });
    });
    video.pipe(videoWritable);
  });
};

const router = express.Router();

router.post("/load-aboutus", loadAboutUs);
router.post("/save-aboutus", saveAboutUs);
router.post("/save-aboutus-brochure", saveAboutUsBrochure);
router.post("/save-aboutus-video", saveAboutUsVideo);

export default router;
