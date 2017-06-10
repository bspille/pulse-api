
// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var userSchema = new Schema({

  // token id hash from authentication token
  token_id: {
    type: String,
    required: true
  },

  // users first name
  first_name: {
    type: String,
    required: true
  },

  // users last name
  last_name: {
    type: String,
    required: true
  },

  // users zip code
  zip: {
    type: Number,
    required: true
  },

  // users pin number doubles as a identification question
  pin: {
    type: Number,
    required: true
  },

  // users set time for automatic pulse contacts
  time_set: {
    type: Date,
    required: false
  },

  // time stamp when the geo_location is is submitted
  time_stamp: {
    type: Date,
    required: false
  },

  // geo location information for pinning user location
  geo_location: {
    type: String,
    required: false
  },

  // user contact phone number
  phone_number: {
    type: Number,
    required: true
  },

  // users selected contacts
  contacts: [{

    // contacts first name
    first_name:{
      type: String,
      required: true
    },

    // contacts last name
    last_name: {
      type: String,
      required: true
    },

    // contact phone number
    phone_number: {
      type: Number,
      required: true
    },

    // set true for the contact to be pulsed
    active: {
    type: Boolean,
    required: true,
    default: false
    }
  }] // end of contact field

}); // end of schema

// Create the User model
var User = mongoose.model("User", userSchema);

// Export the model
module.exports = User;
