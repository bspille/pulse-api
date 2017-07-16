
// const twilio = require("./utils/twilio.js")
const crud  = require("./utils/crud.js")
// const timer = require("./utils/timer.js")

const User = require("../models/user")
// const CLIENT_ID = '533524339613-mm3v70onq310vr0qep2it2pj5vcj1t33.apps.googleusercontent.com';

let activeTimer = false;

// TODO: refactor into drier components
 module.exports = {
  checkoutUser(req, res, user){
    console.log(`this is the user we want to checkout ${user}`)
    let { sub } = user;
     // pass sub to the find
     User.find({ sub })
      .then((data)=>{
        if (data.length === 1){
          res.status(200).json(data[0])
        }
        if (data.length === 0){
          // if user doesn't exist create a new user
          let newUser = new User({
            sub,
            given_name,
            family_name
          })
          // save the new user
          newUser.save()
            .then((userObj)=>{

              // return 201 successfully created user to the client
              res.status(201).json(userObj)
            })
            .catch((err)=>{
              // log errors if save fails
              console.log(err)
              // TODO: add error handling here
            })
        }
      })
      .catch((err)=>{
        // log errors if find fails
        console.log(err);
        // TODO: add error handling here
      });

  },

    // route to update user
addContacts(req, res, user){

  let updates = req.body.updates;
  let token = req.body.token;
  let query;

  
}, // end update route

// // route to delete contacts
// // need to work this in 
// Router.delete("/delete", (req, res) =>{

// });

// // route to send out pulse
// Router.post("/pulse", (req, res) =>{
//   console.log(JSON.stringify(req.body,null,1))
//   // made some changes to cleaner naming
//       var latitude = req.body.geoLocation.latitude;
//       var longitude = req.body.geoLocation.longitude;
//       console.log("pulseLat " + latitude);
//       console.log("pulseLong " + longitude);
//       var token = req.body.token;
//       console.log("pulse route token " + req.body.token);
//       google.verifyToken(token, (results) => {
//         if (results != null){
//           console.log("pulse route verified user" + results.sub);
//           twilio.pulse(results.sub, latitude, longitude);
//         }
//         else {
//           console.log("could not verifiy user pulse failed");
//         }
//       });
//           // replace 1 with subject for later use with http requests
//           // 1 is the seed tokenSub created for querying the data collection
//       // twilio.pulse("1");

//     });
 }


