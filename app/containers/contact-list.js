import React, { Component } from "react";
import * as actionCreators from '../actions/index';
import { connect } from 'react-redux'


class ContactList extends Component{
    constructor(props){
        super(props)
        console.log(this)
    }
    
    render(){
        const Contacts = this.props.contacts.map(contact => {
            return (
                <div>
                    
                    <div className="boxes shadow">
                        <div className="ContactListBox">
                            <h4 id="name">{contact.contactName}</h4>
                            <br></br>
                            <h4 id="number">{contact.phoneNumber}</h4>
                        </div>
                    </div>
                </div>
            )
        } 
        )
        return(
            <div className ={"ContactList"}>
                {Contacts}
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
