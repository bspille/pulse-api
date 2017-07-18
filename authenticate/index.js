const GoogleAuth = require('google-auth-library')
const auth = new GoogleAuth
const CLIENT_ID = ["904019024650-eaprlckr58veqebrbnlssik6uap05rl8.apps.googleusercontent.com"]
const client = new auth.OAuth2(CLIENT_ID, '904019024650-uabutl82072at99jkqdpc31ma8cf3rsj.apps.googleusercontent.com')
const { apiController } = require('../controllers')


 module.exports = {
    authenticate(req, res, next){
        let { token } = req.body;
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
                // TODO: handle errors here
                // catches errors here if verification fails
            
                console.log(`ERROR: google threw ${err}`)
                next()
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
            // pass arguments to the api controller
           apiController(req, res, next, user);
        
        }).catch((err)=>{
            // TODO: add error handling here
            // call the next middleware passing the err
            next()
            
            
        });
    }
}