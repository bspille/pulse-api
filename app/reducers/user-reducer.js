import { GET_USER_DATA } from '../actions/types.js';

export default function(state = null, { type, payload }) {
    
    // console.log(JSON.stringify(action, null, 1));
        console.log(payload)
        switch(type){
            // if the action type is set id token return the payload from the action to state
            case GET_USER_DATA:
                return payload

            // return the default state if type is not found
            default:
                return state
        };
    

};