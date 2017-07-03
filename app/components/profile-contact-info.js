import React, { Component} from "react";

class Main extends Component {
    render() {
        return (
            <div>
                <form>
                    <h2>Contacts</h2>
                    <div id="contacts">
                        <div className="contact-form">
                            <div className="floated-label-wrapper">
                                <label htmlFor="full-name-0">Full name</label>
                                <input type="text" id="full-name-0" name="full name input" placeholder="Full name" />
                            </div>
                            <div className="floated-label-wrapper">
                                <label htmlFor="tel-0">Phone #</label>
                                <input type="tel" id="tel-0" name="tel input" placeholder="Phone number" />
                            </div>
                        </div>
                        <br></br>
                        <div className="contact-form">
                            <div className="floated-label-wrapper">
                                <label htmlFor="full-name-1">Full name</label>
                                <input type="text" id="full-name-1" name="full name input" placeholder="Full name" />
                            </div>
                            <div className="floated-label-wrapper">
                                <label htmlFor="tel-1">Phone #</label>
                                <input type="tel" id="tel-1" name="tel input" placeholder="Phone number" />
                            </div>
                        </div>
                        <br></br>
                        <div className="contact-form">
                            <div className="floated-label-wrapper">
                                <label htmlFor="full-name-2">Full name</label>
                                <input type="text" id="full-name-2" name="full name input" placeholder="Full name" />
                            </div>
                            <div className="floated-label-wrapper">
                                <label htmlFor="tel-2">Phone #</label>
                                <input type="tel" id="tel-2" name="tel input" placeholder="Phone number" />
                            </div>
                        </div>
                        <br></br>
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



  