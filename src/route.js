const express = require("express");
const questionController = require("./controllers/QuestionController");
const route = express.Router();
const RoomController = require("./controllers/RoomController");
const Database = require("./db/config");

route.get("/", (req, res) => res.render("index", { page: "enter-room" }));
route.get("/create-room", (req, res) =>
  res.render("index", { page: "create-room" })
);
route.get("/room/:room", async (req, res) => {
  const roomid = req.params.room;
  res.render("room", { roomid });
});

//formato de como as infos devem vir do modalrgrgrggr
route.post("/create-room", RoomController.create);

route.post("question/create/:room", questionController.create);
route.post("question/room/:room/:question/:action", questionController.index);

module.exports = route;
