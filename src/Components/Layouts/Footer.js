import React from 'react';
import '../Styles/footerStyle.css';
import Instagram from '../../Images/instagram.svg';
import Github from '../../Images/github.svg';
import LinkedIn from '../../Images/linkedin.svg';


function Footer(){
    return(
        <div className="footer">
            <div className="footerText">
                <h1>Let's Talk if you wanna collaborate on something</h1>
                <h1>Developed by React and Powered by my career</h1>
            </div>
            <div className="footerLine"></div>

            <div className="socials">
            <p>COPYRIGHT © 2021 ALL RIGHTS RESERVED</p> <p>CODED WITH ♡ BY NAWED ALI</p>
            <div className="socialLinks">
                <a href="#" target="_blank">MY RESUME</a>
                <a href="https://www.instagram.com/nawed.alli/" target="_blank"><img src={Instagram}/></a>
                <a href="https://www.linkedin.com/in/nawedali/" target="_blank"><img src={LinkedIn}/></a>
                <a href="https://github.com/nawed2611" target="_blank"><img src={Github}/></a>
            </div>
            </div>

        </div>  
);
}

export default Footer;