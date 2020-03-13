import express from "express";

import authRouter from "./hire/auth";
import accountRouter from "./hire/account";
import workplaceRouter from "./hire/workplace";
import myJobsRouter from "./hire/my-jobs";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/account", accountRouter);
router.use("/workplace", workplaceRouter);
router.use("/my-jobs", myJobsRouter);

export default router;
