import React, { Component } from 'react';
import { HOME, PROFILE, FAQ, HELP, ABOUT } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/index';

// import { Link } from 'react-router-dom';
class Nav extends Component {
    constructor(props){
        super(props)
        
        console.log(this)
    }


    render(){
        return (
            <nav>
                <div id="wrapper">
                <div className="off-canvas-content" data-off-canvas-content>
                    <div className="nav-bar shadow">
                        <div className="nav-bar-left">
                            <ul className="menu"> 
                                <li>
                                    <a href="/" onClick={() => this.props.setRoute(ROOT)} className="nav-bar-logo hide-for-small-only"><img className="logo" src="assets/images/pulse-logo.png" alt='pulse' /></a>
                                </li>
                            </ul>
                        </div>
                        <div id="menu-links" className="row">
                            <ul className="menu menu-hover-lines small-12 columns">
                                <li><a href="/" onClick={() => this.props.setRoute(ROOT)}>Home</a></li>
                                <li><a href="#" onClick={() => this.props.setRoute(PROFILE)} >Profile</a></li>
                                <li><a href="#" onClick={() => this.props.setRoute(ABOUT)} >About</a></li>
                                <li><a href="#" onClick={() => this.props.setRoute(FAQ)} >FAQ</a></li>
                                <li><a href="#" onClick={() => this.props.setRoute(HELP)} >Help</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state){
  return Object.assign({},state)
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch)
}
// replace mapdixpatch to props with {actionCreators}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)