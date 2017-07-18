// TODO: this reducer needs to be debugged it returns null when it should return state
// TODO: if the contact phone number exists the payload data is reurned null

import { GET_USER_DATA, UPDATE_USER } from '../actions/index'
const initialState = {};
export default function(state = null, action) {
        
        switch(action.type){
            // if the action type is set id token return the payload from the action to state
            case GET_USER_DATA:
                    return action.payload.data
                
                
            case UPDATE_USER:
                console.log(JSON.stringify(action.payload,null,1))
                if(action.payload.data){
                    return action.payload.data
                }
                else{
                    return state
                }  
                
            // return the default state if type is not found
            default:
                return state
        }
    
   
}