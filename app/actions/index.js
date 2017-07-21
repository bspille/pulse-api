// actions that descride the changes to the state
// contacts are objects that get added to a array of objects
// select and unselect toggle is active contact
// contacts will need a key value to reference them
import axios from 'axios'
import { GET_USER_DATA, 
        SET_ID_TOKEN,
        SET_IMAGE_URL, 
        SET_IS_SIGNED_IN, 
        SET_NAME, 
        UPDATE_USER } from './types.js'
// used to get the access token from google signin
export const setAccessToken = (idToken) =>{
    return {
        type: SET_ID_TOKEN,
        payload: idToken
    }
}

export const setName = (name) => {
    return {
        type: SET_NAME,
        payload: name
    }
}
// used to get the image url form google signin
export const setImageUrl = (imageUrl) => {
    return {
        type: SET_IMAGE_URL,
        payload: imageUrl
    }
}

export const setIsSignedIn = (isSignedIn) => {
    return {
        type: SET_IS_SIGNED_IN,
        payload: isSignedIn
    }
}

export const getUserData = (token) => {
    let request = axios.post("/api/user",{token});
    return {
        type: GET_USER_DATA,
        payload: request
    }
}


export const addContact = (props) => {
    let token = props.token
    let request = axios.post('/api/contact', {token: token, newContact:{contactName: props.contactName, phoneNumber: props.phoneNumber}})

    console.log(request)
    return{
        type: UPDATE_USER,
        payload: request
    }
}
