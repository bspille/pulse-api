import React, { Component} from "react";
import { Field, reduxForm } from 'redux-form'
import * as actionCreators from '../actions/index';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class NewContact extends Component {
    constructor(props){
        super(props)
        this.renderField = this.renderField.bind(this);
        console.log(this)
        
     
    }
    renderField ({ input, label, type, meta: { touched, error, warning } }){
    return(
    <div>
        <label>{label}</label>
        <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>)
    }
    componentDidMount(){
        this.props.change("token", this.props.idToken)
    }
    render() {
        const { addContact, handleSubmit, pristine, reset, submitting } = this.props
    return (
    <form onSubmit={handleSubmit(addContact)}>
      <Field name="contactName" 
      type="text"
      component={this.renderField} 
      label="Contact Name"
      />
      <Field name="phoneNumber" 
      type="phone"
      component={this.renderField} 
      label="Phone Number"
      />
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
    )
    }
}
function validate({ contactName, phoneNumber }){
    const errors = {};
    
    //Validate the inputs from 'values'
    if (!contactName){
        errors.contactName = "Required";
    }
    if (!phoneNumber || !/^D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/i.test(phoneNumber) ){
        errors.phoneNumber = "Invalid Phone Number";
    }

    //If errors is empty, the form is fine to submit
    //If errors has *any* properties, redux form assumes form us invalid
    return errors;
}

function mapStateToProps(state){
  return Object.assign({},state)
}
function mapDispatchToProps(dispatch){
   
    return bindActionCreators(actionCreators, dispatch)
}

export default reduxForm({
    validate,
    form: 'addNewContact'
},)(connect(mapStateToProps, mapDispatchToProps)(NewContact))

