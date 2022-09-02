const Database = require("../db/config");

module.exports = {
  async create(req, res) {
    const db = await Database();
    const pass = req.body.password;

    let isRoom = true;
    const roomsExistIds = await db.all(`SELECT id FROM rooms`);

    //gera o numero da sala
    let roomId = "";
    while (isRoom) {
      roomId = "";
      for (var i = 0; i < 6; i++) {
        roomId += Math.floor(Math.random() * 10).toString();
      }

      //verifica se o numero ja existe

      isRoom = roomsExistIds.some((id) => id === roomId);
    }

    roomId = parseInt(roomId);

    if (isRoom === false) {
      await db.run(
        `INSERT INTO rooms (
            id,
            pass
            ) VALUES (
              ${roomId},
              ${pass})`
      );
    }

    // inseri no banco de dados

    await db.close();

    res.redirect(`/room/${roomId}`);
  },
};
