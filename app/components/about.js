import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';

export default () => {

    return (
        <section className="four-up-feature">
          <div className="row four-up-feature-header align-center">
            <div className="medium-8 columns">
              <h2 className="app-header-font">Pulse</h2>
              <h5 className="app-font"> A robust web application, allowing a user to notify emergency contacts via text messages with their precise location. Built using MongoDB, Node, Express and React. </h5>
            </div>
          </div>
          <div className="row align-spaced">
            <div className="small-10 medium-3 columns">
              <img className="four-up-feature-image" src="/assets/images/ben.jpg" alt="ben" />
              <h4 className="app-font">Ben Spille</h4>
                <p className="four-up-feature-text app-font"> A few words about Ben
                <br></br><a href="https://github.com/bspille" target="_blank"><i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
                </p>
            </div>
            <div className="small-10 medium-3 columns">
              <img className="four-up-feature-image" src="/assets/images/greg.jpg" alt="greg" />
              <h4 className="app-font">Greg Barone</h4>
                <p className="four-up-feature-text app-font">  A few words about Greg
                <br></br><a href="https://github.com/Baronegreg" target="_blank"><i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
                </p>
            </div>
            <div className="small-10 medium-3 columns">
              <img className="four-up-feature-image" src="/assets/images/chris.jpg" alt="chris" />
              <h4 className="app-font">Chris Callan</h4>
                <p className="four-up-feature-text app-font"> A few words about Chris
                <br></br><a href="https://github.com/ChrisCallanJr" target="_blank"><i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
                </p>
            </div>
            <div className="small-10 medium-3 columns">
              <img className="four-up-feature-image" src="/assets/images/josh.jpg" alt="josh" />
              <h4 className="app-font">Joshua Butler</h4>
                <p className="four-up-feature-text app-font"> A few words about Josh
                <br></br><a href="https://github.com/joshcbutler" target="_blank"><i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
                </p>
            </div>
          </div>
        </section>
    )
}
