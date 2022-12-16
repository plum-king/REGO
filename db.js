const dotenv = require("dotenv");
const mysql = require("mysql2/promise");

dotenv.config();

const pool = mysql.createPool({
  host     : '127.0.0.1',
  user     : 'jisoo',
  password : 'password',
  database : 'rego',
  dateStrings: 'date',
  charset: 'utf8mb4'
});

module.exports = pool;
