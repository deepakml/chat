var socket = io();

socket.on("connect", function(s) {
  console.log("Connected to server");

  socket.on("recieveMessage", function(data) {
    console.log("Recieved message");
    console.log(data)
  })

})

socket.on("disconnect", function() {
  console.log("Disconnected from server");
})

socket.emit("sendMessage", {
  from: "Deepak",
  text: "Hi",
  createdAt: new Date().toDateString()
})
