// TODO: this reducer needs more focus now that the new middleware is in place
// TODO: if the contact phone number exists the payload data is reurned null

import { GET_USER_DATA, ADD_CONTACT } from '../actions/types.js'

export default function(state = null, { type, payload }) {
        
        switch(type){
            // if the action type is set id token return the payload from the action to state
            case GET_USER_DATA:
                    console.log(`get user data payload ${JSON.stringify(payload,null,1)}`)
                    return payload.data.contacts
            case ADD_CONTACT:
                    console.log(`add contact payload ${JSON.stringify(payload,null,1)}`)
                    return payload.data
            // return the default state if type is not found
            default:
                return state
        }
    
  
   
}