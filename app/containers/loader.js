import React, { Component } from "react"
import Nav from "../components/nav"
import Header from "../components/header"
import Footer from "../components/footer"
import Profile from "../components/profile"
import PulseButton from "./pulse-button"
import { BrowserRouter as Route } from 'react-router-dom'

export default (props) => {
    return(
        
        <div>
            <Nav/>
            <Header/>
            <div className="container">
                <Route exact={true} path="/" component={PulseButton}/>
                <Route path="/profile" component={Profile}/>
            </div>
            <Footer/>
        </div>
           
            
       
    )
    
    
}