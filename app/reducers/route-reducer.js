import { SET_ROUTE, HOME} from './../actions/index.js';

export default function(state = null, action) {
    // console.log(JSON.stringify(action, null, 1));
    switch(action.type){
        
        // if the action type is set id token return the payload from the action to state
        case SET_ROUTE:
        console.log(`route set to state ${action.payload}`)
        return action.payload
        
        // return the default state if type is not found
        default:
        return state
    }
}