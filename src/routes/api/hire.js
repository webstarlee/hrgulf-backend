import express from "express";

import lettersRouter from "./hire/letters";
import myCompanyProfilesRouter from "./hire/my-company-profiles";

const router = express.Router();

router.use("/letters", lettersRouter);
router.use("/my-company-profiles", myCompanyProfilesRouter);

export default router;
