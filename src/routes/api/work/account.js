import express from "express";
import {dbTblName} from "core/config";
import strings from "core/strings";
import tracer from "core/tracer";
import consts from "core/consts";
import db from "core/db";
import {sprintf} from "sprintf-js";

const _save = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, jobRoleId, jobTitle, companyName, startDate, endDate, isPresent, jobLocationId, companySectorId, companyIndustryId, jobVisaStatusId, careerLevel, degree, university, majorId, graduatedDate, gradeId} = req.body;

  const newRow = [jobRoleId, jobTitle, companyName, startDate, endDate, isPresent, jobLocationId, companySectorId, companyIndustryId, jobVisaStatusId, careerLevel, degree, university, majorId, graduatedDate, gradeId];
  let sql = sprintf("UPDATE `%s` SET `jobRoleId` = ?, `jobTitle` = ?, `companyName` = ?, `startDate` = ?, `endDate` = ?, `isPresent` = ?, `jobLocationId` = ?, `companySectorId` = ?, `companyIndustryId` = ?, `jobVisaStatusId` = ?, `careerLevel` = ?, `degree` = ?, `university` = ?, `majorId` = ?, `graduatedDate` = ?, `gradeId` = ?, `isVisited` = ? WHERE `id` = ?;", dbTblName.work.accounts);
  try {
    let rows = await db.query(sql, [...newRow, 1, id]);
    return {
      work: {id, jobRoleId, jobTitle, companyName, startDate, endDate, isPresent, jobLocationId, companySectorId, companyIndustryId, jobVisaStatusId, careerLevel, degree, university, majorId, graduatedDate, gradeId, isVisited: 1},
    };
  } catch (err) {
    throw err;
  }
};

const saveProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  try {
    const {hire} = await _save(req, res, next);
    res.status(200).send({
      result: langs.success,
      message: langs.successfullySaved,
      data:  {
        hire,
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

const saveMinifiedProfile = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {userId, birthday, nationalityId, countryId, cityId, countryCode, phone} = req.body;

  const newRow = [birthday, nationalityId, countryId, cityId, countryCode, phone];
  let sql = sprintf("UPDATE `%s` SET `birthday` = ?, `nationalityId` = ?, `countryId` = ?, `cityId` = ?, `countryCode` = ?, `phone` = ? WHERE `id` = ?;", dbTblName.core.users);
  try {
    let rows = await db.query(sql, [...newRow, userId]);
    const {work} = await _save(req, res, next);
    res.status(200).send({
      result: langs.success,
      message: langs.successfullySaved,
      data:  {
        user: {birthday, nationalityId, countryId, cityId, countryCode, phone},
        work,
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

const router = express.Router();

router.post("/save", saveProc);
router.post("/save-minified-profile", saveMinifiedProfile);

export default router;
