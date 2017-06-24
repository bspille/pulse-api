var mongoose = require("mongoose"),

    // Create Schema class
    Schema = mongoose.Schema,

    // Create geoLoc schema
    recordSchema = new Schema({
        // contacts first name
        pulseSent:{
          type: Boolean,
          required: false
        },

        // contact phone number
        timeStamp: {
          type: Date,
          required: false,
        }
    }); // end of schema

// export as sub-document
module.exports = recordSchema;
