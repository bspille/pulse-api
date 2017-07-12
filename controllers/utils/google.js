// TODO: needs to check the aud matches one of our client ids
const GoogleAuth = require('google-auth-library')
const auth = new GoogleAuth
const CLIENT_ID = ["904019024650-eaprlckr58veqebrbnlssik6uap05rl8.apps.googleusercontent.com"]
const client = new auth.OAuth2(CLIENT_ID, '904019024650-uabutl82072at99jkqdpc31ma8cf3rsj.apps.googleusercontent.com')

export const verifyUser = new Promise((resolve, reject)=>{
  try{
    client.verifyIdToken(token, CLIENT_ID, function(err, googleRes){
    let user = googleRes.getPayload()
    })
  }
  catch(err){
    console.log(`ERROR: google threw ${err}`)
  }
  finally{
    if(results.aud == "904019024650-eaprlckr58veqebrbnlssik6uap05rl8.apps.googleusercontent.com"){
      resolve(user)
    }
    reject("ERROR: User could not be verified")
  }
})
