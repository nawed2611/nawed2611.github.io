import React from 'react';
import '../Styles/aboutStyle.css';

function About() {
    return (
        <div className="about">
            <div data-aos="fade-up" className="aboutDiv">
                <div data-aos="fade-up" data-aos-delay="200" className="aboutText">
                    <h1 className="helloText">Hello There!</h1>
                    <div className="aboutList">

                        <div>
                            <p>My name is Nawed and I'm a MERN Stack Creative developer with keen interest in WEBGL animations. I'm a BTech Computer Science Engineering Student, Batch of 2024.</p>

                        </div>

                        <div>


                            <p>
                                I love building beautiful and creative websites through JavaScript technologies.
                                I'm an open-source enthusiast with history of working with different open-source communitites.
                                Recently I've been planning on getting started with Machine Learning.</p>
                        </div>


                    </div>
                </div>

            </div>

            <div className="skillsContainer">
            <div data-aos="fade-up" className="langDiv">
                <h1 className="langText">Languages & Databases I'm fluent in</h1>
                <ul className="langList">
                    <li>C</li>
                    <li>C++</li>
                    <li>HTML5</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>MongoDB</li>
                </ul>

                <h1 className="langText">Libraries & Frameworks I've worked with</h1>
                <ul className="langList">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>React.js</li>
                    <li>Three.js</li>
                    <li>MongoDB</li>
                    <li>GSAP</li>
                    <li>AOS</li>
                </ul>

                <h1 className="langText">Tools I know</h1>
                <ul className="langList">
                    <li>Adobe Photoshop</li>
                    <li>Adobe Premiere Pro</li>
                    <li>Figma</li>
                    <li>Git</li>
                    <li>Anima</li>
                    <li>Microsoft Visual Studio Code</li>
                    <li>Postman</li>
                </ul>
            </div>

            <div>
                <h1>Skills</h1>
                <ul>
                    <li>Web Application Development</li>
                    <li>HTML CSS & JavaScript</li>
                    <li>BackEnd Development</li>
                    <li>UI/UX Designing</li>
                </ul>
            </div>


            </div>

        </div>
    );
}

export default About;