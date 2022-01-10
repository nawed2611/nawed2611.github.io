import React, {useState} from 'react';
import '../Styles/navbarStyle.css';

function Navbar(){
    return(
        <div className="navBar">
            <div className="logo">
                <h3>Home</h3>
            </div>

            <ul className="navLinks">
                <li className="aboutLink">About</li>
                <p>,</p>
                <li className="projectLink">Projects</li>
            </ul>
        </div>
    );
}

export default Navbar;
