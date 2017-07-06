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
let token;
let query;
let updates;
let update;
let user;
let userData;
// const userData = (res)=> {
//   console.log(`this is the response object ${res}`)
//   return res
// }
const ERROR = (error) => {
  if (error == "complete"){
    return null
  }
  return ERROR.concat([error])
}

let activeTimer = false;

 // route to add new user
Router.post("/user/", (req, res) =>{

  token = req.body.token;
 
  // verify the user and return the user object
  google.verifyToken(token, (results) => {
    
    console.log(JSON.stringify(results, null, 1))
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
 
      crud.read(query, (res) => {
        // if there is a entry send it back as json
        if (res){
          console.log("found entry for user " + JSON.stringify(res, null, 1));
          userData = res
        }
        // if there is no entry create one
        if(!res && user){
          console.log("hit the create route")
          crud.create(user, (res) => {
            console.log("created new user " + JSON.stringify(res, null, 1));
            userData = res
          });
        }
        else{
          console.log("error cant create or find user")
        }
      });
    } 
    catch (error) {
      ERROR(error);
      console.log(error);
    }
    finally {
      // add condition for errors
      if (userData != undefined){
        res.json(userData)
      }
      ERROR("complete");
    }
  });
}); // end of post user

    // route to update user
Router.post("/update", (req, res) =>{
  updates = req.body.updates;
  token = req.body.token;

  // verify the user and return the user object
  google.verifyToken(token, (results) => {
    // check the collection for existing entry
    user(results);
 

  // starts the timer and sets the active timer to true
  // needs a way to determine when to call stop and set active timeer to false
  if (updates.hasOwnPropery("timeSet") && !activeTimer && user){
    timer.start()
    activeTimer = true;
  }

  // if the updates contain contacts run this route
  try {
    if(updates.hasOwnProperty("contacts")){
      updates.contacts.map((x) =>{
        update = {contacts: x};
        query = { tokenSub: user.sub, "contacts.phoneNumber": {$ne: update.contacts.phoneNumber}};
        try {
          crud.update(query, update, (res) => {
            results(res)
          }); // close out crud update
        } 
        catch (error) {
          // throw the error up to the parent to catch and continue
          throw error;
        }
      }); // close out map contacts
    } // if contacts

    // if the updates contain geoLocation run this route
    if (updates.hasOwnProperty("geoLocation"))  {
      update = updates;
      query = { tokenSub: user.sub, "contacts.geoLocation.timeStamp": {$ne: update.geoLocation.timeStamp}};
      crud.update(query, update, (res) => {
        results(res)
      }); // close out crud update
    }// close if geoLocation
            
    else{
      update = updates;
      query = {tokenSub: user.sub};
      crud.update(query, update, (res) => {
        results(res)
      }); // close out crud update
    } // else
  }
  catch(error){
    ERROR(error);
  }
  finally{
    // add condition for errors here
    res.json(`update completed ${userData}`);
    ERROR("complete");
  }
  }); // end of verify user
}); // end update route

// route to delete contacts
// need to work this in 
Router.delete("/delete", (req, res) =>{

});

// route to send out pulse
Router.post("/pulse", (req, res) =>{
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
