import express from "express";
import expressJwt from "express-jwt";
import {session} from "core/config";

import authRouter from "./api/auth";
import coreRouter from "./api/core";
import accountRouter from "./api/account";
import hireRouter from "./api/hire";
import workRouter from "./api/work";
import profileRouter from "./api/profile";
import aboutRouter from "./api/about";

const router = express.Router();

router.use("/", expressJwt({secret: session.secret})
  .unless({
    path: [
      /\/auth\/*/,
      /\/core\/*/,
    ]
  }));

router.use("/auth", authRouter);
router.use("/core", coreRouter);
router.use("/account", accountRouter);
router.use("/hire", hireRouter);
router.use("/work", workRouter);
// router.use("/profile", profileRouter);
router.use("/about", aboutRouter);

export default router;
