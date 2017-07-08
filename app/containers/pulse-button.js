// TODO: this container needs refactoring to es6 see object destructuring
// TODO: this component need to be tested

import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

class PulseButton extends Component {
    constructor(props){
        super(props)
        this.state = {
            latitude: "",
            longitude: ""
        }
       this.togglePulseButton = this.togglePulseButton.bind(this); 
       this.getLocation = this.getLocation.bind(this);
       this.showPosition = this.showPosition.bind(this);
       this.sendPulse = this.sendPulse.bind(this);
       
       console.log(this)
    }

    sendPulse() {
        console.log(`id_token ${this.props.idToken}`);
        console.log(`latitude ${this.state.latitude}`);
        console.log(`longitude ${this.state.longitude}`);

        axios.post("/pulse/", {
            token: this.props.idToken,
            geoLocation: {
                latitude: this.state.latitude,
                longitude: this.state.longitude
            }
        });
    }
    componentDidMount(){
        let pulseButton = document.getElementById('pulse-button');
        pulseButton.setAttribute("disabled", "");
    }

    getLocation() {
        console.log('getting geolocation')
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } 
        else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    showPosition(position) {
        console.log(position)
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
        this.sendPulse();
    }

    togglePulseButton(){
        let pulseButton = document.getElementById('pulse-button');
        let disabled = pulseButton.hasAttribute('disabled');
        if (disabled){
            pulseButton.removeAttribute("disabled");
        }
        else{
            pulseButton.setAttribute("disabled", "");
        }
    }

    render(){
        return (
            <section>
                <div className="body-info">
                    <h2 id="welcome">Welcome, {this.props.name}</h2>
                    {/*Begin new activity*/}
                    {/*<a className="button app-button" href="#">Begin New Activity</a>*/}
                    {/*<button className="button-hover-default button"><span>Begin new activity</span><i className="fa fa-hourglass-start"></i></button>
                    <br></br>*/}
                    {/*Pulse Button*/}
                    <div id="pulse-button-container" className="row">
                    <button id="pulse-button" className="button button-rounded-hover small-10 medium-4 columns" onClick={this.getLocation} ><img src="assets/images/pulse-button.png" alt="go" /></button>
                    {/*<input id="pulse-button" type="submit" onClick={this.getLocation}/>*/}
                    </div>
                    <div id="pulse-toggle-button" className="switch large">
                        <input className="switch-input" id="largeSwitch" type="checkbox" name="exampleSwitch" onClick={this.togglePulseButton} />
                        <label className="switch-paddle" htmlFor="largeSwitch">
                            <span className="show-for-sr">I like things</span>
                        </label>
                    </div>
                </div>
            </section>
        );
    }
}

// map the redux state to the props object
function mapStateToProps(state){
    return Object.assign({},state)
}

// connect the new props to the container
export default connect(mapStateToProps)(PulseButton)