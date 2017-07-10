import { GET_USER_DATA, UPDATE_USER } from '../actions/index'

export default function(state = null, action) {
    // console.log(JSON.stringify(action, null, 1));
    switch(action.type){
    
        // if the action type is set id token return the payload from the action to state
        case GET_USER_DATA:
        console.log(`this is the contacts data set state ${JSON.stringify(action.payload.data.contacts,null,1)}`)
            if (action.payload.data != undefined){
                return action.payload.data.contacts
            }
            return action.payload.data.contacts

        case UPDATE_USER:
            console.log(`this is add to contact data set state ${JSON.stringify(action.payload.data,null,1)}`)
           if (action.payload.data != undefined){
                return [...state, action.payload.data]
            }
            return null
        // return the default state if type is not found
        default:
            return state
    }
}