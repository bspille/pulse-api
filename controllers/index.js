const {  CONTACT, GEOMETRY, PULSE, UPDATE, UPDATE_CONTACT, USER} = require('../routes/paths')
const { addContacts, addGeometry, checkoutUser, updateContact, updateUser,  } = require('./user-controller')
 
 module.exports = {
     apiController(req, res, next, user){
        let { path } = req;
        // route the request with the verified user to the  api controller
        switch(path){
            case CONTACT:
                addContacts(req, res, next, user);
            break;
            case GEOMETRY:
                addGeometry(req, res, next, user);
            break;
            case UPDATE:
                updateUser(req, res, next, user);
            break;
            case UPDATE_CONTACT:
                updateContact(req, res, next, user);
            break;
            case USER:
                checkoutUser(req, res, next, user);
            break;
            case PULSE:
                pulse(req, res, next, user);
            break;
        }
    }
 }