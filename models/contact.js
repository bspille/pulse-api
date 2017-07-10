var mongoose = require("mongoose"),

    // Create Schema class
    Schema = mongoose.Schema,

    // Create contact schema
    contactSchema = new Schema({
        // contacts name
        contactName:{
          type: String,
          required: false
        },

        // contact phone number
        phoneNumber: {
          type: String,
          validate: {
            validator: function(v) {
              return /\d{10}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
          },
          required: false
          
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
