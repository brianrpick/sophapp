var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public/'));

app.get("/about", function(req, res){
  res.render("about")
})

app.get("/contact", function(req, res){
  res.render("contact")
})

app.get("/", function(req, res){
  res.render("landing")
})
app.use(express.static("."));

app.listen(3000, function() {
  console.log("Serving app on port 3000");
})