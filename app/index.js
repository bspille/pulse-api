import React from 'react';
import reactDOM from 'react-dom'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import Splash from './containers/splash';
import App from './containers/app.js';
import reducers from './reducers/index';

// console.log(App)
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
export const store = createStoreWithMiddleware(reducers)

reactDOM.render(
  <Provider store= {store}>
   
      <App/>
    
  </Provider>,
    document.getElementById('root')
);


