import { SET_NAME } from '../actions/types.js';

export default function(state = null, { type, payload }) {
    // console.log(JSON.stringify(action, null, 1));

    switch(type){
    
        // if the action type is set id token return the payload from the action to state
        case SET_NAME:
        console.log(`this is set to state ${payload}`)
        return payload

        // return the default state if type is not found
        default:
        return state
    }
}