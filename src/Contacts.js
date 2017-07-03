import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class Contact extends Component {
    
    render() {
        return (
            <section>
                <h1 className="page-header">Contacts</h1>
            </section>
        );
    }
}

export default connect(null, actions)(Contact);

