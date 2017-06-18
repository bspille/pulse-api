// var seed = require("./seed.js"),
//     mongoose = require("mongoose");
// // Database configuration with mongoose
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/pulse");
// var db = mongoose.connection;
//
// // Show any mongoose errors
// db.on("error", function(error) {
//   console.log("Mongoose Error: ", error);
// });
//
// // Once logged in to the db through mongoose, log a success message
// db.once("open", function() {
//   console.log("Mongoose connection successful.");
//   seed.firstSeed(() => {
//     db.close();
//   });
// });
