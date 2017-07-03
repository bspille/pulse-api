import React  from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Contacts from './Contacts';
import Profile from './Profile';
import Nav from './Nav';
import A11yMessage from './A11yMessage';
import  '../node_modules/bootstrap/dist/css/bootstrap.css';

//The Redux store is created as usual, but we add extra configuration to enable the use of the Redux browser dev tools.
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => (
    <Provider store={store}>
        <div>
            <A11yMessage/>
            <Router>
                <div>
                    <Nav/>
                    <Header/>
                    <main className="container">
                        <Route exact={true} path="/" component={Main}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/contacts" component={Contacts}/>
                    </main>
                </div>
            </Router>
            <Footer/>
        </div>
    </Provider>
);

export default App;
