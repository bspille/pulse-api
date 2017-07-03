import React from 'react';
import reactDOM from 'react-dom'
import GoogleLogin from './components/google';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
// import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// reactDOM.render(
//     <Provider store={createStoreWithMiddleware(reducers)}>
//         <App/>
//     </Provider>,
//     document.getElementById('root')
// );

let isLoggedIn = false;

if (isLoggedIn){
    ()=>{
        console.log("is logged in");
    }
}

const responseGoogle = (response) => {
    console.log(response);
    isLoggedIn = response.isSignedIn();
    document.getElementById('root').style.zIndex= "100";


//   setName(profile.getGivenName());
//   setImageUrl(profile.getImageUrl());
//   setAccessToken(googleUser.getAuthResponse().id_token);

}
 
reactDOM.render(
  <GoogleLogin
    clientId="904019024650-eaprlckr58veqebrbnlssik6uap05rl8.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />,
  document.getElementById('googleButton')
);
