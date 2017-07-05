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

// user object fields
export const GET_USER_DATA ='GET_USER_DATA';

// posible deletes
// export const SET_PIN = 'SET_PIN';
// export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
// export const SET_ZIP_CODE = 'SET_ZIP_CODE';
// export const SET_CONTACTS = 'SET_CONTACTS';
// export const ADD_CONTACT = 'ADD_CONTACT';
// export const TOGGLE_CONTACT = 'TOGGLE_CONTACT';


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

export const getUserData = (idToken) => {
    
    let request = axios.post("/user/",{idToken});
    return {
        type: GET_USER_DATA,
        payload: request
    }
}

// // used to fetch the pin from the user object
// export const setPin = (pin) => {
//     // axios post here
//     return {
//         type: SET_PIN,
//         payload: res
//     }
// }

// // used to fetch the phoneNumber from the user object
// export const setPhoneNumber = (phoneNumber) => {
//     return {
//         type: SET_PHONE_NUMBER,
//         phoneNumber
//     }
// }

// // used to fetch the zip from the user object
// export const setZipCode = (zip) => {
//     return {
//         type: SET_ZIP_CODE,
//         zip
//     }
// }

// // used to fetch the contacts from the user object
// export const setContacts = (contacts) => {
//     return { 
//         type: SET_CONTACTS,
//         contacts
//     }
// }

// // used to add contacts to the user object
// export const addContact = (contact) => {
//     return {
//         type: ADD_CONTACT,
//         contact
//     }
// }

// // used to toggle the active boolean on the contacts
// export const toogleContact = (contact) => {
//     return {
//         type: TOGGLE_CONTACT,
//         contact
//     }
// }
