import express from "express";

import jobsByRoleRouter from "./find-jobs/jobs-by-role";
import jobsByLocationRouter from "./find-jobs/jobs-by-location";
import jobsBySectorRouter from "./find-jobs/jobs-by-sector";
import jobsByCompaniesRouter from "./find-jobs/jobs-by-companies";

const router = express.Router();

router.use("/jobs-by-role", jobsByRoleRouter);
router.use("/jobs-by-location", jobsByLocationRouter);
router.use("/jobs-by-sector", jobsBySectorRouter);
router.use("/jobs-by-companies", jobsByCompaniesRouter);

export default router;
