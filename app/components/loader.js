import React from 'react';
import Profile from './profile'
import PulseButton from '../containers/pulse-button'
import ContactInfo from "../containers/profile-contact-info";
import { ROOT, PROFILE, FAQ, ABOUT, HELP } from '../actions/index'
// add new cases for aditional routes
export default (props) => {
switch(props.route){
    case ROOT:
    return (
        <PulseButton/>
    )
    case PROFILE:
    return (
        <Profile/>
    )
    default:
    return <h2>"Please wait a moment while I load Master" Loading...</h2>
}
}