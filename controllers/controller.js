// TODO: add anonymous functions to provide CRUD operations in mongoose
var express = require("express"),
    router = express.Router(),
    twilio = require("./utils/twilio.js"),
    crud = require("./utils/crud.js");

    // route to add new user
    router.post("/new_user", (req, res) =>{

      // checks the collection for existing entry
      crud.read().then((err, results) => {

        // logs errors
        if (err) {
          console.log("read for new user: " + err);
        }

        // if results are produced the entry exist
        if(results){
          console.log("user already in the system");
        }

        // if no results are produced there is no entry in existance
        else {
          // create a new user entry
          crud.create().then((err, results) =>{
            if (err) {
              console.log("create new user error: " + err);
            }
            else {
              console.log("new entry: " + results);
            }
          }); // end of create.then
        }

      }); // end of read.then
    }); // end of post new_user

    // route to update user
    router.put("/update", (req, res) =>{
      // assumes the request body is a array of objects with a property of where
      var fields = req.body;
      // parses the array and runs update for each object
      fields.map((x) => {
        crud.update(x);
      });
    });

    // route to delete contacts
    router.delete("/delete", (req, res) =>{
      // assumes request body will be a array of objects with a propery of where
      var fields = req.body;
      // parse the array and runs delete for each object
      fields.map((x) => {
        crud.delete(x);
      });
    });

    // route to get user profile
    router.get("/user", (req, res) =>{
      // res.render("index");
      crud.read();
    });

    // route to send out pulse
    router.get("/pulse", (req, res) =>{
      twilio.pulse();
    });

    // route to render the welcome page
    router.get("/", (req, res) =>{
      // res.render("index");
      console.log('welcome');
    });

// export router here
module.exports = router;
