import express from "express";
import {dbTblName} from "core/config";
import strings from "core/strings";
import tracer from "core/tracer";
import consts from "core/consts";
import db from "core/db";
import {sprintf} from "sprintf-js";

const saveProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {id, name, size, sectorId, industryId, type, hideLocation, countryId, website, taxRegNumber} = req.body;

  const newRow = [name, size, sectorId, industryId, type, hideLocation, countryId, website, taxRegNumber];
  let sql = sprintf("UPDATE `%s` SET `name` = ?, `size` = ?, `sectorId` = ?, `industryId` = ?, `type` = ?, `hideLocation` = ?, `countryId` = ?, `website` = ?, `taxRegNumber` = ? WHERE `id` = ?;", dbTblName.hire.accounts);
  try {
    let rows = await db.query(sql, [...newRow, id]);
    res.status(200).send({
      result: langs.success,
      message: langs.successfullySaved,
      data:  {
        hire: {id, name, size, sectorId, industryId, type, hideLocation, countryId, website, taxRegNumber}
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

export default router;
