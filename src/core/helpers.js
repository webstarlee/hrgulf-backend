import path from "path";
import {sprintf} from "sprintf-js";
import uuid from "uuid";
import fs from "fs";
import mkdirp from "mkdirp";
import tracer from "./tracer";

export default {
  sleep: async (ms) => {
    return new Promise((resolve, reject) => {
      const handle = setTimeout(() => {
        clearTimeout(handle);
        resolve();
      }, ms);
    });
  },

  uploadFile: async (file, fileDir) => {
    const fileName = sprintf("%s%s", uuid(), path.extname(file.path));
    const filePath = path.join(fileDir, fileName);
    const writable = fs.createWriteStream(filePath);

    return new Promise((resolve, reject) => {
      mkdirp.sync(fileDir, {});
      file.on("end", e => {
        resolve(fileName);
      });
      file.on("error", reject);
      file.pipe(writable);
    });
  },

  uploadBase64Image: async (base64, fileDir) => {
    const base64Data = base64.replace(/^data:image\/png;base64,/, "");
    const fileName = sprintf("%s%s", uuid(), ".png");
    const filePath = path.join(fileDir, fileName);

    return new Promise((resolve, reject) => {
      mkdirp.sync(fileDir, {});
      fs.writeFile(filePath, base64Data, 'base64', function(err) {
        if (!!err) {
          reject(err);
        } else {
          resolve(fileName);
        }
      });
    });
  },
};
