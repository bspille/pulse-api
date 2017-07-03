import React from 'react';
// import { Link } from 'react-router-dom';

const Nav = () => (
    <nav>
        <div id="wrapper">
        <div className="multilevel-offcanvas off-canvas position-left" id="offCanvasLeft" data-off-canvas>
            <ul className="vertical menu">
                <li className="avatar-wrapper"><img className="avatar" src="assets/images/avatar-female.png" alt="avatar" width="148" height="148" /></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Help</a></li>
            </ul>
            <ul className="vertical menu">
                <li><a href="#" data-close="offCanvasLeft" onClick="signOut();">Sign Out</a></li>
            </ul>
            <ul className="menu simple social-links">
                <li><a href="#" target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                <li><a href="#" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                <li><a href="https://github.com/bspille/pulse" target="_blank"><i className="fa fa-github-square" aria-hidden="true"></i></a></li>
                <li><a href="#" target="_blank"><i className="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
            </ul>
        </div>
        <div className="off-canvas-content" data-off-canvas-content>
            <div className="nav-bar shadow">
                <div className="nav-bar-left">
                    <ul className="menu">
                        <li>
                            <button className="offcanvas-trigger" type="button" data-open="offCanvasLeft">
                                <span className="offcanvas-trigger-text hide-for-small-only">Menu</span>
                                <div className="hamburger">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </div>
                            </button>
                        </li>
                        <li>
                            <a className="nav-bar-logo"><img className="logo" src="assets/images/pulse-logo.png" alt='pulse' /></a>
                        </li>
                    </ul>
                </div>
                <div className="nav-bar-right">
                    <ul className="menu">
                    </ul>
                </div>
            </div>
            </div>
            </div>
    </nav>
);

export default Nav;