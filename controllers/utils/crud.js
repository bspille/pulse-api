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
        // console.log("update user");
        // updates the user by array of objects updates must
        // recieve a method like $set: or $push: followed by the object to change
        // needs to take in pushAll or set and upsert or new valules
        console.log("sub value: " + JSON.stringify(sub, null, 1));
        console.log("updates: " + JSON.stringify(updates, null, 1));
        var update;
        var modifier;
        if(updates.hasOwnProperty("contacts")){
          // adjusts update methods for array fields
          // console.log("is array field");
          update = {$addToSet: updates};
          modifier = {upsert: true, new:true};
        }
        else{
          // adjusts updates for none array fields
          console.log("is not a array field");
          update = {$set: updates};
          modifier = {upsert: true, new: true};
        }
        // after the modifications are made update the collection
        User.update({ "tokenSub": sub }, update, modifier)
        .exec((err, results) => {
          if (err) {
            console.log("crud error update: " + err);

          }
          else {
            console.log("successfully updated: " + JSON.stringify(results, null, 1));
            cb(results);
          }
        });
      },
      delete: (deletes) => {
        // console.log("delete user data");
        // deletes the user info by array of objects updates must
        // recieve a method like $pop: or $pull: followed by the object to change
        User.findOneAndUpdate({ "token_sub": deletes.token.sub }, deletes.delete)
        .exec((err, results) => {
          if (err) {
            console.log("crud error delete: " + err);

          }
          else {
            console.log("successfully deleted: " + results);
            return (results);
          }
        });
      },
      validate: (field, update) =>{

        user.path(field).validate(function(value) {
          console.log("validater " + value);
          console.log("update " + update);
          console.log("field " + field);
          // When running in `validate()` or `validateSync()`, the
          // validator can access the document using `this`.
          // Does **not** work with update validators.
          if (this.update.toLowerCase().indexOf(update) !== -1) {
            return value !== 'red';
          }
          return true;
        });
      }

    }; // end of crud object

    module.exports = crud;
