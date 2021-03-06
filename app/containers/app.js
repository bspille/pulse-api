

// imports and requires here
import React, { Component } from "react"
import { connect } from 'react-redux'
import * as actionCreators from '../actions/index';
import { bindActionCreators } from 'redux'
import Nav from "./nav"
import Header from "../components/header"
import Footer from "../components/footer"
import Splash from './splash'
import Contacts from "../components/contacts"
import About from "../components/about"
import Faq from "../components/faq"
import PulseButton from "./pulse-button"
import { Route, Switch, Redirect } from 'react-router-dom'
import NewContact from "./add-contact-form";


// exported to the index.js
 class App extends Component {
  constructor(props){
    super(props)
   
    console.log(this)
    
    
  }
 
  render(){
  
      return (
          <div className="main-container">
            <Route component={Nav}/>
            <Route component={Header}/>
            <div className="container">
              <Switch>
                <Route exact={true} path="/user" component={PulseButton}/>
                <Route path="/user/contacts" component={NewContact}/>
                <Route path="/user/about"component={About}/>
                <Route path="/user/faq" component={Faq}/>
                {/*<Route path="/user/help" render={() => <h2>"Please wait a monent while I load Master" Loading...</h2>}/>*/}
              </Switch>
            </div>
            <Route component={Footer}/>
          </div>
      )
    }
 }
// map the redux state to the props object
function mapStateToProps(state){
  return Object.assign({},state)
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch)
}
// connect the new props to the container
 export default connect(mapStateToProps, mapDispatchToProps)(App);
