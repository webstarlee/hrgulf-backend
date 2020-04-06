import express from "express";
import {dbTblName} from "core/config";
import strings from "core/strings";
import tracer from "core/tracer";
import consts from "core/consts";
import helpers from "core/helpers";
import db from "core/db";
import {sprintf} from "sprintf-js";
import moment from "moment";

const _makeWhereClause = ({countries, cities, jobRoles, specialties, industries, careerLevels, employmentTypes, genders, companyTypes, companyNames, dateModified}) => {
  const whereArr = [];
  if (!!countries && !!countries.length) {
    whereArr.push(sprintf("J.countryId IN (%s)", countries));
  }
  if (!!cities && !!cities.length) {
    whereArr.push(sprintf("J.cityId IN (%s)", cities));
  }
  if (!!jobRoles && !!jobRoles.length) {
    whereArr.push(sprintf("J.jobRoleId IN (%s)", jobRoles));
  }
  if (!!specialties && !!specialties.length) {
    const specialtyArr = specialties.split(",");
    const subWhereArr = [];
    for (let item of specialtyArr) {
      subWhereArr.push(sprintf("FIND_IN_SET('%s', J.specialties)", item));
    }
    whereArr.push(sprintf("(%s)", subWhereArr.join(" OR ")));
  }
  if (!!industries && !!industries.length) {
    whereArr.push(sprintf("J.sectorId IN (%s)", industries));
  }
  if (!!careerLevels && !!careerLevels.length) {
    whereArr.push(sprintf("R.careerLevel IN (%s)", careerLevels));
  }
  if (!!employmentTypes && !!employmentTypes.length) {
    whereArr.push(sprintf("J.employmentTypeId IN (%s)", employmentTypes));
  }
  if (!!genders && !!genders.length) {
    whereArr.push(sprintf("FIND_IN_SET(R.gender, '%s')", genders));
  }
  if (!!companyTypes && !!companyTypes.length) {
    whereArr.push(sprintf("FIND_IN_SET(A.type, '%s')", companyTypes));
  }
  if (!!companyNames && !!companyNames.length) {
    whereArr.push(sprintf("FIND_IN_SET(A.name, '%s')", companyNames ));
  }
  // if (!!dateModified && !!dateModified.length) {
  //   whereArr.push(sprintf("J.jobRoleId IN (%s)", dateModified));
  // }

  const whereClause = !!whereArr.length ? sprintf("WHERE %s", whereArr.join(" AND ")) : "";

  return whereClause;
};

const _listItems = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {workId, countries, cities, jobRoles, specialties, industries, careerLevels, employmentTypes, genders, companyTypes, companyNames, dateModified, page, pageSize} = req.body;

  try {
    const whereClause = _makeWhereClause({countries, cities, jobRoles, specialties, industries, careerLevels, employmentTypes, genders, companyTypes, companyNames, dateModified});
    const limit = pageSize || consts.defaultPageSize;
    const start = ((page || 1) - 1) * limit;
    let sql = sprintf("SELECT J.*, R.*, JL1.jobRole_en, JL1.jobRole_ar, JL2.jobSubrole_en, JL2.jobSubrole_ar, ET.employmentType_en, ET.employmentType_ar, SL.minSalary, SL.maxSalary, A.name companyName, A.type companyType, L1.country_en, L1.country_ar, L2.city_en, L2.city_ar, CL.careerLevel_en, CL.careerLevel_ar, S.sector_en `companySector_en`, S.sector_ar `companySector_ar`, I.industry_en `companyIndustry_en`, I.industry_ar `companyIndustry_ar`, WC.status `candidateStatus` FROM %s J JOIN %s R ON R.id = J.id JOIN %s JL1 ON JL1.id = J.jobRoleId JOIN %s JL2 ON JL2.id = J.jobSubroleId JOIN %s A ON A.id = J.hireId LEFT JOIN %s ET ON ET.id = J.employmentTypeId LEFT JOIN %s SL ON SL.id = J.salaryRangeId LEFT JOIN %s L1 ON L1.id = J.countryId LEFT JOIN %s L2 ON L2.id = J.cityId LEFT JOIN %s CL ON CL.level = R.careerLevel LEFT JOIN %s S ON S.id = A.sectorId LEFT JOIN %s I ON I.id = A.industryId LEFT JOIN %s WC ON WC.workId = ? %s ORDER BY J.updatedDate DESC LIMIT ?, ?;", dbTblName.hire.jobs.main, dbTblName.hire.jobs.candidateRequirements, dbTblName.core.jobRoles, dbTblName.core.jobSubroles, dbTblName.hire.accounts, dbTblName.core.employmentTypes, dbTblName.core.salaryRanges, dbTblName.core.countries, dbTblName.core.cities, dbTblName.core.careerLevels, dbTblName.core.sectors, dbTblName.core.industries, dbTblName.work.jobs.candidates, whereClause);
    tracer.info(sql, start, limit);
    const rows = await db.query(sql, [workId, start, limit]);
    let diff;
    let nowEn;
    let nowAr;
    for (let row of rows) {
      nowEn = moment(row["createdDate"]);
      nowAr = moment(row["createdDate"]).locale("ar");
      diff = moment().diff(row["createdDate"], "day", true);
      row["createdDate_en"] = diff < 7 ? nowEn.fromNow() : nowEn.format("DD/MM/YYYY");
      row["createdDate_ar"] = diff < 7 ? nowAr.fromNow() : nowAr.format("DD/MM/YYYY");
    }

    sql = sprintf("SELECT COUNT(*) `count` FROM %s J JOIN %s R ON R.id = J.id JOIN %s A ON A.id = J.hireId %s;", dbTblName.hire.jobs.main, dbTblName.hire.jobs.candidateRequirements, dbTblName.hire.accounts, whereClause);
    const count = await db.query(sql);
    let pageCount = 0;
    count.length > 0 && (pageCount = Math.ceil(count[0]["count"] / limit));

    res.status(200).send({
      result: langs.success,
      data: rows,
      count: count[0]["count"],
      pageCount,
    });
  } catch (err) {
    helpers.handleErr(res, langs, err);
  }
};

