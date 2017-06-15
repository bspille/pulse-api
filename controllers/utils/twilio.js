var User = require("../../models/master.js")
var twilio = {
  pulse: () => {
    console.log("twilio pulse");
    // find emergency contacts associated with user
    User.findOne({ "tokenSub": 1 })

      .exec(function(error, doc) {
        // Log any errors
        if (error) {
          console.log(error);
        }
        // Otherwise, send the doc to the browser as a json object
        else {
          console.log(doc.contacts);
          // TODO: move all of this into a function
          // TODO: export function
          // TODO: move into a route
          // TODO: trigger route with button click event
          // Twilio Credentials
          var accountSid = 'AC28a7d147997ae94957f97fde9d4e8697';
          var authToken = '5b6559e6ef0997f8cf151165fc9e4559';
          // TODO: code to access db for pulseRecipientNumber
          for (var i = 0; i < doc.contacts.length; i++) {
            var phoneBook = doc.contacts[i].phoneNumber;
            // can remove toString conversion once datatypes have been updated
            var pulseRecipientNumber = phoneBook.toString();
            var pulseRecipientName = doc.contacts[i].givenName;
            //require the Twilio module and create a REST client
            var client = require('twilio')(accountSid, authToken);
            client.messages.create({
            // TODO: need to change "to" to variable pulseRecipientNumber
                to: "+1" + pulseRecipientNumber,
                from: "+18562194209",
              // TODO: refine pulse message
                body: "Hey " + pulseRecipientName + " welcome to the Pulse test message",
            }, function(err, message) {
                console.log(message.sid);
            });
          }
        }
      });

  }
};

module.exports = twilio;
