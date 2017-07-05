

// imports and requires here
import React, { Component } from "react"
import { connect } from 'react-redux'
import * as actionCreators from '../actions/index'
import { bindActionCreators } from 'redux'
import Nav from "../components/nav"
import Header from "../components/header"
import Footer from "../components/footer"
import Splash from './splash'
// import Profile from "../components/profile"
import PulseButton from "./pulse-button"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Profile from "../components/profile.js";


// exported to the index.js
 class App extends Component {
  constructor(props){
    super(props)
   
    console.log(this)
  }
 
  render(){
    if(this.props.isSignedIn){
      return (
        <div>
          <Nav/>
          <Header/>
          <div className="container">
          <PulseButton/>
          
          </div>
          <Footer/>
          <Router>
            {/*<Route path="/" component={About}/>*/}
            <Route path="/profile" component={Profile}/>
          </Router>
        </div>
      );
    }
    else{
    return <Splash/>
    }
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
