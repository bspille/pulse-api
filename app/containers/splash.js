import React from 'react'
import { Component } from 'react'
import reactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/index';
import GoogleLogin from '../components/google'
import { Link } from 'react-router-dom';

class splash extends Component {
    constructor(props){
        super(props)
        this.responseGoogle = this.responseGoogle.bind(this);
        

        console.log(this)

        if (this.props.isSignedIn){
            console.log(this)
        }
    
    }
 
    responseGoogle(response){
        console.log(response);
        let profile = response.getBasicProfile();
        this.props.setAccessToken(response.getAuthResponse().id_token);
        this.props.setImageUrl(profile.getImageUrl());
        this.props.setName(profile.getGivenName());
        this.props.getUserData(this.props.idToken);
        console.log(this)
        this.props.setIsSignedIn(response.isSignedIn());
        // need redirect to happen here for enter app
    }
 
    componentDidMount(){
        reactDOM.render(
            <GoogleLogin
                clientId="904019024650-eaprlckr58veqebrbnlssik6uap05rl8.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
            />,
            document.getElementById('googleButton')
        )
    }

     

  
    render(){
        return(
            <div className="homepage-hero-module">
                <div className="video-container">
                    <div className="filter"></div>
                    <video autoPlay loop className="fillWidth">
                        <source src="assets/videos/circles_and_people/circles_and_people.mp4" type="video/mp4" />
                        <source src="assets/videos/circles_and_people/circles_and_people.webm" type="video/webm" />
                    </video>
                    <div id="title-container" className="row align-middle splash-logo">
                        <img id="pulse-logo-waves" className="column animated pulse" src="assets/images/pulse-waves.png" alt="PULSE"/>
                        <img id="pulse-logo-big" className="column" src="assets/images/pulse-logo-nowaves.png" alt=""/>
                    </div>
                    
                    <div id="signin-button-container" className="row">
                        <div className="small-12 columns">
                            <Link to='/user/'>
                                <div id="googleButton"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state){
  return Object.assign({},state)
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch)
}
// replace mapdixpatch to props with {actionCreators}
export default connect(mapStateToProps, mapDispatchToProps)(splash)