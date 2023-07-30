import React from "react";
import '../Navbar/Navbar.css'
import logo from '../../assets/lol_logo.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-item"><img className="navbar-logo" src={logo} alt="League of Legends logo"/></div>
            <div className="navbar-item"><a className="navbar-title">League Account Manager</a></div>
            <div className="navbar-item"><button className="navbar-button">Login / Register</button></div>
        </div>
    )
}

export default Navbar