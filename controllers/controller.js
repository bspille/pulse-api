
// TODO: token from google fetches all the info for the user profile
var express = require("express"),
    router = express.Router(),
    twilio = require("./utils/twilio.js"),
    crud = require("./utils/crud.js"),
    token = require("./utils/google.js"),
    path = require("path"),
    google = require("./utils/google.js")
    // front end application client id
    CLIENT_ID = '533524339613-mm3v70onq310vr0qep2it2pj5vcj1t33.apps.googleusercontent.com';


    // route to add new user
    router.post("/user/", (req, res) =>{
        // console.log("http Hit" + JSON.stringify(req.body));
        var token = req.body.token;
            // verify the user and return the user object
            google.verifyToken(token, (results) => {
              // console.log("verification results " + JSON.stringify(results, null, 1));
              // check the collection for existing entry
              var user = results;
              // console.log("sub " + user.sub);
              crud.read(user.sub, (results) => {
                // if there is a entry send it back as json
                if (results != null){
                  // console.log("found entry " + JSON.stringify(results, null, 1));
                  res.json(results)
                }
                // if there is no entry create one
                else{
                  console.log("has no read results");
                  crud.create(user, (results) => {
                    console.log("created new user " + JSON.stringify(results, null, 1));
                    res.json(results);
                  });
                }
              });
            });
    }); // end of post user

    // route to update user
    router.post("/update/", (req, res) =>{
      // TODO: still needs to prevent duplicate entries
      // assumes the request body is a array of objects with a property of where
      var updates = req.body.updates,
          token = req.body.token;
          // verify the user and return the user object
          google.verifyToken(token, (results) => {
            // console.log("verification results " + JSON.stringify(results, null, 1));
            // check the collection for existing entry
            var user = results;
            // console.log("sub " + user.sub);
            crud.read(user.sub, (results) => {
              // if there is a entry send it back as json
              if (results != null){
                // console.log("found entry " + JSON.stringify(results, null, 1));
                crud.update(user.sub, updates, (results) => {
                  console.log("updates completed " + JSON.stringify(results, null, 1));
                  res.json(results);
                });
              }
              // if there is no entry create one
              else{
                console.log("error user not found for update");
              }
            });
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
    // TODO: pulse route recieves duplicate hits from http request
    router.post("/pulse/", (req, res) =>{

      var token = req.body.token;
      console.log("pulse route token " + req.body.token);
      google.verifyToken(token, (results) => {
        if (results != null){
          console.log("pulse route verified user" + results.sub);
          twilio.pulse(results.sub);
        }
        else {
          console.log("could not verifiy user pulse failed");
        }
      });
          // replace 1 with subject for later use with http requests
          // 1 is the seed tokenSub created for querying the data collection
      // twilio.pulse("1");

    });

    // route to render the welcome page
    router.get("/", (req, res) => {
      res.render("index");
    });

// export router here
module.exports = router;
