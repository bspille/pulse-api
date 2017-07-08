const User = require("./../../models/master.js")
const twilio = {
// TODO: pass in google auth token for referencing user & grabbing contacts
// TODO: pass in lat and long coords for geolocation
  pulse: (sub, userLat, userLong) => {
    console.log(`twilio pulse ${sub}`);

    // find emergency contacts associated with user, will eventually change to google auth token
    User.findOne({ "tokenSub": sub })
      .exec(function(error, doc) {
        // Log any errors
        if (error) {
          console.log(error);
        }
        // Otherwise, send the doc to the browser as a json object
        else {
          console.log(doc.contacts);
          // Twilio Credentials
          var accountSid = 'AC28a7d147997ae94957f97fde9d4e8697';
          var authToken = '5b6559e6ef0997f8cf151165fc9e4559';

          // test values left in just in case
          var TESTLat = "40.535434";
          var TESTLong = "-74.52128700000002";
          var userDisplayName = `${doc.givenName} ${doc.familyName}`;
          // generating the google map link with a map pin using users geolocation
          var userLocation = "https://www.google.com/maps/place/" + userLat + "," + userLong;
          // assigning the text body to a variable, laying groundwork for interchangeable messages
          var assistanceMessage = `${userDisplayName} needs some assistance, heres where they are:`;
          // loop to send a message out to each contact

          for (var i = 0; i < doc.contacts.length; i++) {
            // grabs emergency contact phone number
            var pulseRecipientNumber = doc.contacts[i].phoneNumber;
            //require the Twilio module and create a REST client
            var client = require('twilio')(accountSid, authToken);
            client.messages.create({
                to: "+1" + pulseRecipientNumber,
                from: "+18562194209",
                body: `Hey, ${assistanceMessage} ${userLocation}`,
            }, function(err, message) {
                console.log("sucess!");
            });// end of client.messages.create
          } // end of for loop
        }
      });  // end of .exec

  } //end of pulse function

  // widePulse: (zipCode) => {
  //   console.log(`twilio widePulse zip: ${zipCode}`);
  //
  //       // find emergency contacts associated with user, will eventually change to google auth token
  //   User.find({ "zip": zipCode })
  //     .exec(function(error, doc) {
  //       // Log any errors
  //       if (error) {
  //         console.log(error);
  //       }
  //       // Otherwise, send the doc to the browser as a json object
  //       else {
  //         console.log(doc.phoneNumber);
  //         // Twilio Credentials
  //         var accountSid = 'AC28a7d147997ae94957f97fde9d4e8697';
  //         var authToken = '5b6559e6ef0997f8cf151165fc9e4559';
  //         // assigning the text body to a variable, laying groundwork for interchangeable messages
  //         var assistanceMessage = "ATTENTION, THIS IS A TEST OF OUR EMERGENCY ALERT SYSTEM";
  //         // loop to send a message out to each user
  //         for (var i = 0; i < doc.length; i++) {
  //           // grabs users phone number
  //           var pulseRecipientNumber = doc[i].phoneNumber;
  //           //require the Twilio module and create a REST client
  //           var client = require('twilio')(accountSid, authToken);
  //           client.messages.create({
  //               to: "+1" + pulseRecipientNumber,
  //               from: "+18562194209",
  //               body: assistanceMessage,
  //           }, function(err, message) {
  //               console.log(message.sid);
  //           });// end of client.messages.create
  //         } // end of for loop
  //       }
  //     });  // end of .exec
  //
  // } // end of widePulse

  // selfPulse: (phoneNumber, userLat, userLong) => {
  //     // this function is to allow a user to send a single pulse to themselves, mostly for testing functionality/demoing purposes.
  //       // Log any errors
  //       if (error) {
  //         console.log(error);
  //       }
  //       else {
  //         // Twilio Credentials
  //         var accountSid = 'AC28a7d147997ae94957f97fde9d4e8697';
  //         var authToken = '5b6559e6ef0997f8cf151165fc9e4559';
  //         // test values left in just in case
  //         var TESTLat = "40.535434";
  //         var TESTLong = "-74.52128700000002";
  //         // generating the google map link with a map pin using users geolocation
  //         var userLocation = "https://www.google.com/maps/place/" + userLat + "," + userLong;
  //         // assigning the text body to a variable, laying groundwork for interchangeable messages
  //         var pulseMessage = "Hi, welcome to the Pulse demo! Thanks so much for trying out our application! Here's your location:";
  //         // loop to send a message out to each contact
  //         // grabs emergency contact phone number
  //         var pulseRecipientNumber = phoneNumber;
  //         //require the Twilio module and create a REST client
  //         var client = require('twilio')(accountSid, authToken);
  //         client.messages.create({
  //             to: "+1" + pulseRecipientNumber,
  //             from: "+18562194209",
  //             body: `${pulseMessage} ${userLocation}`,
  //         }, function(err, message) {
  //             console.log(message.sid);
  //         });// end of client.messages.create
  //       }
  // } //end of self pulse function
}; // end of module.exports

module.exports = twilio;
