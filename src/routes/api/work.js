import express from "express";

import authRouter from "./work/auth";
import accountRouter from "./work/account";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/account", accountRouter);

export default router;
