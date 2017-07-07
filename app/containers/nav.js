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
                <div className="multilevel-offcanvas off-canvas position-left" id="offCanvasLeft" data-off-canvas>
                    <ul className="vertical menu">
                        <li className="avatar-wrapper"><img className="avatar" src="assets/images/avatar-female.png" alt="avatar" width="148" height="148" /></li>
                        <li><a href="#" onClick={() => this.props.setRoute(HOME)}>Home</a></li>
                        <li><a href="#" onClick={() => this.props.setRoute(PROFILE)} >Profile</a></li>
                        <li><a href="#" onClick={() => this.props.setRoute(ABOUT)} >About</a></li>
                        <li><a href="#" onClick={() => this.props.setRoute(FAQ)} >FAQ</a></li>
                        <li><a href="#" onClick={() => this.props.setRoute(HELP)} >Help</a></li>
                    </ul>
                    <ul className="vertical menu">
                        <li><a href="#" data-close="offCanvasLeft">Sign Out</a></li>
                    </ul>
                    <ul className="menu simple social-links">
                        <li><a href="#" target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                        <li><a href="https://github.com/bspille/pulse" target="_blank"><i className="fa fa-github-square" aria-hidden="true"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                
                <div className="off-canvas-content" data-off-canvas-content>
                    <div className="nav-bar shadow">
                        <div className="nav-bar-left">
                            <ul className="menu">
                                {/*<li>
                                    <button className="offcanvas-trigger" type="button" data-open="offCanvasLeft">
                                        <span className="offcanvas-trigger-text hide-for-small-only">Menu</span>
                                        <div className="hamburger">
                                            <span className="line"></span>
                                            <span className="line"></span>
                                            <span className="line"></span>
                                        </div>
                                    </button>
                                </li>*/}
                                <li>
                                    <a href="/" onClick={() => this.props.setRoute(ROOT)} className="nav-bar-logo hide-for-small-only"><img className="logo" src="assets/images/pulse-logo.png" alt='pulse' /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-bar-right">
                            <ul className="menu menu-hover-lines">
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