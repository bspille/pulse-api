import React, { Component } from "react";
import * as actionCreators from '../actions/index';
import { connect } from 'react-redux'


class ContactList extends Component{
    constructor(props){
        super(props)
        console.log(this)
    }
    
    render(){
        return(
            <div className = "ContactList">
                <p>Hello World</p>
            </div> 
        )
    }
}
function mapStateToProps(state){
    return Object.assign({},state)
}

export default connect(mapStateToProps)(ContactList)