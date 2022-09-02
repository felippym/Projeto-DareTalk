const Database = require("../db/config");

module.exports = {
  index(request, response) {
    const roomId = request.params.room;
    const questionID = request.params.question;
    const action = request.params.action;
    const password = request.body.password;
  },

  async create(req, res) {
    const db = await Database();
    const question = req.body.question;
    const room = req.params.room;
    const action = req.params.action;

    await db.run(`INSERT INTO questions(
      title,
      room,
      marked
      
    )VALUES(
      ${question}, 
      ${room}, 
      ${action})`);

    res.redirect(`/room/${room}`);
  },
};
