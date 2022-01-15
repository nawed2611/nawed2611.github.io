import React from 'react';
import '../Styles/navbarStyle.css';

import {Link} from 'react-scroll';

function Navbar(){
    return(
        <div className="navBar">
            <div className="logo">
                <h3>Home</h3>
            </div>

            <ul className="navLinks">
                <li><Link to="about" spy={true} smooth={true}>About</Link></li>
                <p>,</p>
                <li><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
                <p>,</p>
                <li><Link to="footer" spy={true} smooth={true}>Contact Me</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;

