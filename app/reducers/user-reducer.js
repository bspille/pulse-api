import { GET_USER_DATA } from '../actions/index'

export default function(state = null, action) {
    // console.log(JSON.stringify(action, null, 1));
    switch(action.type){
    
        // if the action type is set id token return the payload from the action to state
        case GET_USER_DATA:
            console.log(`this is the user data set state ${JSON.stringify(action.payload.data,null,1)}`)
           if (action.Payload.data == "undefined"){
            return state
            }
            return action.payload.data

        // return the default state if type is not found
        default:
            return state
    }
}