// TODO: add anonymous functions to provide CRUD operations in mongoose
// TODO: token from google includes all the info for the user profile
      // create a route to handle both get and create
var express = require("express"),
    router = express.Router(),
    twilio = require("./utils/twilio.js"),
    crud = require("./utils/crud.js"),
    path = require('path');

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
      twilio.pulse('1');
    });

    // route to render the welcome page
    router.get("/", (req, res) => {
      // this is all that is need here
      res.render("index");

      // total over kill google auth returns profile information on the front end
      // and checking the collection is already drafted in /user
      // var googleAuthToken = "1";//"eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyOThhNTZiNmFjMDU0MzEyNTNkNDkwMzA4MTZhNWViZjk5YTEzYzUifQ.eyJhenAiOiI1MzM1MjQzMzk2MTMtbW0zdjcwb25xMzEwdnIwcWVwMml0MnBqNXZjajF0MzMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI1MzM1MjQzMzk2MTMtbW0zdjcwb25xMzEwdnIwcWVwMml0MnBqNXZjajF0MzMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTM4ODIxNjEyOTk0NDc2MDA4MTkiLCJlbWFpbCI6Impvc2hjYnV0bGVyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiT3hQWVdSS3Vtd0ZvODJ5ZmJ6S3VJdyIsImlzcyI6ImFjY291bnRzLmdvb2dsZS5jb20iLCJpYXQiOjE0OTc2NzczMTMsImV4cCI6MTQ5NzY4MDkxMywibmFtZSI6Ikpvc2ggQnV0bGVyIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS8teGl2am84LWlYUTQvQUFBQUFBQUFBQUkvQUFBQUFBQUFRLTAvR2EwajB1ZF9NMFUvczk2LWMvcGhvdG8uanBnIiwiZ2l2ZW5fbmFtZSI6Ikpvc2giLCJmYW1pbHlfbmFtZSI6IkJ1dGxlciIsImxvY2FsZSI6ImVuIn0.2LFtX5mmKCDGh9vMha-xpenFE2B5aT_s_3nZF7za5e4JwSo2K6c4CGaKG2QsWEAXny1ucsHbaq3JqzmgJ5SvYWG8eEu03lBbVeVhivZfft-W7s6fixTqtvxcE6MBPvFPEIF7VIFlJOcuqRrj5Lpo8WUUq6bhCcDbAhEK_aHZd4oWHcn5PbYNme8lUMWWBOlC7xOqYdKWVdjWlthjo4w1M7BbJKfIhQ_CaKU4kIfkTdZmIvqigU28JMmGh7C3lT3FaVh8ugAE8myAzKnSmbWNQUM6vStbHmhkdEagIXFZT0ezxnErCK0Ccy_k7dAwcxXvuTRJj1nxPXFqAZQphxvj3w";
      // // TODO #GoogleAuth - Get token from request Google Auth session
      // //var googleAuthToken = req.<google auth>;
      // crud.read(
      //   googleAuthToken,
      //   (users) => {
      //     if (!users) {
      //       console.error("No response from database");
      //       res.statusCode = 500; // TODO choose proper code (internal server error)
      //       res.end();
      //       return;
      //     }
      //     console.log("users=%j", users);
      //     // TODO decide what to do if multiple users have the same token
      //     // possible assert...
      //     if (users.length > 1) {
      //       console.warn("%d users with same auth token", users.length);
      //     }
      //     var user = users[0];
      //     if (user) {
      //       var scriptParams = {
      //         givenName: user.givenName
      //       };
      //       res.render("index", scriptParams);
      //     } else { // No User for auth token
      //       console.log("User Fetch Failed - No User for auth token = %s", googleAuthToken);
      //       res.end();
      //     }
      //   }
      // );
    });

// export router here
module.exports = router;
