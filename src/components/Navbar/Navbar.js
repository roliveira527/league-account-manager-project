import React from "react";
import '../Navbar/Navbar.css'
import logo from '../../assets/lol_logo.png'

import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-item"><Link to="/"><img className="navbar-logo" src={logo} alt="League of Legends logo"/></Link></div>
            <div className="navbar-item"><a className="navbar-title">League Account Manager</a></div>
            <div className="navbar-item"><Link to="/login"><button className="navbar-button">Login / Register</button></Link></div>
        </div>
    )
}

export default Navbar