// TODO: move all of this into a function
// TODO: export function
// TODO: move into a route
// TODO: trigger route with button click event
// Twilio Credentials
var accountSid = 'AC28a7d147997ae94957f97fde9d4e8697';
var authToken = '5b6559e6ef0997f8cf151165fc9e4559';
var pulseRecipientNumber =["+16094406403", "+16094681411", "+17327701167", "+19084158831"];
var pulseRecipientName = ["Chris", "Ben", "Greg", "Josh"];
// TODO: code to access db for pulseRecipientNumber
for (var i = 0; i < pulseRecipientNumber.length; i++) {
  //require the Twilio module and create a REST client
  var client = require('twilio')(accountSid, authToken);
  client.messages.create({
  // TODO: need to change "to" to variable pulseRecipientNumber
      to: pulseRecipientNumber[i],
      from: "+18562194209",
    // TODO: refine pulse message
      body: "Hey " + pulseRecipientName[i] + " welcome to the Pulse test message",
  }, function(err, message) {
      console.log(message.sid);
  });
}