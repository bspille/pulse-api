// TODO: needs to check the aud matches one of our client ids
var GoogleAuth = require('google-auth-library'),
    auth = new GoogleAuth,
    CLIENT_ID = ["904019024650-eaprlckr58veqebrbnlssik6uap05rl8.apps.googleusercontent.com",
    "533524339613-mm3v70onq310vr0qep2it2pj5vcj1t33.apps.googleusercontent.com"],
    // server client Id need here
    // https://developers.google.com/identity/sign-in/web/backend-auth secret api A-l9yAqEK93j15p3YzkZ5ytX
    client = new auth.OAuth2(CLIENT_ID, '904019024650-uabutl82072at99jkqdpc31ma8cf3rsj.apps.googleusercontent.com'),
    google = {

      verifyToken: (token, cb) =>{
        // console.log("verifying token " + token);
        client.verifyIdToken(
          // id token from front end
          token,
          // front end client id's
          CLIENT_ID,
          // Or, if multiple clients access the backend:
          //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
          function(e, login) {
            var payload = login.getPayload();
            var userid = payload['sub'];
            // console.log(payload);
            cb(payload);
            // If request specified a G Suite domain:
            //var domain = payload['hd'];
          });
        }
      }
module.exports = google;
