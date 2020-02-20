import express from "express";

import authRouter from "./api/auth";
import accountRouter from "./api/account";
import hireRouter from "./api/hire";
import profileRouter from "./api/profile";
import aboutRouter from "./api/about";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/account", accountRouter);
router.use("/hire", hireRouter);
// router.use("/profile", profileRouter);
router.use("/about", aboutRouter);

export default router;
