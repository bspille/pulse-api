// Dependencies
var express = require("express"),
    bodyParser = require("body-parser"),
    exphbs = require("express-handlebars"),
    mongoose = require("mongoose"),
    // Sets up the Express App
    app = express(),
    PORT = process.env.PORT || 3000;

// serve public files as static
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Database configuration with mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/pulse");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// router
var routes  = require("./controllers/controller");
app.use('/', routes);

// set up handlebars engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// starting express app
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
