// TODO: needs field validation to ensure data format is consistant
// validate validator dosen't run by default need to run validators for updates
// Require mongoose
var mongoose = require("mongoose"),

    Contact = require("./contact.js"),
    geoLocation = require("./geoLocation.js"),
    pulseRecord = require("./pulseRecord.js"),

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
        validate: {
          validator: function(v){
            return /\d{5}/.test(v);
          },
          message: '{VALUE} is not a valide zip code'
        },
        required: false
      },

      // users pin number doubles as a identification question
      pin: {
        type: String,
        validate: {
          validator: function(v){
            return /\d{4}/.test(v);
          },
          message: '{VALUE} is not a valide pin'
        },
        required: false
      },

      // users set time for automatic pulse contacts
      timeSet: {
        type: Date,
        required: false
      },

      pulseRecord: [pulseRecord],

      message: {
        type: String,
        default: " needs some assistance, heres where they are: ",
        required: true

      },

      // geo location information for pinning user location
      // must add timestamp and longitude and latitude properties
      geoLocation: [geoLocation],

      // user contact phone number
      phoneNumber: {
        type: String,
        validate: {
          validator: function(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
          },
          message: '{VALUE} is not a valid phone number!'
        },
        required: false
      },
      // propose delete
      // geolocation: [{
      //
      //   // contacts first name
      //   userLat:{
      //     type: String,
      //     required: false
      //   },
      //
      //   // contacts last name
      //   userLong: {
      //     type: String,
      //     required: false
      //   }
      // }],

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
