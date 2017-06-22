var mongoose = require("mongoose"),

    // Create Schema class
    Schema = mongoose.Schema,

    // Create contact schema
    contactSchema = new Schema({
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
          required: false,
        },

        // set true for the contact to be pulsed
        active: {
          type: Boolean,
          required: true,
          default: false
        }
    }); // end of schema

// export as sub-document
module.exports = contactSchema;
