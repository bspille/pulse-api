var User = require("../../models/master.js"),
    crud = {
      create: (token) => {
        // console.log("create new user");
        var entry = new User({
              token_sub: token.sub
              first_name: token.first_name,
              last_name: token.last_name,
              profile_image: token.image_url
          });
          entry.save((err, results) => {
            if (err){
              console.log("crud error create: " + err);
              break;
            }
            else {
              console.log("successfully created: " + results);
              return (results);
            }
          });
      },
      read: (subject) => {
        // console.log("find user");
        // takes in the token sub (subject) and searches for entries that match
        User.find({sub: subject}).exec((err, results) => {

          // log error if there is a read error
          if (err) {
            console.log("crud error read: " + err);
            break;
          }

          // return the users information if found
          if (results){
            return (results);
          }

          // return null if no results are found
          else {
            return (null);
          }
        })
      },
      update: (updates) => {
        // console.log("update user");
        // updates the user by array of objects updates must
        // recieve a method like $set: or $push: followed by the object to change

        User.findOneAndUpdate({ "token_sub": updates.token.sub }, updates.update,{new: true})
        .exec((err, results) => {
          if (err) {
            console.log("crud error update: " + err);
            break;
          }
          else {
            console.log("successfully updated: " + results);
            return (results);
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
            break;
          }
          else {
            console.log("successfully deleted: " + results);
            return (results);
          }
        });
      }

    }; // end of crud object

    module.exports = crud;
