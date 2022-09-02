const Database = require("./config");

const initDb = {
  async init() {
    const db = await Database();

    await db.exec(`CREATE TABLE rooms ( id INTEGER PRIMARY KEY, pass TEXT)`);

    await db.exec(
      `CREATE TABLE questions (id INTEGER PRIMARY KEY AUTOINCREMENT, 
      titulo TEXT, 
      marked TEXT, 
      room INT)` //### ATENCAO TIPO DO CHECK ###
    );

    await db.close();
  },
};

initDb.init();
