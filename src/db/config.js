const sqlite3 = require("sqlite3"); //driverr
const { open } = require("sqlite"); //banco de dados

module.exports = () =>
  open({
    filename: "./src/db/daretalk.sqlite",
    driver: sqlite3.Database,
  });
