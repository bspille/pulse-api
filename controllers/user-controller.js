
// const twilio = require("./utils/twilio.js")
// const timer = require("./utils/timer.js")
const User = require("../models/user");
const Exception = require("../utils/exceptions");


 module.exports = {
  
// route to update user
addContacts(req, res, next, user){
  // setup variables
  let { sub } = user;
  let { newContact, newContact: { phoneNumber } } = req.body;
  let query = { sub, "contacts.phoneNumber": { $ne:  phoneNumber }}
  let update = { $addToSet: {contacts: newContact }}
  let options = { runValidators: true, new: true }


  // find and update if there is not already a match in the contacts
  User.findOneAndUpdate( query, update, options)
    .then((data)=>{
      if(data != null){
        console.log(`this is the user with the new contact added ${data}`)
        res.status(201).json(data);
      }
      else{
        throw new Exception("Phone number is already used")
      }
     
    })
    // pass errors and exceptions to the next middleware
    .catch(next);
  },

  addGeometry(req, res, next, user){
    // TODO: change over to geo json and create iterface here
    console.log(`welcome to the add geometry handler`)
  },

  checkoutUser(req, res, next, user){
    let { sub , given_name, family_name } = user;
     // pass sub to the find
     User.find({ sub })
      .then((data)=>{
        if (data.length === 1){
          console.log(`this is the user found ${data[0]}`)
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
              console.log(`this is the new user created ${userObj}`)
              res.status(201).json(userObj)
            })
            // passes the errors to the next middleware
            .catch(next);
        }
      })
      // passes the errors to the next middleware
      .catch(next);
  },

  updateContact(req, res, next, user){
    console.log(`welcome to the update contact handler`)
    let { sub } = user;
    let { key, contactUpdates } = req.body;
    let query = { sub, "contacts._id": ObjectId(key) }
    let update = { $set: contactUpdates }
    let options = { runValidators: true, new: true }
    User.findOneAndUpdate(query, update, options )
      .then((data)=>{
        console.log(`this is the updated contact information ${data}`);
        res.status(201).json(data);
      })
      // passes errors to the next middleware
      .catch(next);
    
  },

  updateUser(req, res, next, user){
    console.log(`welcome to the update user handler`)
    let { sub } = user;
    let { userUpdates } = req.body;
    let query = { sub };
    let update = { $set: userUpdates };
    let options = { runValidators: true, new: true };
    User.findOneAndUpdate(query, update, options)
      .then((data)=>{
        console.log(`this is the updated user information ${data}`);
        res.status(201).json(data)
      })
      // passes the errors to the next middleware
      .catch(next);
  }
 }


