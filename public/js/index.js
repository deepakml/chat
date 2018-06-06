var socket = io();

socket.on("connect", function(s) {
  console.log("Connected to server");

  socket.on("recieveMessage", function(data) {
    console.log("Recieved message");
    console.log(data)
  })

  socket.on("welcomeUser", function(data) {
    console.log(data.text);
  })

  socket.on("NewUser", function(data) {
    console.log(data.text);
  })

})

socket.on("disconnect", function() {
  console.log("Disconnected from server");
})
