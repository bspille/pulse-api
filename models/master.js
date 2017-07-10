// TODO: needs field validation to ensure data format is consistant
// validate validator dosen't run by default need to run validators for updates
// Require mongoose
const mongoose = require("mongoose")
const Contact = require("./contact.js")
const geoLocation = require("./geoLocation.js")
const pulseRecord = require("./pulseRecord.js")

// Create Schema class
const Schema = mongoose.Schema

// Create article schema
const userSchema = new Schema({

  // token id hash from authentication token
  tokenSub: {
    type: String,
    required: true
  },

  // users first name
  givenName: {
    type: String,
    required: false
  },

  // users last name
  familyName: {
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
   

      // users selected contacts
  contacts: [Contact]


}); // end of schema



  // Create the User model
  const User = mongoose.model("User", userSchema);

// Export the model
module.exports = User;
