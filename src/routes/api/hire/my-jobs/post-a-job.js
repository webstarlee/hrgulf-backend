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

const postJobProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {hireId, jobInformation, candidateRequirements} = req.body;

  try{
    let data = jobInformation || {};
    let newRows = [
      [data.id, hireId, data.candidateType, data.title, data.jobRoleId, data.jobSubroleId, data.sectorId, data.industryId, data.countryId, data.cityId, data.employmentTypeId, data.salaryRangeId, data.vacanciesCount, data.description, data.skills, data.specialties, data.questionnaireId, data.isActive, ""],
    ];
    let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `candidateType` = VALUES(`candidateType`), `title` = VALUES(`title`), `jobRoleId` = VALUES(`jobRoleId`), `jobSubroleId` = VALUES(`jobSubroleId`), `sectorId` = VALUES(`sectorId`), `industryId` = VALUES(`industryId`), `countryId` = VALUES(`countryId`), `cityId` = VALUES(`cityId`), `employmentTypeId` = VALUES(`employmentTypeId`), `salaryRangeId` = VALUES(`salaryRangeId`), `vacanciesCount` = VALUES(`vacanciesCount`), `description` = VALUES(`description`), `skills` = VALUES(`skills`), `specialties` = VALUES(`specialties`), `questionnaireId` = VALUES(`questionnaireId`), `isActive` = VALUES(`isActive`);", dbTblName.hire.jobs.main);
    tracer.info(jobInformation, newRows);

    let rows = await db.query(sql, [newRows]);

    data = candidateRequirements || {};
    newRows = [
      [rows.insertId, data.careerLevel, data.xpYear1, data.xpYear2, data.majorId, data.degree, data.countryId, data.cityId, data.nationalityId, data.gender, data.age1, data.age2, ""],
    ];
    sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `careerLevel` = VALUES(`careerLevel`), `xpYear1` = VALUES(`xpYear1`), `xpYear2` = VALUES(`xpYear2`), `majorId` = VALUES(`majorId`), `degree` = VALUES(`degree`), `countryId` = VALUES(`countryId`), `cityId` = VALUES(`cityId`), `nationalityId` = VALUES(`nationalityId`), `gender` = VALUES(`gender`), `age1` = VALUES(`age1`), `age2` = VALUES(`age2`);", dbTblName.hire.jobs.candidateRequirements);
    await db.query(sql, [newRows]);

    res.status(200).send({
      result: langs.success,
      ...rows,
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

router.post("/post-job", postJobProc);

export default router;
