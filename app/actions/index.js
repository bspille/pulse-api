// actions that descride the changes to the state
// contacts are objects that get added to a array of objects
// select and unselect toggle is active contact
// contacts will need a key value to reference them
import axios from 'axios'

// set on login
export const SET_ID_TOKEN = 'SET_ID_TOKEN';
export const SET_NAME = 'SET_NAME';
export const SET_IMAGE_URL = 'SET_IMAGE_URL';
export const SET_IS_SIGNED_IN = 'SET_IS_SIGNED_IN';
export const SET_ROUTE = 'SET_ROUTE';
// user object fields
export const GET_USER_DATA ='GET_USER_DATA';

// add routes here
export const HOME = "/home"
export const PROFILE = "/profile"
export const ABOUT = "/about"
export const FAQ = "/faq"
export const HELP = "/help"
export const ROOT = "/"



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
   
    let request = axios.post("/user/",{token});
    return {
        type: GET_USER_DATA,
        payload: request
    }
}

export const setRoute = (route) => {
    return {
        type: SET_ROUTE,
        payload: route
    }
}

