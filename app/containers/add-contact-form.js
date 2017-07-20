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
required = value => value ? undefined : 'Required'
maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
maxLength15 = maxLength(15)

name = value => 
  value ? undefined : 'Required'

phone = value =>
  value && !/^D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/i.test(value) ?
  'Invalid Phone Number' : undefined

    renderField ({ input, label, type, meta: { touched, error, warning } }){
    <div>
        <label>{label}</label>
        <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
    }
    componentDidMount(){
        this.props.change("token", this.props.idToken)
    }
    render() {
        const { fields: {contactName, phoneNumber, token}, handleSubmit, pristine, reset, submitting } = this.props
        console.log(contactName)
return (
    <form onSubmit={handleSubmit}>
      <Field name="contactname" type="text"
        component={renderField} label="Contact Name"
        validate={[ this.required, this.maxLength15, this.name ]}
      />
      <Field name="phone" type="phone"
        component={renderField} label="Phone Number"
        validate={this.phone}
      />
      <div>
        <button type="submit" disabled={this.submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
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
