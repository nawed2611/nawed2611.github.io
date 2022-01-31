import React from 'react';
import '../Styles/aboutStyle.css';

function About() {
    return (
        <div className="about">
            <div data-aos="fade-up" className="aboutDiv">
                <div data-aos="fade-up" data-aos-delay="200" className="aboutText">
                    <h1 className="helloText">HELLO THERE!</h1>
                        <div className="aboutList">
                            <h2>My name is Nawed and I'm a MERN Stack Creative developer with keen interest in WEBGL animations.</h2>

                            <h2>I'm a BTech Computer Science Engineering Student, Batch of 2024.</h2>

                            <h2>I love building beautiful and creative websites through JavaScript technologies.</h2>

                            <h2>I'm an open-source enthusiast with history of working with different open-source communitites.</h2>

                            <h2>Recently I've been planning on getting started with Machine Learning.</h2>  
                        </div>
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