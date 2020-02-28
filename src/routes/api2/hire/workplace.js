import express from "express";

import questionnaireRouter from "./workplace/questionnaire";
import lettersRouter from "./workplace/letters";
import myCompanyProfilesRouter from "./workplace/my-company-profiles";
import employerTestRouter from "./workplace/employer-test";

const router = express.Router();

router.use("/questionnaire", questionnaireRouter);
router.use("/letters", lettersRouter);
router.use("/my-company-profiles", myCompanyProfilesRouter);
router.use("/employer-test", employerTestRouter);

export default router;
