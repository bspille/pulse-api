const React = require('react'),
    gapi = require('googleapis');
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
 
var oauth2Client = new OAuth2(
  ,
  YOUR_CLIENT_SECRET,
  YOUR_REDIRECT_URL
);
 
// generate a url that asks permissions for Google+ and Google Calendar scopes 
var scopes = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/calendar'
];
 
var url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token) 
  access_type: 'offline',
 
  // If you only need one scope you can pass it as a string 
  scope: scopes,
 
  // Optional property that passes state parameters to redirect URI 
  // state: { foo: 'bar' } 
});
    class GoogleSignin extends React.Component {

     
        componentDidMount(){
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
                var id_token = googleUser.getAuthResponse().id_token;
                console.log("ID Token: " + id_token);
            }
        }
        

        render(){
            return <div className="g-signin2" data-onsuccess={this.onSignIn} data-theme="dark"></div>;
        }
    }

export {GoogleSignin};