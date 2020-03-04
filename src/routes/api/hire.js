import express from "express";

import authRouter from "./hire/auth";
import workplaceRouter from "./hire/workplace";
import myJobsRouter from "./hire/my-jobs";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/workplace", workplaceRouter);
router.use("/my-jobs", myJobsRouter);

export default router;
