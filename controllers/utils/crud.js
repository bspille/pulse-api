var User = require("../../models/master.js"),
    crud = {
      create: () => {
        console.log("create new user");
      },
      read: () => {
        console.log("find user");
      },
      update: () => {
        console.log("update user");
      },
      delete: () => {
        console.log("delete user data");
      }
    };

    module.exports = crud;
