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

  const newRows = [
    [!id ? null : id, jobRoleId, jobTitle, companyName, startDate, endDate, isPresent, jobLocationId, companySectorId, companyIndustryId, jobVisaStatusId, careerLevel, degree, university, majorId, graduatedDate, gradeId, 0, "", 1, ""]
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `jobRoleId` = VALUES(`jobRoleId`), `jobTitle` = VALUES(`jobTitle`), `companyName` = VALUES(`companyName`), `startDate` = VALUES(`startDate`), `endDate` = VALUES(`endDate`), `isPresent` = VALUES(`isPresent`), `jobLocationId` = VALUES(`jobLocationId`), `companySectorId` = VALUES(`companySectorId`), `companyIndustryId` = VALUES(`companyIndustryId`), `jobVisaStatusId` = VALUES(`jobVisaStatusId`), `careerLevel` = VALUES(`careerLevel`), `degree` = VALUES(`degree`), `university` = VALUES(`university`), `majorId` = VALUES(`majorId`), `graduatedDate` = VALUES(`graduatedDate`), `gradeId` = VALUES(`gradeId`), `isVisited` = VALUES(`isVisited`);", dbTblName.work.accounts);
  try {
    let rows = await db.query(sql, [newRows]);
    return {
      rows,
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
    const {work} = await _save(req, res, next);
    res.status(200).send({
      result: langs.success,
      message: langs.successfullySaved,
      data:  {
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

const saveMinifiedProfile = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, userId, birthday, nationalityId, countryId, cityId, countryCode, phone} = req.body;

  try {
    const {rows, work} = await _save(req, res, next);

    const newRow = [!id ? rows.insertId : id, birthday, nationalityId, countryId, cityId, countryCode, phone];
    let sql = sprintf("UPDATE `%s` SET `workId` = ?, `birthday` = ?, `nationalityId` = ?, `countryId` = ?, `cityId` = ?, `countryCode` = ?, `phone` = ? WHERE `id` = ?;", dbTblName.core.users);
    await db.query(sql, [...newRow, userId]);

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
