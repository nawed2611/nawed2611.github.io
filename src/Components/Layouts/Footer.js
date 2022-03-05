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
                <div className="formDiv">
                    <h1>Let's Talk if you wanna collaborate on something</h1>
                    <h1>Contact me here -</h1>
                </div>
                <div className="formDiv">
                    <form onSubmit={sendEmail}>
                        <label>
                            <h4>Name</h4>
                            <input type="text" name="name" />
                        </label>

                        <label>
                            <h4>Email ID</h4>
                            <input type="email" name="email" />
                        </label>

                        <label>
                            <h4>Description</h4>
                            <input type="text" name="description" placeholder="Any Feedback helps:)" />
                        </label>

                        <input id="submit" type="submit" value="Send" />
                    </form>
                </div>


            </div>
            <div className="footerLine"></div>

            <div className="socials">
                <p>COPYRIGHT © 2021 ALL RIGHTS RESERVED</p>
                <p>CODED WITH ♡ BY NAWED ALI</p>
                <div className="socialLinks">
                    <a href="https://drive.google.com/file/d/1Pg3Zl_NQ6mCPhb2uyH_LtzlRBivWvytZ/view?usp=sharing" target="_blank" rel="noreferrer">MY RESUME</a>
                    <a href="https://www.instagram.com/nawed.alli/" target="_blank" rel="noreferrer"><img src={Instagram} alt="Instagram"/></a>
                    <a href="https://www.linkedin.com/in/nawedali/" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="LinkedIn"/></a>
                    <a href="https://github.com/nawed2611" target="_blank" rel="noreferrer"><img src={Github} alt="GitHub"/></a>
                </div>
            </div>

        </div>
    );
}

export default Footer;