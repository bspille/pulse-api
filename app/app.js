// this is going ot be the main container where the state is defined and everything will cascade from here as props
// imports and requires here
import React, { Component} from "react"
import reactDOM from "react-dom"
import Nav from "./components/nav"
import Header from "./components/header"
import Footer from "./components/footer"
import Profile from "./components/profile"
import PulseButton from "./components/pulse-button"
import { BrowserRouter as Router, Route } from 'react-router-dom';


class Main extends Component {

  constructor(props){
    super(props);
  }

  render(){
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
}
reactDOM.render(<Main/>
,
  document.getElementById('root'));

