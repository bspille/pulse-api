// this is going ot be the main container where the state is defined and everything will cascade from here as props
// 
// imports and requires here
import React, { Component} from "react"
import Nav from "../components/nav"
import Header from "../components/header"
import Footer from "../components/footer"
import Profile from "../components/profile"
import PulseButton from "../components/pulse-button"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

// exported to the index.js
class App extends Component {

  constructor(props){
    super(props)
    
  }



  render(){
    return (
      <div>  
        <Router>
          <div>
            <Nav/>
            <Header/>
            <div className="container">
              <Route exact={true} path="/" render={() => (<PulseButton idToken = {this.props.idToken} />)}/>
              <Route path="/profile" component={Profile}/>
            </div>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}
export default connect(mapStateToProps)(App)

