import React from 'react';
import reactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
        <Router>
            <Switch>
                <Route exact={true} path="/" component={Splash}/>
                <Route path="/user" component={App}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);


