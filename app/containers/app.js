

// imports and requires here
import React, { Component } from "react"
import { connect } from 'react-redux'
import Loader from './loader'
import Splash from './splash'

import  {BrowserRouter  as Router, Route} from 'react-router-dom'

// exported to the index.js
 class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Router>
        <div>
          <Route exact={true} path="/" render={()=>{
            if (this.props.isSignedIn){
              return <Loader/>
            }
            else{
              return <Splash/>
            }
          }}/>
          <Route path="/signedIn" component= {Loader}/>
        </div>
      </Router>
    )
  }
}

// map the redux state to the props object
function mapStateToProps({ isSignedIn }){
  return {isSignedIn}
}

// connect the new props to the container
export default connect(mapStateToProps)(App)
