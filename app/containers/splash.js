import React from 'react'
import { Component } from 'react'
import reactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/index';
import GoogleLogin from '../components/google'
import {store} from '../index'

class splash extends Component {
    constructor(props){
        super(props)
        this.responseGoogle = this.responseGoogle.bind(this);
        
    }

    responseGoogle(response){
        console.log(response);
        let profile = response.getBasicProfile();
        this.props.setIsSignedIn(response.isSignedIn());
        this.props.setAccessToken(response.getAuthResponse().id_token);
        this.props.setImageUrl(profile.getImageUrl());
        this.props.setName(profile.getGivenName());
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
                            <div id="googleButton"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(null, mapDispatchToProps)(splash)