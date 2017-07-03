// this is going ot be the main container where the state is defined and everything will cascade from here as props
// 
// imports and requires here
import React, { Component} from "react"
import Nav from "./nav"
import Header from "./header"
import Footer from "./footer"
import Profile from "./profile"
import PulseButton from "./pulse-button"
import { BrowserRouter as Router, Route } from 'react-router-dom'

// exported to the index.js
export class App extends Component {

  constructor(props){
    super(props);

    // initalize state here
    this.state = {
      idToken: 'adf',
      name: 'hello',
      imageUrl: 'ldfjad',
      pin: '0000',
      phoneNumber: '000-000-0000',
      zip: '00000',
      constacts: []
    }

  }
  pulseComponent(){
    return <PulseButton name={this.state.name}/>
  }

  render(){
    return (
      <div>  
        <Router>
          <div>
            <Nav/>
            <Header/>
            <div className="container">
              <Route exact={true} path="/" component={pulseComponent}/>
              <Route path="/profile" component={Profile}/>
            </div>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}


