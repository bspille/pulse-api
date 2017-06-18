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
              console.log("successfully created: " + results);
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
          console.log("read " + results);
          cb(results);
        });
      },
      update: (sub, updates, cb) => {
        // console.log("update user");
        // updates the user by array of objects updates must
        // recieve a method like $set: or $push: followed by the object to change

        User.findOneAndUpdate({ "tokenSub": sub }, updates.update)
        .exec((err, results) => {
          if (err) {
            console.log("crud error update: " + err);

          }
          else {
            console.log("successfully updated: " + results);
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
      }

    }; // end of crud object

    module.exports = crud;
