var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public/'));

app.get("/about", function(req, res){
  res.render("about");
})

app.get("/contact", function(req, res){
  res.render("contact");
})

app.get("/", function(req, res){
  var images = [ 'images/brianinthewild.jpg', 'images/brianinthewater.jpg', 'images/cacti.jpg', 'images/cedarwax.jpg', 'images/climbinlady.jpg', 'images/dj.jpg', 'images/flowersbw.jpg', 'images/forks.jpg', 'images/ghostgirl.jpg', 'images/gnome.jpg', 'images/herbs.jpg', 'images/house.jpg', 'images/lunchtime.jpg', 'images/octovase.jpg', 'images/penguinlove.jpg', 'images/piencoffe.jpg', 'images/shy.jpg', 'images/usinthewild.jpg'
  ]
  function shuffleArray(images) {
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
  };
  shuffleArray(images);

  res.render("landing", {images: images});
})
app.use(express.static("."));

app.listen(3000, function() {
  console.log("Serving app on port 3000");
})