import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class Footer extends Component {

    render() {
        return (
            <section>
                <div className="push"></div>
                <div id="pulse-footer">
                    <p>© Pulse / All Rights Reserved.</p>
                </div>
            </section>
        );
    }
}

export default connect(null, actions)(Footer);