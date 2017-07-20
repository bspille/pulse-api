// TODO: this reducer needs to be debugged it returns null when it should return state
// TODO: if the contact phone number exists the payload data is reurned null

import { GET_USER_DATA, UPDATE_USER } from '../actions/index'
const initialState = {};
export default function(state = null, action) {
        let { type, payload } = action;
        
        switch(action.type){
            // if the action type is set id token return the payload from the action to state
            case GET_USER_DATA:
                    console.log(`get user data payload ${JSON.stringify(payload,null,1)}`)
                    return payload.data.contacts
            case UPDATE_USER:
                    console.log(`add contact payload ${JSON.stringify(payload,null,1)}`)
                    return payload.data
            // return the default state if type is not found
            default:
                return state
        }
    
  
   
}