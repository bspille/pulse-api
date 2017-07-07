import React from 'react';
import Profile from './profile'
import PulseButton from '../containers/pulse-button'
import { ROOT, PROFILE, FAQ, ABOUT, HELP } from '../actions/index'
import UserInfo from "../containers/add-user-data"
import NewContact from "../containers/add-contact-form";

// add new cases for aditional routes
export default (props) => {
switch(props.route){
    case ROOT:
    return (
        <PulseButton/>
    )
    case PROFILE:
    return (
        <NewContact token={props.token}/>
    )
    default:
    return <h2>"Please wait a monent while I load Master" Loading...</h2>
}
}