import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import formData from "express-form-data";
import os from "os";
import logger from "morgan";
import cors from "cors";
import helmet from "helmet";
import Ddos from "ddos";
const ddos = new Ddos({
  maxcount: process.env.DDOS_MAXCOUNT,
  burst: process.env.DDOS_BURST,
  limit: process.env.DDOS_LIMIT,
  trustProxy: !process.env.DDOS_TRUST_PROXY || process.env.DDOS_TRUST_PROXY === "true",
});

import apiRouter from "./routes/api";
import adminApiRouter from "./routes/admin-api";

const app = express();
const cwd = process.cwd();
const options = {
  uploadDir: os.tmpdir(),
  autoClean: true
};

// view engine setup
app.set("views", path.join(cwd, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(formData.parse(options));
app.use(formData.format());
app.use(formData.stream());
app.use(formData.union());

process.env.NODE_ENV !== "production" && app.use(cors());
app.use(helmet());

app.use("/admin/assets", express.static(path.join(cwd, "public")));
app.use("/assets", express.static(path.join(cwd, "public")));

app.use("/admin/api", adminApiRouter);
app.use("/api", ddos.express, apiRouter);

app.use("/admin", express.static(path.join(cwd, "admin-frontend")));
app.get("/admin/*", function (req, res) {
  res.sendFile(path.join(cwd, "admin-frontend/index.html"));
});

app.use(express.static(path.join(cwd, "frontend")));
app.get("*", (req, res) => {
  res.sendFile(path.join(cwd, "frontend/index.html"));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
