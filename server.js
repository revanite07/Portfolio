var express = require("express");

var PORT = process.env.PORT || 3000;
var app = express();


app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));







app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});