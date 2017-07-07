import React, { Component} from "react";
import { Field, reduxForm } from 'redux-form'
import * as actionCreators from '../actions/index';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class NewContact extends Component {
    constructor(props){
        super(props)
        console.log(this.props.token)
        
    }
    componentDidMount(){
        let userToken = document.getElementById('idToken');
        userToken.setAttribute("value", this.props.token);
    }
    render() {
        const { fields: {contactName, phoneNumber, token}, handleSubmit, pristine, reset, submitting } = this.props
        return (
            <div>
                
                <form onSubmit={ handleSubmit(this.props.addContact)} >
                    <Field
                        name="token"
                        component="input"
                        type="text"
                        id="idToken"
                        value={this.props.token}
                        
                    />
                    <h2>Contacts</h2>
                    <div id="contacts">
                        <div className="contact-form">
                            <label>Contact Name</label>
                            <div className="floated-label-wrapper">
                                <Field
                                    name="contactName"
                                    component="input"
                                    type="text"
                                    placeholder="Contact Name"
                                    
                                />
                            </div>
                            <label>Contact Phone Number</label>
                            <div className="floated-label-wrapper">
                                <Field
                                    name="phoneNumber"
                                    component="input"
                                    type="text"
                                    placeholder="Phone Number"
                                    
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
NewContact = reduxForm({
    form: 'addNewContact',
    fields: ["contactName", "phoneNumber", "token"]
},)(NewContact)
NewContact = connect(mapStateToProps, mapDispatchToProps)(NewContact)
export default NewContact
