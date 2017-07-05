

// imports and requires here
import React, { Component } from "react"
import { connect } from 'react-redux'
import * as actionCreators from '../actions/index';
import { bindActionCreators } from 'redux'
import Nav from "../components/nav"
import Header from "../components/header"
import Footer from "../components/footer"
// import Profile from "../components/profile"
import PulseButton from "./pulse-button"
import { BrowserRouter as Route } from 'react-router-dom'



// exported to the index.js
 class App extends Component {
  constructor(props){
    super(props)
   
    console.log(this)
  }
  componentWillMount(){
    this.props.getUerData("hello")
  }
  render(){
    return (
      <div>
        <Nav/>
        <Header/>
        <div className="container">
        <PulseButton/>
        
        </div>
        <Footer/>
      </div>
    );
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
