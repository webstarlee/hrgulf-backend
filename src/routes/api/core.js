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

const getJobRolesProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];

  let conditions = {
    deletedDate: {
      type: "=",
      value: '',
    },
  };
  try {
    const data = await helpers.listQuery({table: dbTblName.core.jobRoles, pageSize: 500});

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

const getJobSubrolesProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {jobRoleId} = req.body;

  try {
    let conditions = {
      jobRoleId: {
        type: "=",
        value: jobRoleId,
      },
    };
    const data = await helpers.listQuery({table: dbTblName.core.jobSubroles, conditions, pageSize: 500});

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

const getSectorsProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];

  let conditions = {
    deletedDate: {
      type: "=",
      value: '',
    },
  };
  try {
    const data = await helpers.listQuery({table: dbTblName.core.sectors, pageSize: 500});

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

const getIndustriesProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {sectorId} = req.body;

  try {
    let conditions = {
      sectorId: {
        type: "=",
        value: sectorId,
      },
    };
    const data = await helpers.listQuery({table: dbTblName.core.industries, conditions, pageSize: 500});

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

const getCountriesProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];

  let conditions = {
    deletedDate: {
      type: "=",
      value: '',
    },
  };
  try {
    const data = await helpers.listQuery({table: dbTblName.core.countries, pageSize: 500});

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

const getCitiesProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  const {countryId} = req.body;

  try {
    let conditions = {
      countryId: {
        type: "=",
        value: countryId,
      },
    };
    const data = await helpers.listQuery({table: dbTblName.core.cities, conditions, pageSize: 500});

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

const getEmploymentTypesProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];

  let conditions = {
    deletedDate: {
      type: "=",
      value: '',
    },
  };
  try {
    const data = await helpers.listQuery({table: dbTblName.core.employmentTypes, pageSize: 500});

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

const getSalaryRangesProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];

  let conditions = {
    deletedDate: {
      type: "=",
      value: '',
    },
  };
  let orders = {
    minSalary: "ASC",
  };
  try {
    const data = await helpers.listQuery({table: dbTblName.core.salaryRanges, orders, pageSize: 500});

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

const getCareerLevelsProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];

  let conditions = {
    deletedDate: {
      type: "=",
      value: '',
    },
  };
  let orders = {
    level: "ASC",
  };
  try {
    const data = await helpers.listQuery({table: dbTblName.core.careerLevels, orders, pageSize: 500});

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

const getMajorsProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];

  let conditions = {
    deletedDate: {
      type: "=",
      value: '',
    },
  };
  let orders = {
    min: "ASC",
  };
  try {
    const data = await helpers.listQuery({table: dbTblName.core.majors, pageSize: 500});

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

const getDegreesProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];

  let conditions = {
    deletedDate: {
      type: "=",
      value: '',
    },
  };
  let orders = {
    level: "ASC",
  };
  try {
    const data = await helpers.listQuery({table: dbTblName.core.degrees, orders, pageSize: 500});

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

const router = express.Router();

router.post("/get-job-roles", getJobRolesProc);
router.post("/get-job-subroles", getJobSubrolesProc);
router.post("/get-sectors", getSectorsProc);
router.post("/get-industries", getIndustriesProc);
router.post("/get-countries", getCountriesProc);
router.post("/get-cities", getCitiesProc);
router.post("/get-employment-types", getEmploymentTypesProc);
router.post("/get-salary-ranges", getSalaryRangesProc);
router.post("/get-career-levels", getCareerLevelsProc);
router.post("/get-majors", getMajorsProc);
router.post("/get-degrees", getDegreesProc);

export default router;
