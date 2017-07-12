// Dependencies
import { app } from "express"
import Router from "./controllers/controller"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"
import Promise from "bluebird" 
import path from 'path'   
const PORT = process.env.PORT || 3000;

// serve public files as static
app.use(express.static(path.join(__dirname, "public")));

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
// mongoose.connect("mongodb://heroku_t1bvzddm:ae2stotm309klscmhlvuajjv1g@ds151242.mlab.com:51242/heroku_t1bvzddm")
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// // cors config cors is a browser issue and may not be a problem later
// var whitelist = ['https://pulse-alert.herokuapp.com', 'http://pulse-alert-api.herokuapp.com'];
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error("Not allowed by CORS " + origin))
//     }
//   }
// };
// app.use(cors());

// router
app.use('/', Router);


// starting express app
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
