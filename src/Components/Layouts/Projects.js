import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

import '../Styles/projStyle.css';

//Importing AOS Library
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Projects() {

    // const [post, setPost] = React.useState(null);
    const [repo, setRepo] = useState(0);
    const [user, setUser] = useState(0);

    useEffect(() => {
        axios.get('https://api.github.com/users/nawed2611/repos').then((res) => {

            if (res.status === 200 && res != null) {
                setRepo(res.data);
                console.log(repo);
            }
            else {
                console.log("roblem Occured");
            }
        }).catch(error => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        axios.get("https://api.github.com/users/nawed2611").then((res) => {

            if (res.status === 200 && res != null) {
                setUser(res.data);
                console.log(user);
            }
            else {
                console.log("Problem Occured");
            }
        }).catch(error => {
            console.log(error);
        });
    }, []);

    const [width, setWidth] = useState(0);
    const repoContainer = useRef();

    useEffect(() => {
        setWidth(repoContainer.current.scrollWidth - repoContainer.current.offsetWidth);
    }, []);

    return (
        <div className="projects">

            <div data-aos="fade-up" className="projDiv">
                <h1 data-aos="fade-up" data-aos-delay="200">My Education & Work-Experiences</h1>
                <div className="projList">
                    <div className="proj" data-aos="fade-up" data-aos-delay="250">
                        <h3>Weather Web-App</h3>
                        <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    </div>
                    <div className="proj" data-aos="fade-up" data-aos-delay="300">
                        <h3>Nawed Ali Portfolio</h3>
                        <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    </div>
                    <div className="proj" data-aos="fade-up" data-aos-delay="350">
                        <h3>Pokedex</h3>
                        <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    </div>
                    <div className="proj" data-aos="fade-up" data-aos-delay="400">
                        <h2>Content Writer</h2>
                        <h3>Siachen Studios - <strong>Freelance</strong></h3>
                        <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    </div>
                </div>
            </div>

            <motion.div animate={{}} className="githubStats">
                <div className="repoCount">
                    <h1>My Github Stats</h1>
                    <h2>Repositories</h2>
                    <h3>{repo.length}</h3>
                </div>

                <motion.div ref={repoContainer} whileTap={{ cursor: "grabbing" }} className="repoContainer">
                    <motion.div drag="x" dragConstraints={{ right: 0, left: -1*width }} className="innerContainer">
                        {Array.isArray(repo) && repo.map((repo) => {
                            return <motion.div className="item " data-aos="fade-up">
                                <a href={repo.html_url} ><h3 key={repo.name}>{repo.name}</h3></a>
                                <p key={repo.description}>{repo.description}</p></motion.div>;
                        })}
                    </motion.div>
                </motion.div>
            </motion.div>

            <div data-aos="fade-up" className="projDiv">
                <h1 data-aos="fade-up" data-aos-delay="200">My Projects & Open-Source Contributions</h1>
                <div className="projList">

                </div>
            </div>
        </div>
    );
}

export default Projects;