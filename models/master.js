// TODO: needs field validation to ensure data format is consistant
// add unique index true to prevent duplicate entries
// Require mongoose
var mongoose = require("mongoose"),
    // Contact = require("./slave.js"),

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
      geoLocation: {
        type: String,
        required: false
      },

      // user contact phone number
      phoneNumber: {
        type: String,
        required: false
      },

      // users selected contacts
      contacts: [{
          // contacts first name
          givenName:{
            type: String,
            required: false
          },

          // contacts last name
          familyName: {
            type: String,
            required: false
          },

          // contact phone number
          phoneNumber: {
            type: String,
            required: false
          },

          // set true for the contact to be pulsed
          active: {
            type: Boolean,
            required: true,
            default: false
          }
      }]


    }), // end of schema

  // Create the User model
  User = mongoose.model("User", userSchema);

// Export the model
module.exports = User;
