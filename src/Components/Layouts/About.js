import React from 'react';
import '../Styles/aboutStyle.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

function About() {
    return (
        <div className="about">
            <div data-aos="fade-up" className="aboutDiv">

                <div data-aos="fade-up" data-aos-delay="400" className="aboutText">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, temporibus obcaecati in natus minus id vel eveniet, tempore quisquam, cupiditate similique.</h2>
                </div>
        
            </div>

            <div data-aos="fade-up" className="langDiv">
                <h1 data-aos="fade-up" className="langText">Languages & Databases</h1>
                <ul data-aos="fade-up" className="langList">
                    <li>C</li>
                    <li>C++</li>
                    <li>HTML5</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>PHP</li>                    
                    <li>MongoDB</li>                    
                </ul>

                <h1 data-aos="fade-up" className="langText">Libraries & Frameworks</h1>
                <ul data-aos="fade-up" className="langList">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>React.js</li>
                    <li>Three.js</li>
                    <li>MongoDB</li>
                    <li>GSAP</li>   
                    <li>AOS</li>
                </ul>

                <h1 data-aos="fade-up"className="langText">Tools</h1>
                <ul data-aos="fade-up"className="langList">
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