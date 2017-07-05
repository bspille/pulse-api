import React from 'react';
import { Route, Link } from 'react-router-dom';
import Profile from "../components/profile.js"

export default (props) => (
    <header>
        <div className="container">
            <nav className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/">Pulse</Link>
                    </li>

                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    </header>
);

