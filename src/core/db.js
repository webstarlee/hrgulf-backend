import dbConn from "core/dbConn";

const db = {};

db.query = (q, data) => {
  return new Promise((resolve, reject) => {
    dbConn.query(q, data, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

export default db;
