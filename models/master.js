// TODO: needs field validation to ensure data format is consistant
// add unique index true to prevent duplicate entries
// Require mongoose
var mongoose = require("mongoose"),

    Contact = require("./slave.js"),
    assert = require("assert"),
    // path = require("path"),

    // Create Schema class
    Schema = mongoose.Schema,

    // Create article schema
    userSchema = new Schema({

      // token id hash from authentication token
      tokenSub: {
        type: String,
        required: true
      },

      // users first name
      givenName: {
        type: String,
        required: true
      },

      // users last name
      familyName: {
        type: String,
        required: true
      },

      imageUrl: {
        type: String,
        required: false
      },

      // users zip code
      zip: {
        type: String,
        required: false
      },

      // users pin number doubles as a identification question
      pin: {
        type: String,
        required: false
      },

      // users set time for automatic pulse contacts
      timeSet: {
        type: Date,
        required: false
      },

      // time stamp when the geo_location is is submitted
      timeStamp: {
        type: Date,
        required: false
      },

      // geo location information for pinning user location
      // must add timestamp and longitude and latitude properties
      geoLocation: {
        type: String,
        required: false
      },

      // user contact phone number
      phoneNumber: {
        type: String,
        required: false
      },

      geolocation: [{

        // contacts first name
        userLat:{
          type: String,
          required: false
        },

        // contacts last name
        userLong: {
          type: String,
          required: false
        }
      }],

      // users selected contacts
      contacts: [Contact]


    }); // end of schema

    // update validation needs to be before the model instance
  //   // TODO: test if the update  validator is appended to the User model
  //   userSchema.path('contacts').validate(function(value) {
  //   // When running update validators with the `context` option set to
  //   // 'query', `this` refers to the query object.
  //   // map loop trough the array of objects and test for deep inequallity
  //   // throw error if the update is deep equal when done return true
  //   console.log("this user schema " + JSON.stringify(this, null, 1));
  //   this.
  //     // console.log("value to search for " + value);
  //     // console.log("check against existing " + );
  //     assert.notDeepEqual(x, value, "Error: contact " + value + " already in the the sub-document");
  //
  //   return true;
  // });

  // Create the User model
  var User = mongoose.model("User", userSchema);

// Export the model
module.exports = User;
