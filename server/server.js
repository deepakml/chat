const express = require("express");
const path = require("path");
const http = require("http");

const public_directory = path.join(__dirname, "../public");

var socketio = require('socket.io');
var port = process.env.PORT || 3000
var app = new express();
var server = http.createServer(app);

app.use(express.static(public_directory))

const io = socketio(server);

io.on("connection", (socket) => {
  console.log("Connected to User");

  socket.on("sendMessage", (data) => {
    console.log(data);
  })

  socket.emit("recieveMessage", {
    from: "Sajin",
    text: "asdasd",
    createdAt: "asdasd",
  })

  socket.on("disconnect", () => {
    console.log("Disconnected from User");
  })
})



server.listen(port, (e) => {
  console.log("Listening on port " + port);
})