const _listCountries = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {countries, cities, jobRoles, specialties, industries, careerLevels, employmentTypes, genders, companyTypes, companyNames, dateModified} = req.body;

  try {
    const whereClause = _makeWhereClause({jobRoles, specialties, industries, careerLevels, employmentTypes, genders, companyTypes, companyNames, dateModified});
    let sql = sprintf("SELECT M.*, J.count FROM %s M JOIN (SELECT J.countryId, COUNT(*) `count` FROM %s J JOIN %s R ON R.id = J.id JOIN %s A ON A.id = J.hireId %s GROUP BY J.countryId) J ON J.countryId = M.id AND J.count > 0 ORDER BY J.count DESC;", dbTblName.core.countries, dbTblName.hire.jobs.main, dbTblName.hire.jobs.candidateRequirements, dbTblName.hire.accounts, whereClause);
    const rows = await db.query(sql);

    res.status(200).send({
      result: langs.success,
      data: rows,
    });
  } catch (err) {
    helpers.handleErr(res, langs, err);
  }
};

const _listCities = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {countries, cities, jobRoles, specialties, industries, careerLevels, employmentTypes, genders, companyTypes, companyNames, dateModified} = req.body;

  try {
    const whereClause = _makeWhereClause({countries, jobRoles, specialties, industries, careerLevels, employmentTypes, genders, companyTypes, companyNames, dateModified});
    let sql = sprintf("SELECT M.*, J.count FROM %s M JOIN (SELECT J.cityId, COUNT(*) `count` FROM %s J JOIN %s R ON R.id = J.id JOIN %s A ON A.id = J.hireId %s GROUP BY J.cityId) J ON J.cityId = M.id AND J.count > 0 ORDER BY J.count DESC;", dbTblName.core.cities, dbTblName.hire.jobs.main, dbTblName.hire.jobs.candidateRequirements, dbTblName.hire.accounts, whereClause);
    const rows = await db.query(sql);

    res.status(200).send({
      result: langs.success,
      data: rows,
    });
  } catch (err) {
    helpers.handleErr(res, langs, err);
  }
};

const _listJobRoles = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {countries, cities, jobRoles, specialties, industries, careerLevels, employmentTypes, genders, companyTypes, companyNames, dateModified} = req.body;

  try {
    const whereClause = _makeWhereClause({countries, cities, specialties, industries, careerLevels, employmentTypes, genders, companyTypes, companyNames, dateModified});
    let sql = sprintf("SELECT M.*, J.count FROM %s M JOIN (SELECT J.jobRoleId, COUNT(*) `count` FROM %s J JOIN %s R ON R.id = J.id JOIN %s A ON A.id = J.hireId %s GROUP BY J.jobRoleId) J ON J.jobRoleId = M.id AND J.count > 0 ORDER BY J.count DESC;", dbTblName.core.jobRoles, dbTblName.hire.jobs.main, dbTblName.hire.jobs.candidateRequirements, dbTblName.hire.accounts, whereClause);
    const rows = await db.query(sql);

    res.status(200).send({
      result: langs.success,
      data: rows,
    });
  } catch (err) {
    helpers.handleErr(res, langs, err);
  }
};

