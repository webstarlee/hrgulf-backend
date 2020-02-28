import express from "express";

import workplaceRouter from "./hire/workplace";

const router = express.Router();

router.use("/workplace", workplaceRouter);

export default router;
