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
<<<<<<< HEAD
            <div className = "ContactList">
=======
            <div className ={"ContactList"}>
>>>>>>> 7a4cf8cbdff5433dd074bdacc2c71c3f584d94f3
                <p>Hello World</p>
            </div> 
        )
    }
}
<<<<<<< HEAD
function mapStateToProps(state){
    return Object.assign({},state)
}

export default connect(mapStateToProps)(ContactList)
=======


// map the redux state to the props object
function mapStateToProps(state){
  return Object.assign({},state)
}
// connect the new props to the container
 export default connect(mapStateToProps)(ContactList);
>>>>>>> 7a4cf8cbdff5433dd074bdacc2c71c3f584d94f3
