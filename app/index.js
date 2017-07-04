import React from 'react';
import reactDOM from 'react-dom'
import GoogleLogin from './components/google';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './containers/app';
import reducers from './reducers/index';
import { setAccessToken, setImageUrl, setName } from './actions/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

const responseGoogle = (response) => {
    console.log(response);
    document.getElementById('root').style.zIndex= "100";
    let profile = response.getBasicProfile();
    store.dispatch(setAccessToken(response.getAuthResponse().id_token));
    store.dispatch(setImageUrl(profile.getImageUrl()));
    store.dispatch(setName(profile.getGivenName()));
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

reactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);



