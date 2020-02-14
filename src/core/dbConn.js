import mysql from "mysql2";
import config from "core/config";

export default mysql.createPool(config.mysql);
