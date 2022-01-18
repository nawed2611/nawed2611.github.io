import React from 'react';
import '../Styles/aboutStyle.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

function About() {
    return (
        <div className="about">
            <div data-aos="fade-up" className="aboutDiv">
                <div data-aos="fade-up" className="aboutText">
                    <h2>I'm currently a sophomore pursuing BTech Computer Science and Engineering</h2>
                </div>
            </div>

            <div data-aos="fade-up" className="langDiv">
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