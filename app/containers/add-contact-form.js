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
    componentDidMount(){
        this.props.change("token", this.props.idToken)
    }
    render() {
        const { fields: {contactName, phoneNumber, token}, handleSubmit } = this.props
        console.log(contactName)
        return (
            <div>
                <form onSubmit={ handleSubmit(this.props.addContact)} >
                    <Field
                        name="token"
                        component="input"
                        type="hidden"
                        value= "token"
                        {...token}
                    />
                    <h2>Contacts</h2>
                    <div id="contacts">
                        <div className="contact-form">
                            <div className="floated-label-wrapper">
                                <label htmlFor="full-name-0">Name</label>
                                <Field
                                    name="contactName"
                                    component="input"
                                    type="text"
                                    placeholder="Contact Name"
                                    {...contactName}
                                />
                            </div>
                            <div className="floated-label-wrapper">
                                <label htmlFor="tel-0">Phone #</label>
                                <Field
                                    name="phoneNumber"
                                    component="input"
                                    type="text"
                                    placeholder="Phone Number (1234567890)"
                                    {...phoneNumber}
                                />
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
NewContact = reduxForm({
    form: 'addNewContact',
    fields: ["contactName", "phoneNumber", "token"]
},)(NewContact)

export default NewContact
