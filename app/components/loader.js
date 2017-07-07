import React from 'react';
import Contacts from './contacts'
import PulseButton from '../containers/pulse-button'

import { ROOT, HOME, CONTACTS, FAQ, ABOUT, HELP } from '../actions/index'

// add new cases for aditional routes
export default (props) => {
switch(props.route){
    case HOME:
    return (
        <PulseButton/>
    )
    case CONTACTS:
    return (
        <NewContact/>
    )
    case ROOT:
    return (
        <Splash />
    )
    default:
    return <h2>"Please wait a monent while I load Master" Loading...</h2>
}
}