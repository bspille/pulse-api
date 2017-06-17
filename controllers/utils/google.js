// var GoogleAuth = require('google-auth-library'),
//     auth = new GoogleAuth,
//     // server client Id need here
//     // https://developers.google.com/identity/sign-in/web/backend-auth
//     client = new auth.OAuth2(CLIENT_ID, '',),
//     google = {
//
//       verifyToken: (token, CLIENT_ID) =>{
//         client.verifyIdToken(
//           // id token from front end
//           token,
//           // front end client id's
//           CLIENT_ID,
//           // Or, if multiple clients access the backend:
//           //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
//           function(e, login) {
//             var payload = login.getPayload();
//             var userid = payload['sub'];
//             console.log(payload);
//             return ({payload: payload,
//                     userID: userid});
//             // If request specified a G Suite domain:
//             //var domain = payload['hd'];
//           });
//         }
//       }
//
//       module.exports = google;
