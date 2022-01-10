import React from 'react';
import '../Styles/aboutStyle.css';

function About() {
    return (
        <div className="about">
            <div className="aboutDiv">
                <div className="aboutText">
                    <h2>I'm a MERN-Stack Developer and a sophomore Computer Science Engineering student, from New Delhi, India. I like to learn new technology and stay up-to date with the technology advancements and trends.</h2>
                </div>
            </div>

            <div className="langDiv">
                <h1 className="langText">Languages I'm fluent with</h1>
                <ul className="langList">
                    <li>C</li>
                    <li>C++</li>
                    <li>HTML5</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>PHP</li>                    
                    <li>MongoDB</li>                    
                </ul>

                <h1 className="langText">Libraries and Frameworks I know</h1>
                <ul className="langList">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>React.js</li>
                    <li>MongoDB</li>
                    <li>Three.js</li>
                    <li>GSAP</li>                  
                </ul>

                <h1 className="langText">Technologies and Softwares I know</h1>
                <ul className="langList">
                    <li>Adobe Photoshop</li>
                    <li>Adobe Premiere Pro</li>
                    <li>Figma</li>
                    <li>Git</li>
                    <li>Anima</li>                  
                    <li>Microsoft Visual Studio Code</li>
                </ul>

            </div>
            
        </div>
    );
}

export default About;