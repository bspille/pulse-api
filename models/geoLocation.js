var mongoose = require("mongoose"),

    // Create Schema class
    Schema = mongoose.Schema,

    // Create geoLoc schema
    geoLocSchema = new Schema({
        // contacts first name
        longitude:{
          type: String,
          required: false
        },

        // contacts last name
        latitude: {
          type: String,
          required: false
        },

        // contact phone number
        timeStamp: {
          type: Date,
          required: false,
        }
    }); // end of schema

// export as sub-document
module.exports = geoLocSchema;
