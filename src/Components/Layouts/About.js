import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'
import '../Styles/aboutStyle.css';

function Box() {

    const mesh = useRef(null);
    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    });


    return (
        <>
            <OrbitControls />
            <ambientLight intensity={0.6} />
            <pointLight position={[0, 1, 10]} intensity={0.5} />
            <mesh ref={mesh}>
                <sphereGeometry attach="geometry" args={[2, 10]} />
                <meshStandardMaterial attach="material" color='lightblue' />
            </mesh>
        </>

    )
}

function About() {

    return (
        <div className="about">
            <div data-aos="fade-up" className="aboutDiv">
                <div data-aos="fade-up" className="aboutText">
                    <h1 className="helloText">Hello There!</h1>
                    <div className="aboutList">
                        <div>
                            <p>My name is Nawed and I'm a Full-Stack Creative developer with keen interest in WEBGL animations. I'm a BTech Computer Science Engineering Student, Batch of 2024.</p>
                        </div>

                        <div>
                            <p>
                                I love building beautiful and creative websites through JavaScript technologies.
                                I'm an open-source enthusiast with history of working with different open-source communitites.
                                Recently I've been exploring the Web3.0 Space.</p>
                        </div>
                    </div>
                </div>
                <div>
                     <Canvas colorManagement camera={{ position: [-5, 2, 8], fov: 50 }} >
                        <Box />
                    </Canvas>
                </div>

            </div>

            <div className="skillsContainer">
                <div data-aos="fade-up" className="langDiv">
                    <h1 className="langText">Languages I'm fluent in</h1>
                    <ul className="langList">
                        <li>C,</li>
                        <li>C++,</li>
                        <li>HTML,</li>
                        <li>CSS,</li>
                        <li>JavaScript,</li>
                        <li>TypeScript,</li>
                        <li>PHP,</li>
                        <li>Python</li>
                    </ul>

                    <h1 className="langText">Front End Development</h1>
                    <ul className="langList">
                        <li>React.js,</li>
                        <li>Redux, </li>
                        <li>SASS and CSS Frameworks, </li>
                        <li>Three.js,</li>
                        <li>GSAP,</li>
                        <li>AOS</li>
                    </ul>

                    <h1 className="langText">Back End Development</h1>
                    <ul className="langList">
                        <li>Node.js,</li>
                        <li>Express.js,</li>
                        <li>MongoDB,</li>
                        <li>SQL,</li>
                        <li>APIs,</li>
                        <li>Hedera,</li>
                        <li>Firebase</li>
                    </ul>

                    <h1 className="langText">Tools I know</h1>
                    <ul className="langList">
                        <li>Google Cloud Platform,</li>
                        <li>Adobe Suite,</li>
                        <li>Twilio,</li>
                        <li>Socket.io,</li>
                        <li>NPM,</li>
                        <li>Microsoft Visual Studio Code,</li>
                        <li>Postman</li>
                    </ul>
                </div>

                <div data-aos="fade-up" className="skillsDiv">
                    <h1>Skills</h1>
                    <ul className="skillsList">
                        <li>Web Application Development - 70%</li>
                        <li>HTML CSS & JavaScript - 90%</li>
                        <li>Back-End Development - 80%</li>
                        <li>WebGL Animations (Three.js, GSAP, Framer) - 70%</li>
                        <li>UI/UX Designing - 50%</li>
                    </ul>
                </div>


            </div>

        </div>
    );
}

export default About;