import express from "express";

import authRouter from "./hire/auth";
import workplaceRouter from "./hire/workplace";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/workplace", workplaceRouter);

export default router;
