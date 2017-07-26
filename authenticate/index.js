const GoogleAuth = require('google-auth-library');
const auth = new GoogleAuth;
const CLIENT_ID = ["904019024650-eaprlckr58veqebrbnlssik6uap05rl8.apps.googleusercontent.com"];
const client = new auth.OAuth2(CLIENT_ID, '904019024650-uabutl82072at99jkqdpc31ma8cf3rsj.apps.googleusercontent.com');
const { apiController } = require('../controllers');
const Exception = require("../utils/exceptions");

 module.exports = {
    authenticate(req, res, next){
        let { token } = req.body;
        console.log(req.body)
        let user;
        // trys to run the verify token from google
        client.verifyIdToken(token, CLIENT_ID)
            .then((user)=>{
                // check the client Id returned matches our google client Id and resolves or rejects
                if(user.aud == "904019024650-eaprlckr58veqebrbnlssik6uap05rl8.apps.googleusercontent.com"){
                    console.log(user)
                    // pass arguments to the api controller
                    qapiController(req, res, next, user);
                }
                else{
                   throw new Exception("Invalid Client ID") 
                }
            })
            // send error to the next middleware
            .catch(next);
                
    }
}