// TODO: find ways to make these more re-usable
const User = require("../../models/master.js")

const crud = {
  create: (user, cb) => {
    // console.log("create new user");
    let entry = new User({
      tokenSub: user.sub,
      givenName: user.given_name,
      familyName: user.family_name,
      imageUrl: user.picture
    });

    entry.save((err, results) => {
      if (err){
        
      }
      cb(results);
    });
  },

  read: (query, cb) => {
    // takes in the token sub (sub) and searches for entries that match
    User.findOne(query).exec((err, results) => {
          // log error if there is a read error
      if (err) {
        
      }
      cb(results);
    });
  },
  update: (query, updates, cb) => {
    let opt
    let update
      
    if(updates.hasOwnProperty("contacts")){
      // adjusts update methods for contacts field contacts
      update = {$addToSet: updates};
      opt = {new: true, runValidators: true};
    }

    if (updates.hasOwnProperty("geoLocation")) {
      // adjusts update methods for geoLocation
      update = {$addToSet: updates};
      opt = {new: true, runValidators: true};
    }

    else{
      // adjusts updates for none array fields
      update = {$set: updates};
      opt = {new: true, runValidators: true};
    }

    // sets query condition to ne not equal contacts.phoneNumber preventing duplicate entries with the same number
    User.update(query, update, opt).exec((err, results) => {  
      if (err) {
  
      }
      cb(results);
    });
  },

  delete: (query, deletes, cb) => {
    // console.log("delete user data");
    // deletes the user info by array of objects updates must
    // recieve a method like $pop: or $pull: followed by the object to change

    let opt

    User.Update(query, deletes, opt).exec((err, results) => {
      if (err) {

      }
      cb(results);
    });
  }
}; // end of crud object

module.exports = crud;
