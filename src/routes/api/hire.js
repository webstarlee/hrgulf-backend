import express from "express";

import lettersRouter from "./hire/letters";

const router = express.Router();

router.use("/letters", lettersRouter);

export default router;
