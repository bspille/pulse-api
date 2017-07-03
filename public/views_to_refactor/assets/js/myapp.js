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
  $.post("/user/", {
    token: id_token
  }, (user) => {
    console.log("signin successfull: " + user);
    $.post("/update/", {
      token: id_token,
      updates: {
        contacts: [{
            givenName: "ben",
            familyName: "spille",
            phoneNumber: "6094681411"
          },
          {
            givenName: "chris",
            familyName: "callanjr",
            phoneNumber: "6094406403"
          },
          {
            givenName: "greg",
            familyName: "barone",
            phoneNumber: "7327701167"
          },
          {
            givenName: "josh",
            familyName: "butler",
            phoneNumber: "9084158831"
          }
        ]
      }
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
  $.post("/pulse/", {
    token: id_token,
    geoLocation: {
      userLat: userLat,
      userLong: userLong
    }
  });
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

// Toggle pulse button
$('#largeSwitch').click(function () {
  if ($('#pulse-button').attr("disabled")) {
    $('#pulse-button').removeAttr("disabled");
  } else {
    $('#pulse-button').attr("disabled", '');
  }
});
