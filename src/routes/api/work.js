import express from "express";

import authRouter from "./work/auth";
import findJobsRouter from "./work/find-jobs";
import accountRouter from "./work/account";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/find-jobs", findJobsRouter);
router.use("/account", accountRouter);

export default router;
