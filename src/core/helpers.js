import path from "path";
import {sprintf} from "sprintf-js";
import uuid from "uuid";
import fs from "fs";
import mkdirp from "mkdirp";
import db from "./db";
import consts from "./consts";
import tracer from "./tracer";

const _calculateStartPosition = (page, pageSize) => {
  page || (page = 1);
  pageSize || (pageSize = consts.defaultPageSize);
  const start = pageSize * (page - 1);
  return [start, pageSize];
};

const _makeWhereClause = conditions => {
  let conditionArr = [];
  let values = [];
  !!conditions && Object.keys(conditions).map(key => {
    conditionArr.push(`\`${key}\` ${conditions[key]["type"]} ?`);
    values.push(conditions[key]["value"]);
  });
  const whereClause = conditionArr.length ? "WHERE " + conditionArr.join(" AND ") : "";
  return [whereClause, values];
};

const _makeOrderClause = orders => {
  let orderArr = [];
  !!orders && Object.keys(orders).map(key => {
    orderArr.push(`\`${key}\` ${orders[key]}`);
  });
  const orderClause = orderArr.length ? "ORDER BY " + orderArr.join(", ") : "";
  return orderClause;
};

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

  listQuery: async ({table, page, pageSize, conditions, orders}) => {
    const [start, limit] = _calculateStartPosition(page, pageSize);
    const [whereClause, values] = _makeWhereClause(conditions);
    const orderClause = _makeOrderClause(orders);

    let sql = sprintf("SELECT * FROM `%s` %s %s LIMIT ?, ?;", table, whereClause, orderClause);
    try {
      let rows = await db.query(sql, [...values, start, limit]);
      sql = sprintf("SELECT COUNT(*) `count` FROM `%s` %s;", table, whereClause);
      let count = await db.query(sql, values);
      let pageCount = 0;
      count.length > 0 && (pageCount = Math.ceil(count[0]['count'] / limit));

      return {
        count: count[0]['count'],
        pageCount,
        data: rows,
      };
    } catch (err) {
      throw err;
    }
  },

  getQuery: async ({table, conditions, orders}) => {
    const [whereClause, values] = _makeWhereClause(conditions);
    const orderClause = _makeOrderClause(orders);

    let sql = sprintf("SELECT * FROM `%s` %s %s LIMIT 1;", table, whereClause, orderClause);
    try {
      let rows = await db.query(sql, values);

      return rows[0];
    } catch (err) {
      throw err;
    }
  },

  deleteQuery: async ({table, conditions, orders}) => {
    const [whereClause, values] = _makeWhereClause(conditions);
    const orderClause = _makeOrderClause(orders);

    let sql = sprintf("DELETE FROM `%s` %s %s LIMIT 1;", table, whereClause, orderClause);

    tracer.info(sql, values);
    try {
      let rows = await db.query(sql, values);

      return rows;
    } catch (err) {
      throw err;
    }
  },
};
