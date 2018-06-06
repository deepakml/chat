const express = require("express");
const path = require("path");

const public_directory = path.join(__dirname, "../public");

var port = process.env.PORT || 3000
var app = new express();

app.use(express.static(public_directory))

app.listen(port, (e) => {
  console.log("Listening on port " + port)
})
