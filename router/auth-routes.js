const GoogleAuth = require('google-auth-library')
const auth = new GoogleAuth
const CLIENT_ID = ["904019024650-eaprlckr58veqebrbnlssik6uap05rl8.apps.googleusercontent.com"]
const client = new auth.OAuth2(CLIENT_ID, '904019024650-uabutl82072at99jkqdpc31ma8cf3rsj.apps.googleusercontent.com')
const { checkoutUser, addContacts } = require('../controllers/controller')
const { USER, UPDATE, CONTACT, GEOMETRY } = require('./paths')
 module.exports = {
    authenticate(req, res, next){
        console.log(`this is the current path ${req.path}`)
        let { path, body: { token } } = req;
        let Query;
       
        // google verify user as a promise nested in a try catch
        const verifyUser = new Promise((resolve, reject)=>{
            let user;
            try{
                // trys to run the verify token from google
                client.verifyIdToken(token, CLIENT_ID, function(err, googleRes){
                user = googleRes.getPayload()
                })
            }
            catch(err){
                // catches errors here if verification fails
                console.log(`ERROR: google threw ${err}`)
            }
            finally{
                // check the client Id returned matches our google client Id and resolves or rejects
                if(user && user.aud == "904019024650-eaprlckr58veqebrbnlssik6uap05rl8.apps.googleusercontent.com"){
                resolve(user)
                }
                else{
                reject("ERROR: User could not be verified")
                }
            }
        })
        // call the promise verify that uses the token to verify the user
        verifyUser.then((user)=>{
            // route the request with the verified user to the  api controller
            switch(path){
                case USER:
                checkoutUser(req, res, user);
                case CONTACT:
                addContacts(req,res, user);
            }
        
        
        }).catch((reason)=>{
            // log the reason writen in the promise
            console.log(reason)
            // TODO: add error handling here
            
        });

    }
}