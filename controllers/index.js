const { USER, UPDATE, CONTACT, GEOMETRY } = require('../routes/paths')
const { checkoutUser, addContacts } = require('./user-controller')
 
 module.exports = {
     apiController(req, res, user){
        let { path } = req;
        // route the request with the verified user to the  api controller
        switch(path){
            case USER:
                checkoutUser(req, res, user);
            break;
            case CONTACT:
                addContacts(req, res, user);
            break;
        }
    }
 }