

// imports and requires here
import React, { Component } from "react"
import { connect } from 'react-redux'
import * as actionCreators from '../actions/index';
import { bindActionCreators } from 'redux'
import Nav from "./nav"
import Header from "../components/header"
import Footer from "../components/footer"
import Splash from './splash'
import Profile from "../components/profile"
import PulseButton from "./pulse-button"
import Loader from '../components/loader'
import { ROOT, HOME, PROFILE, FAQ, HELP, ABOUT } from '../actions/index'


// exported to the index.js
 class App extends Component {
  constructor(props){
    super(props)
   
    console.log(this)
  }
 
  render(){
    switch(this.props.route){
    case HOME || PROFILE || ABOUT || FAQ || HELP: 
      return (
        
          <div className="main-container">
            <Nav/>
            <Header/>
            <div className="container">
            <Loader route= {this.props.route} />
            </div>
            <Footer setRoute={this.props.setRoute} />
          </div>
       
      )
      case ROOT:
        return <h1>Page Loading...</h1>
        default:
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
