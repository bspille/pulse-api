import React from 'react';
import { Link } from 'react-router-dom';

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

