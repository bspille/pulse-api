import { SET_ID_TOKEN } from '../actions/types.js';

export default function(state = null, { type, payload }) {
    // console.log(JSON.stringify(action, null, 1));
    switch(type){
    
        // if the action type is set id token return the payload from the action to state
        case SET_ID_TOKEN:
        console.log(`this idToken set to state ${payload}`)
        return payload

        // return the default state if type is not found
        default:
        return state
    }
}