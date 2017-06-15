// TODO: add anonymous functions to provide CRUD operations in mongoose
// TODO: token from google includes all the info for the user profile
      // create a route to handle both get and create
var express = require("express"),
    router = express.Router(),
    twilio = require("./utils/twilio.js"),
    crud = require("./utils/crud.js");

    // route to add new user
    router.post("/user", (req, res) =>{

      // get user information by subject hash taken from id token
      var token = req.body.token
          subject = token.sub,
          user = crud.read(subject).then(() => {

        // if user returns null there is no entry in existance
        if (user == null){
          // create a new entry
          user = crud.create(token);
          res.json(user);
        }

        // if results return the users information
        else {
          // send user information
          res.json(user);
        }
      }); // end of then function to handle asynchronous return
    }); // end of post new_user

    // route to update user
    router.put("/update", (req, res) =>{
      // assumes the request body is a array of objects with a property of where
      var updates = req.body,
          user = crud.update(updates).then(() => {
            res.json(user);
          });
    });

    // route to delete contacts
    router.delete("/delete", (req, res) =>{
      // assumes request body will be a array of objects with a propery of where
      var fields = req.body;
          user = crud.delete(deletes).then(() => {
            res.json(user);
          });
    });

    // route to send out pulse
    router.get("/pulse", (req, res) =>{
      // var token = req.body.token
      //     subject = token.sub;
          // replace 1 with subject for later use with http requests
          // 1 is the seed tokenSub created for querying the data collection
      twilio.pulse(1);
    });

    // route to render the welcome page
    router.get("/", (req, res) =>{
      // res.render("index");
      console.log('welcome');
    });

// export router here
module.exports = router;
