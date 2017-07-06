import React from 'react';
import Profile from './profile'
import PulseButton from '../containers/pulse-button'
import { ROOT, PROFILE } from '../actions/index'
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
    return <h2>Loading...</h2>
}
}