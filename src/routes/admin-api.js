import express from "express";

import authRouter from "./admin-api/auth";
import profileRouter from "./admin-api/profile";
import usersRouter from "./admin-api/users";
import aboutRouter from "./admin-api/about";
import massEmailRouter from "./admin-api/mass-email";

const router = express.Router();

// router.use("/auth", authRouter);
// router.use("/profile",profileRouter);
// router.use("/users", usersRouter);
// router.use("/about", aboutRouter);
// router.use("/mass-email", massEmailRouter);

export default router;
