import React from 'react';
import '../Styles/projStyle.css';
import Box from './Elements/Box';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei'; 

function Projects(){
    return(
        <div className="projects">
            <div className="projDiv">
                <h1>Projects & Internships I've done</h1>
            </div>
            <Canvas className="canvas">
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity = {0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1}/>
                <Box />
            </Canvas>
        </div>  
);
}

if(document.querySelector('.canvas')){
    let bruh = document.querySelector('.canvas');
    bruh.style.backgroundColor = "grey";
    bruh.style.height = "250px";
};

export default Projects;