// TODO: find ways to make these more re-usable
var User = require("../../models/master.js"),
    crud = {
      create: (user, cb) => {
        // console.log("create new user");
        var entry = new User({
              tokenSub: user.sub,
              givenName: user.given_name,
              familyName: user.family_name,
              imageUrl: user.picture
          });
          entry.save((err, results) => {
            if (err){
              console.log("crud error create: " + err);
            }
            else {
              // console.log("successfully created: " + results);
              cb(results);
            }
          });
      },
      read: (sub, cb) => {
        // console.log("find user");
        // takes in the token sub (sub) and searches for entries that match
        User.findOne({tokenSub: sub}).exec((err, results) => {
          // log error if there is a read error
          if (err) {
            console.log("crud error read: " + err);
          }
          // console.log("read " + results);

          cb(results);
        });
      },
      update: (sub, updates, cb) => {
        // updates the user by array of objects updates must
        // recieve a method like $set: or $push: followed by the object to change
        // console.log("sub value: " + JSON.stringify(sub, null, 1));
        // console.log("updates: " + JSON.stringify(update, null, 1));

        var opt,
            update,
            query;

        if(updates.hasOwnProperty("contacts")){
          // adjusts update methods for contacts field contacts
          update = {$addToSet: updates};
          opt = {new: true, runValidators: true};
          query = { "tokenSub": sub, "contacts.phoneNumber": {$ne: updates.contacts.phoneNumber}};

        }
        if (updates.hasOwnProperty("geoLocation")) {
          // adjusts update methods for geoLocation
          update = {$addToSet: updates};
          opt = {new: true, runValidators: true};
          query = { "tokenSub": sub, "contacts.geoLocation.timeStamp": {$ne: updates.geoLocation.timeStamp}};
        }
        else{
          // adjusts updates for none array fields
          update = {$set: updates};
          opt = {new: true, runValidators: true};
          query = {"tokenSub": sub};
        }
        console.log("update " + JSON.stringify(update, null, 1));
        // sets query condition to ne not equal contacts.phoneNumber preventing duplicate entries with the same number
        User.update(query, update, opt)
        .exec((err, results) => {
          if (err) {console.log("update error " + err)}
            console.log("successfully updated: " + JSON.stringify(results, null, 1));
            cb(results);
        });

      },
      delete: (sub, deletes, cb) => {
        // console.log("delete user data");
        // deletes the user info by array of objects updates must
        // recieve a method like $pop: or $pull: followed by the object to change

        var opt,
            update,
            query;

        User.Update(query, update, opt)
        .exec((err, results) => {
          if (err) {
            console.log("crud error delete: " + err);

          }
          else {
            console.log("successfully deleted: " + results);
            cb(results);
          }
        });
      }

    }; // end of crud object

    module.exports = crud;
