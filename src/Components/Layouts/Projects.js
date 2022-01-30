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
                <h1>Projects and Internships I've done</h1>
            </div>
        </div>
    );
}

export default Projects;