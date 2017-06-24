var id_token;
// stores the id token for the http request
function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());

  // The ID token you need to pass to your backend:
  id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);

  // set welcome message alternative
  var givenName = profile.getGivenName();
  $("#welcome").text("Welcome, " + givenName);

  http(id_token);
};
// sends the id token to the server
function http(id_token) {
  $.post("https://pulse-alert.herokuapp.com/user/", {token: id_token},   (user) => {
    console.log("signin successfull: " + user);
    // send update in groups contacts, geoLocation, or everything else update tested ok
    // no input validation yet don't mix the groups
    $.post("https://pulse-alert.herokuapp.com/update/",{token: id_token, updates:
      [{
        givenName: "ben",
        familyName: "spille",
        phoneNumber: "609-468-1411"
      },
      {
        givenName: "chris",
        familyName: "callanjr",
        phoneNumber: "609-440-6403"
      },
      {
        givenName: "greg",
        familyName: "barone",
        phoneNumber: "732-770-1167"
      },
      {
        givenName: "josh",
        familyName: "butler",
        phoneNumber: "908-415-8831"
      }]
    }, (user) => {
        console.log("update successfull: " + user);
    });
  });

};
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}


$(document).on("click", "#pulse-button", getLocation);

function sendPulse(userLat, userLong) {
    console.log("id_token" + id_token);
    // changed the passed body to be cleaner naming
    $.post("https://pulse-alert.herokuapp.com/pulse/", {token: id_token, geoLocation: { latitude: userLat, longitude: userLong}});
    // console.log(userLat);
    // console.log(userLong);
};


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    // console.log(position.coords.latitude);
    // console.log(position.coords.longitude);
    var userLat = position.coords.latitude;
    var userLong = position.coords.longitude;
    sendPulse(userLat, userLong);
}
