const express = require("express");
const path = require("path");
const http = require("http");

const public_directory = path.join(__dirname, "../public");

var {createMessage} = require("./utils/message");
var socketio = require('socket.io');
var port = process.env.PORT || 3000
var app = new express();
var server = http.createServer(app);

app.use(express.static(public_directory))

const io = socketio(server);

io.on("connection", (socket) => {
  console.log("Connected to User");

  socket.emit("welcomeUser", createMessage("Admin", "Welcome to our chat"));
  socket.broadcast.emit("NewUser", createMessage("Admin", "New member has joined our chat"));

  socket.on("sendMessage", (data, callback) => {
    console.log(data);
    io.emit("recieveMessage", createMessage(data.from, data.text));
    callback("Got the ack from server");
  })

  socket.on("disconnect", () => {
    console.log("Disconnected from User");
  })
})

server.listen(port, (e) => {
  console.log("Listening on port " + port);
})
