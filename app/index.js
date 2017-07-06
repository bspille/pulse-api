import React from 'react';
import reactDOM from 'react-dom'
// import GoogleLogin from './components/google';
// import { Router, browserHistory } from 'react-router'
import {BrowserRouter as Router, Route, Switch, BrowserHistory } from 'react-router-dom'
// import {BrowserHistory} from 'react-router'
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
    <Router >
      <App/>
    </Router>
  </Provider>,
    document.getElementById('root')
);



//    <Provider store={store}>
//         <Router>
//             <Route path="/" component={App} />
//         </Router>
//     </Provider>,