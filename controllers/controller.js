// TODO: add ERROR to the response object and send it as json before setting to null
// refactor pulse route
// figure out delete route

const twilio = require("./utils/twilio.js")
const crud  = require("./utils/crud.js")
const google = require("./utils/google.js")
const timer = require("./utils/timer.js")
const express = require("express")
const Router = express.Router()  
const CLIENT_ID = '533524339613-mm3v70onq310vr0qep2it2pj5vcj1t33.apps.googleusercontent.com';

let activeTimer = false;

 // route to add new user
Router.post("/user/", (req, res) =>{

 let token = req.body.token;
 let user;
 let Query;
  // verify the user and return the user object
  google.verifyToken(token, (results) => {
    
     if(results.aud == "904019024650-eaprlckr58veqebrbnlssik6uap05rl8.apps.googleusercontent.com"){
      user = {
      tokenSub: results.sub,
      givenName: results.given_name,
      familyName: results.family_name
    }
  }

    query = {tokenSub: results.sub};

    // add condition for unverified user here
    try {
 
      crud.read(query, (result) => {
        // if there is a entry send it back as json
        if (result){
          console.log("found entry for user ");
        
        console.log(`I am sending ${result}`)
        res.json(result)
  
      }

      // TODO: test the create new user for bugs
        // if there is no entry create one
        if(!result){
          console.log("hit the create route")
          crud.create(user, (result) => {
            console.log("created new user ");
               if(result != undefined){
            console.log(`I am sending ${result}`)
            }
          });
        }
      });
    } 
    catch (error) {
     
      console.log(error);
    }

  });
}); // end of post user

    // route to update user
Router.post("/update/", (req, res) =>{

  let updates = req.body.updates;
  let token = req.body.token;
  let query;
  let responseData;
  let user;
  let responseQuery;
  // verify the user and return the user object
  google.verifyToken(token, (results) => {
    // check the collection for existing entry
    if(results.aud == "904019024650-eaprlckr58veqebrbnlssik6uap05rl8.apps.googleusercontent.com"){
      user = results
      responseQuery = {tokenSub: results.sub}
  }
 

    // if the updates contain contacts run this route
    try {
 
      if(updates.hasOwnProperty("newContact")){
          let update = { contacts: updates.newContact};
   
          // find the user object by tokenSub and only add a new contact if the phoneNumber is not found
          query = { tokenSub: user.sub, "contacts.phoneNumber": {$ne: update.contacts.phoneNumber}};
  
            crud.update(query, update, (res) => {
                responseData = updates.newContact
                console.log('hey i finish the update can i set a response now')
            }); // close out crud update
      } // if contacts

    }
    catch(error){
      
    }
    finally{
      // add condition for errors here
      if(responseData != undefined){
       console.log(`can I send some thing back now ${responseData}`)
       res.json(responseData)
      
      }
     
    }
  
  }); // end of verify user
}); // end update route

// route to delete contacts
// need to work this in 
Router.delete("/delete", (req, res) =>{

});

// route to send out pulse
Router.post("/pulse", (req, res) =>{
  console.log(JSON.stringify(req.body,null,1))
  // made some changes to cleaner naming
      var latitude = req.body.geoLocation.latitude;
      var longitude = req.body.geoLocation.longitude;
      console.log("pulseLat " + latitude);
      console.log("pulseLong " + longitude);
      var token = req.body.token;
      console.log("pulse route token " + req.body.token);
      google.verifyToken(token, (results) => {
        if (results != null){
          console.log("pulse route verified user" + results.sub);
          twilio.pulse(results.sub, latitude, longitude);
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
Router.get("/", (req, res) => {
  // sends static html file in the public dir
  res.sendFile("splash.html", {root: __dirname + '/../public/'});
  // res.render("index");
});

// export router here
module.exports = Router;
