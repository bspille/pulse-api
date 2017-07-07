import React, { Component } from 'react';
import { HOME, PROFILE, FAQ, HELP, ABOUT } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/index';
import { Link } from 'react-router-dom'
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
                                    <Link to="/user" >
                                        <span className="nav-bar-logo hide-for-small-only">
                                            <img className="logo" src="assets/images/pulse-logo.png" alt='pulse' />
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-bar-right">
                            <ul className="menu menu-hover-lines">
                                <li><Link to="/user" >Home</Link></li>
                                <li><Link to="/user/profile" >Profile</Link></li>
                                <li><Link to="/user/about">About</Link></li>
                                <li><Link to="/user/faq" >FAQ</Link></li>
                                <li><Link to="/user/help" >Help</Link></li>
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