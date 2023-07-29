import React from "react";
import '../Navbar/Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-item"><img className="navbar-logo" src="../../../public/lol_logo.png"/></div>
            <div className="navbar-item"><a className="navbar-title">League Account Manager</a></div>
            <div className="navbar-item"></div>
        </div>
    )
}

export default Navbar