const dotenv = require("dotenv");
const mysql = require("mysql2/promise");

dotenv.config();

const pool = mysql.createPool({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DATABASE,
  dateStrings: 'date',
  charset: 'utf8mb4'
});

module.exports = pool;
