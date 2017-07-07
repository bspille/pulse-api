import React from 'react';
import { ROOT, PROFILE, FAQ, HELP, ABOUT } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/index';

export default (props) => { 
        return (
        <div className="mobile-bottom-bar">
        <a href="#" className="footer-link">
        <a href="#" onClick={() => props.setRoute(ROOT)}><i className="fa fa-sign-out footer-icon"></i><span className='footer-text'>Log out</span></a>
        </a>
        </div>
)}    

// export default Footer;