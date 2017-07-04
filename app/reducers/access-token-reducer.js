import { SET_ID_TOKEN } from './../actions/index.js';

export default function(state = null, action) {
    // console.log(JSON.stringify(action, null, 1));
    console.log(SET_ID_TOKEN);
    switch(action.type){
    
        // if the action type is set id token return the payload from the action to state
        case SET_ID_TOKEN:
        console.log(`this is set to state ${action.payload}`)
        return action.payload

        // return the default state if type is not found
        default:
        return state
    }
}