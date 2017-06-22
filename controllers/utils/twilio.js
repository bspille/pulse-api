var User = require("../../models/master.js")
var twilio = {
// TODO: pass in google auth token for referencing user & grabbing contacts
// TODO: pass in lat and long coords for geolocation
// changed to cleaner naming here
  pulse: (sub, latitude, longitude) => {
    console.log("twilio pulse" + sub);
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
          var userDisplayName = doc.givenName + " " + doc.familyName
          var testLat = "40.535434";
          var testLong = "-74.52128700000002";
          // this is a test location, will need to plug in user lat and lng when sent back from the browser
          // changed to cleaner naming here
          var userLocation = "https://www.google.com/maps/place/" + latitude + "," + longitude;
          for (var i = 0; i < doc.contacts.length; i++) {
            // grabs emergency contact phone number
            var pulseRecipientNumber = doc.contacts[i].phoneNumber;
            // grabs emergency contact name
            var pulseRecipientName = doc.contacts[i].givenName;
            //require the Twilio module and create a REST client
            var client = require('twilio')(accountSid, authToken);
            client.messages.create({
            // TODO: need to change "to" to variable pulseRecipientNumber
                to: "+1" + pulseRecipientNumber,
                from: "+18562194209",
              // TODO: refine pulse message
                body: "Hey " + pulseRecipientName + ", " + userDisplayName + " needs some assistance, heres where they are: " + userLocation,
            }, function(err, message) {
                console.log(message.sid);
            });// end of client.messages.creat
          } // end of for loop
        }
      });  // end of .exec

  } //end of pulse function
}; // end of module.exports

module.exports = twilio;
// test