const _listSpecialties = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {countries, cities, jobRoles, specialties, industries, careerLevels, employmentTypes, genders, companyTypes, companyNames, dateModified} = req.body;

  try {
    const whereClause = _makeWhereClause({countries, cities, jobRoles, industries, careerLevels, employmentTypes, genders, companyTypes, companyNames, dateModified});
    let sql = sprintf("SELECT M.*, J.count FROM %s M JOIN (SELECT J.specialties, COUNT(*) `count` FROM %s J JOIN %s R ON R.id = J.id JOIN %s A ON A.id = J.hireId %s GROUP BY J.specialties) J ON J.specialties = M.id AND J.count > 0 ORDER BY J.count DESC;", dbTblName.core.specialties, dbTblName.hire.jobs.main, dbTblName.hire.jobs.candidateRequirements, dbTblName.hire.accounts, whereClause);
    const rows = await db.query(sql);

    res.status(200).send({
      result: langs.success,
      data: rows,
    });
  } catch (err) {
    helpers.handleErr(res, langs, err);
  }
};

const _listIndustries = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {countries, cities, jobRoles, specialties, industries, careerLevels, employmentTypes, genders, companyTypes, companyNames, dateModified} = req.body;

  try {
    const whereClause = _makeWhereClause({countries, cities, jobRoles, specialties, careerLevels, employmentTypes, genders, companyTypes, companyNames, dateModified});
    let sql = sprintf("SELECT M.*, J.count FROM %s M JOIN (SELECT J.sectorId, COUNT(*) `count` FROM %s J JOIN %s R ON R.id = J.id JOIN %s A ON A.id = J.hireId %s GROUP BY J.sectorId) J ON J.sectorId = M.id AND J.count > 0 ORDER BY J.count DESC;", dbTblName.core.sectors, dbTblName.hire.jobs.main, dbTblName.hire.jobs.candidateRequirements, dbTblName.hire.accounts, whereClause);
    const rows = await db.query(sql);

    res.status(200).send({
      result: langs.success,
      data: rows,
    });
  } catch (err) {
    helpers.handleErr(res, langs, err);
  }
};

const _listCareerLevels = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {countries, cities, jobRoles, specialties, industries, careerLevels, employmentTypes, genders, companyTypes, companyNames, dateModified} = req.body;

  try {
    const whereClause = _makeWhereClause({countries, cities, jobRoles, specialties, industries, employmentTypes, genders, companyTypes, companyNames, dateModified});
    let sql = sprintf("SELECT M.*, J.count FROM %s M JOIN (SELECT R.careerLevel, COUNT(*) `count` FROM %s J JOIN %s R ON R.id = J.id JOIN %s A ON A.id = J.hireId %s GROUP BY R.careerLevel) J ON J.careerLevel = M.level AND J.count > 0 ORDER BY J.count DESC;", dbTblName.core.careerLevels, dbTblName.hire.jobs.main, dbTblName.hire.jobs.candidateRequirements, dbTblName.hire.accounts, whereClause);
    const rows = await db.query(sql);

    res.status(200).send({
      result: langs.success,
      data: rows,
    });
  } catch (err) {
    helpers.handleErr(res, langs, err);
  }
};

const _listEmploymentTypes = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {countries, cities, jobRoles, specialties, industries, careerLevels, employmentTypes, genders, companyTypes, companyNames, dateModified} = req.body;

  try {
    const whereClause = _makeWhereClause({countries, cities, jobRoles, specialties, industries, careerLevels, genders, companyTypes, companyNames, dateModified});
    let sql = sprintf("SELECT M.*, J.count FROM %s M JOIN (SELECT J.employmentTypeId, COUNT(*) `count` FROM %s J JOIN %s R ON R.id = J.id JOIN %s A ON A.id = J.hireId %s GROUP BY J.employmentTypeId) J ON J.employmentTypeId = M.id AND J.count > 0 ORDER BY J.count DESC;", dbTblName.core.employmentTypes, dbTblName.hire.jobs.main, dbTblName.hire.jobs.candidateRequirements, dbTblName.hire.accounts, whereClause);
    const rows = await db.query(sql);

    res.status(200).send({
      result: langs.success,
      data: rows,
    });
  } catch (err) {
    helpers.handleErr(res, langs, err);
  }
};

