import React from 'react';
import emailjs from '@emailjs/browser';
import '../Styles/footerStyle.css';

//Importing SVG elements
import Instagram from '../../Images/instagram.svg';
import Github from '../../Images/github.svg';
import LinkedIn from '../../Images/linkedin.svg';



function Footer() {

    function sendEmail(e) {

        e.preventDefault();

        emailjs.sendForm('service_r0q4rt7', 'template_p3cwgaf', e.target, 'user_UotiSKXhrIbrot5hLTjYs')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
    };

    return (
        <div className="footer">

            <div className="footerText">
                <h1>Let's Talk if you wanna collaborate on something</h1>
                <h1>Developed by React and Powered by my career
                    <form onSubmit={sendEmail}>
                        <label>
                            Name
                            <input type="text" name="name" />
                        </label>

                        <label>
                            Email ID
                            <input type="email" name="email" />
                        </label>

                        <label>
                            Description
                            <input type="text" name="description" placeholder="Any Feedback helps:)" />
                        </label>

                        <input type="submit" value="Send" />
                    </form>
                </h1>


            </div>
            <div className="footerLine"></div>

            <div className="socials">
                <p>COPYRIGHT © 2021 ALL RIGHTS RESERVED</p>
                <p>CODED WITH ♡ BY NAWED ALI</p>
                <div className="socialLinks">
                    <a href="#" target="_blank">MY RESUME</a>
                    <a href="https://www.instagram.com/nawed.alli/" target="_blank"><img src={Instagram} /></a>
                    <a href="https://www.linkedin.com/in/nawedali/" target="_blank"><img src={LinkedIn} /></a>
                    <a href="https://github.com/nawed2611" target="_blank"><img src={Github} /></a>
                </div>
            </div>

        </div>
    );
}

export default Footer;