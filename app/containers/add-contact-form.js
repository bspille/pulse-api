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
                    <div id="contacts-header" className="row">
                    <h2 className="app-header-font">Contacts</h2>
                    </div>
                    <div id="contacts" className="row">
                        <div className="small-11 medium-8 large-6 columns"> 
                            <div className="contact-form">
                                <div className="floated-label-wrapper">
                                    <label htmlFor="full-name-0">Name</label>
                                    <Field
                                    name="contactName input"
                                    component="input"
                                    type="text"
                                    placeholder="Contact Name"
                                    {...contactName}
                                    />
                                </div>
                                <div className="floated-label-wrapper">
                                    <label htmlFor="tel-0">Phone #</label>
                                    <Field
                                        name="phoneNumber input"
                                        component="input"
                                        type="tel"
                                        placeholder="Phone Number (1234567890)"
                                        {...phoneNumber}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!--Add Contact Button-->*/}
                    <br></br>
                    {/*<div id="add-contact-button" className="row">
                        <button type="button" className="button button-hover-default small-11 medium-4 large-2 columns app-font">
                            <span>Add Contact </span><i className="fa fa-user-plus fa-lg" aria-hidden="true"></i>
                        </button>
                    </div>
                    <br></br>*/}
                    <div id="save-profile-container" className="row">
                        <button className="button button-hover-default small-11 medium-4 large-2 columns app-font" type="submit" value="Save">
                            <span>Save </span><i className="fa fa-floppy-o fa-lg" aria-hidden="true"></i>
                        </button>
                    </div>
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
