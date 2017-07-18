// TODO: try to use a map reducer to grab only the active contacts from the data collection
// TODO: test this controller

const User = require("../models/user");
const accountSid = 'AC28a7d147997ae94957f97fde9d4e8697';
const authToken = '5b6559e6ef0997f8cf151165fc9e4559';
const client = require('twilio')(accountSid, authToken);
module.exports = {
        // // route to send out pulse
    pulse(req, res, user){
        console.log(JSON.stringify(req.body,null,1))
       
        let { sub } = user;
        let { coords } = req.body;
        console.log(coords)
        let point = `https://www.google.com/maps/place/${ coords }`;
        let query = { sub };
        User.find( query )
            .then((userObj)=>{
                let { message, given_name } = userObj;
                let body = `Hey ${ given_name } ${ message } ${ point }`;
                userObj.contacts.map((contact)=>{
                    if(contact.active){
                        let { phoneNumber } = contact      
                        client.messages.create({
                            to: `+1${ phoneNumber }`,
                            from: "+18562194209",
                            body,
                        })
                        .then((message)=>{
                            console.log(`this is the return from the twilio message ${message}`)
                            res.status(200).json("message sent")
                        })
                        .catch((err)=>{
                            // TODO: handle errors here
                            console.log(err)
                        })    
                    }
                    else{
                        return false
                    }
                })
            })
            .catchf((err)=>{
                // TODO: handle errors here
                console.log(err)
            })


    }
    
}