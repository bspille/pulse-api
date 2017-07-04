import React from 'react';
import reactDOM from 'react-dom'
// import GoogleLogin from './components/google';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './containers/app';
import reducers from './reducers/index';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


reactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>,
    document.getElementById('root')
);



