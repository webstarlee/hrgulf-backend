import express from "express";

import postAJobRouter from "./my-jobs/post-a-job";
import myJobsRouter from "./my-jobs/my-jobs";

const router = express.Router();

router.use("/post-a-job", postAJobRouter);
router.use("/my-jobs", myJobsRouter);

export default router;
