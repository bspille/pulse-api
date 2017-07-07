

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
import { ROOT, PROFILE, FAQ, HELP, ABOUT } from '../actions/index'


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
              <ul className="vertical menu">
                        <li className="avatar-wrapper"><img className="avatar" src="assets/images/avatar-female.png" alt="avatar" width="148" height="148" /></li>
                        <li><a href="#" onClick={() => this.props.setRoute(ROOT)} >Home</a></li>
                        <li><a href="#" onClick={() => this.props.setRoute(PROFILE)} >Profile</a></li>
                        <li><a href="#" onClick={() => this.props.setRoute(ABOUT)} >About</a></li>
                        <li><a href="#" onClick={() => this.props.setRoute(FAQ)} >FAQ</a></li>
                        <li><a href="#" onClick={() => this.props.setRoute(HELP)} >Help</a></li>
                    </ul>
            <div className="container">
            <Loader route= {this.props.route} token= {this.props.idToken}/>
            </div>
            <Footer/>
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
