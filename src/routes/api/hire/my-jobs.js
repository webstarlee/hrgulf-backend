import express from "express";

import postAJobRouter from "./my-jobs/post-a-job";

const router = express.Router();

router.use("/post-a-job", postAJobRouter);

export default router;
