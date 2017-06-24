// Dependencies
var express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    exphbs = require("express-handlebars"),
    mongoose = require("mongoose"),
    Promise = require("bluebird"),
    // Sets up the Express App
    app = express(),
    PORT = process.env.PORT || 8080;

// serve public files as static
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Database configuration with mongoose
// mongoose.Promise = global.Promise;
Promise.promisifyAll(mongoose);
// localhost connection uncomment for localhost
mongoose.connect("mongodb://localhost/pulse");
// heroku mLabs connection uncomment for heroku deployment
// mongoose.connect("mongodb://heroku_fhfqpr6g:8l7nvjiqnbrb24geffb3ddn04q@ds137882.mlab.com:37882/heroku_fhfqpr6g")
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// cors config cors is a browser issue and may not be a problem later
var whitelist = ['https://remote-pulse.herokuapp.com'];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS " + origin))
    }
  }
};
app.use(cors(corsOptions));

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