const _listGenders = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {countries, cities, jobRoles, specialties, industries, careerLevels, employmentTypes, genders, companyTypes, companyNames, dateModified} = req.body;

  try {
    const whereClause = _makeWhereClause({countries, cities, jobRoles, specialties, industries, careerLevels, employmentTypes, companyTypes, companyNames, dateModified});
    let sql = sprintf("SELECT * FROM (SELECT R.gender, COUNT(*) `count` FROM %s J JOIN %s R ON R.id = J.id JOIN %s A ON A.id = J.hireId %s GROUP BY R.gender) J WHERE J.gender != 'U' AND J.count > 0 ORDER BY J.count DESC;", dbTblName.hire.jobs.main, dbTblName.hire.jobs.candidateRequirements, dbTblName.hire.accounts, whereClause);
    const rows = await db.query(sql);

    res.status(200).send({
      result: langs.success,
      data: rows,
    });
  } catch (err) {
    helpers.handleErr(res, langs, err);
  }
};

const _listCompanyTypes = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {countries, cities, jobRoles, specialties, industries, careerLevels, employmentTypes, genders, companyTypes, companyNames, dateModified} = req.body;

  try {
    const whereClause = _makeWhereClause({countries, cities, jobRoles, specialties, industries, careerLevels, employmentTypes, genders, companyNames, dateModified});
    let sql = sprintf("SELECT * FROM (SELECT A.type `companyType`, COUNT(*) `count` FROM %s J JOIN %s R ON R.id = J.id JOIN %s A ON A.id = J.hireId %s GROUP BY A.type) J WHERE J.count > 0 ORDER BY J.count DESC;", dbTblName.hire.jobs.main, dbTblName.hire.jobs.candidateRequirements, dbTblName.hire.accounts, whereClause);
    const rows = await db.query(sql);

    res.status(200).send({
      result: langs.success,
      data: rows,
    });
  } catch (err) {
    helpers.handleErr(res, langs, err);
  }
};

const _listCompanyNames = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {countries, cities, jobRoles, specialties, industries, careerLevels, employmentTypes, genders, companyTypes, companyNames, dateModified} = req.body;

  try {
    const whereClause = _makeWhereClause({countries, cities, jobRoles, specialties, industries, careerLevels, employmentTypes, genders, companyTypes, dateModified});
    let sql = sprintf("SELECT * FROM (SELECT A.name `companyName`, COUNT(*) `count` FROM %s J JOIN %s R ON R.id = J.id JOIN %s A ON A.id = J.hireId %s GROUP BY A.name) J WHERE J.count > 0 ORDER BY J.count DESC;", dbTblName.hire.jobs.main, dbTblName.hire.jobs.candidateRequirements, dbTblName.hire.accounts, whereClause);
    const rows = await db.query(sql);

    res.status(200).send({
      result: langs.success,
      data: rows,
    });
  } catch (err) {
    helpers.handleErr(res, langs, err);
  }
};

const listProc = async (req, res, next) => {
  await _listItems(req, res, next);
};

const listCountriesProc = async (req, res, next) => {
  await _listCountries(req, res, next);
};

const listCitiesProc = async (req, res, next) => {
  await _listCities(req, res, next);
};

const listJobRolesProc = async (req, res, next) => {
  await _listJobRoles(req, res, next);
};

const listSpecialtiesProc = async (req, res, next) => {
  await _listSpecialties(req, res, next);
};

const listIndustriesProc = async (req, res, next) => {
  await _listIndustries(req, res, next);
};

const listCareerLevelsProc = async (req, res, next) => {
  await _listCareerLevels(req, res, next);
};

const listEmploymentTypesProc = async (req, res, next) => {
  await _listEmploymentTypes(req, res, next);
};

const listGendersProc = async (req, res, next) => {
  await _listGenders(req, res, next);
};

const listCompanyTypesProc = async (req, res, next) => {
  await _listCompanyTypes(req, res, next);
};

const listCompanyNamesProc = async (req, res, next) => {
  await _listCompanyNames(req, res, next);
};

const applyProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {workId, jobId} = req.body;

  try {

  } catch (err) {
    helpers.handleErr(res, langs, err);
  }
};

const router = express.Router();

router.post("/list", listProc);
router.post("/list-countries", listCountriesProc);
router.post("/list-cities", listCitiesProc);
router.post("/list-job-roles", listJobRolesProc);
router.post("/list-specialties", listSpecialtiesProc);
router.post("/list-industries", listIndustriesProc);
router.post("/list-career-levels", listCareerLevelsProc);
router.post("/list-employment-types", listEmploymentTypesProc);
router.post("/list-genders", listGendersProc);
router.post("/list-company-types", listCompanyTypesProc);
router.post("/list-company-names", listCompanyNamesProc);
router.post("/apply", applyProc);
// router.post("/upload-attachment", deleteProc);

export default router;
