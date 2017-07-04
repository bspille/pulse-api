

// imports and requires here
import React, { Component } from "react"
import Nav from "../components/nav"
import Header from "../components/header"
import Footer from "../components/footer"
import Profile from "../components/profile"
import PulseButton from "./pulse-button"
import Splash from './splash'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'


// exported to the index.js
 class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    if (this.props.isSignedIn){
      return (
        <div>  
          <Router>
            <div>
              <Nav/>
              <Header/>
              <div className="container">
                <Route exact={true} path="/" component={PulseButton}/>
                <Route path="/profile" component={Profile}/>
              </div>
            </div>
          </Router>
          <Footer/>
        </div>
      );
    }
    
    return (
      <Splash/>
    )
    
  
  }
}

// map the redux state to the props object
function mapStateToProps({ isSignedIn }){
  return {isSignedIn}
}

// connect the new props to the container
export default connect(mapStateToProps)(App)
