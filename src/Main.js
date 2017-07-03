import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class Main extends Component {

    render() {
        return (
            <section>
                <div className="body-info">
                    <h4 id="welcome"></h4>
                    {/*Begin new activity*/}
                    {/*<a className="button app-button" href="#">Begin New Activity</a>*/}
                    <button className="button-hover-default button"><span>Begin new activity</span><i className="fa fa-hourglass-start"></i></button>
                    <br></br>
                        {/*Pulse Button*/}
                        <button id="pulse-button" className="button button-rounded-hover" disabled><img src="./images/radio2.png" alt="go" /></button>
                        <div id="pulse-toggle-button" className="switch large">
                            <input className="switch-input" id="largeSwitch" type="checkbox" name="exampleSwitch" />
                            <label className="switch-paddle" htmlFor="largeSwitch">
                                <span className="show-for-sr">I like things</span>
                            </label>
                        </div>
                        </div>
                    </section>
        );
    }
}

export default connect(null, actions)(Main);