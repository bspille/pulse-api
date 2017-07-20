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
            <div className ={"ContactList"}>
                <p>Hello World</p>
            </div> 
        )
    }
}


// map the redux state to the props object
function mapStateToProps(state){
  return Object.assign({},state)
}
// connect the new props to the container
 export default connect(mapStateToProps)(ContactList);