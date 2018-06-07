var socket = io();

socket.on("connect", function(s) {
  console.log("Connected to server");

  socket.on("recieveMessage", function(data) {
    console.log("Recieved message");
    jQuery("#message-list").append("<li>" + data.from + ": " + data.text + "</li>");
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

jQuery(document).ready(function(){
  jQuery("#chat").on("keypress submit", function(e) {
    if (e.which === 13 || e.type === 'submit') {
      socket.emit("sendMessage", {
        from: "User",
        text: jQuery("#message").val()
      }, function(data) {
        jQuery("#message").val("");
      })
      e.preventDefault();
    }
  })
});
