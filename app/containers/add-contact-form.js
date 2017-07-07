import React, { Component} from "react";
import { Field, reduxForm } from 'redux-form'
import * as actionCreators from '../actions/index';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class NewContact extends Component {
    constructor(props){
        super(props)
        console.log(this)
        
    }
    render() {
        return (
            <div>
                <form onSubmit={ handleSubmit(this.props.addContact)} >
                    <input type="hidden" value={this.props.idToken}/>
                    <h2>Contacts</h2>
                    <div id="contacts">
                        <div className="contact-form">
                            <div className="floated-label-wrapper">
                                <label htmlFor="full-name-0">Name</label>
                                <input type="text" id="full-name-0" name="full name input" placeholder="Full name" {...contactName} />
                            </div>
                            <div className="floated-label-wrapper">
                                <label htmlFor="tel-0">Phone #</label>
                                <input type="tel" id="tel-0" name="tel input" placeholder="Phone number" {...phoneNumber}/>
                            </div>
                        </div>
                    </div>
                    {/*<!--Add Contact Button-->*/}
                    <br></br>
                    <a id="add-contact-button" type="button" className="button app-button">
                        <i className="fa fa-user-plus fa-lg" aria-hidden="true"></i> Add Contact
                    </a>
                    {/*<button id="add-contact-button" type="button" className="button-hover-default button"><span>Add contact </span><i className="fa fa-user-plus"></i></button>*/}
                    <br></br>
                    <input id="save-profile-button" className="button expanded" type="submit" value="Save" />
                </form>
            </div>      
        )
    }
} 

function mapStateToProps(state){
  return Object.assign({},state)
}
function mapDispatchToProps(dispatch){
   
    return bindActionCreators(actionCreators, dispatch)
}

NewContact = connect(mapStateToProps, mapDispatchToProps)(NewContact)
export default NewContact