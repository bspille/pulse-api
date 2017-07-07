import React from 'react';
import Profile from './profile'
import PulseButton from '../containers/pulse-button'
import { ROOT, HOME, PROFILE, FAQ, ABOUT, HELP } from '../actions/index'
// add new cases for aditional routes
export default (props) => {
switch(props.route){
    case HOME:
    return (
        <PulseButton/>
    )
    case PROFILE:
    return (
        <Profile/>
    )
    case ROOT:
    return (
        <Splash />
    )
    default:
    return <h2>"Please wait a monent while I load Master" Loading...</h2>
}
}