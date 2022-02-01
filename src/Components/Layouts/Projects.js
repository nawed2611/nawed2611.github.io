import React from 'react';
import '../Styles/projStyle.css';

//Importing AOS Library
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Projects() {
    return (
        <div className="projects">
            <div data-aos="fade-up" className="projDiv">
                <h1 data-aos="fade-up" data-aos-delay="200">Experiences & Projects</h1>
                <div className="projList">
                    <div>
                        <h3>Weather Web-App</h3>
                        <p>lorem ipsum dolor sit amet, consectetur adip</p>
                        <img src="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;