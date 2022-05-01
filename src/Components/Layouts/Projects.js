import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

import '../Styles/projStyle.css';

//Importing AOS Library
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Projects() {

    const [repo, setRepo] = useState(0);
    const [user, setUser] = useState(0);

    useEffect(() => {
        axios.get('https://api.github.com/users/nawed2611/repos').then((res) => {

            if (res.status === 200 && res != null) {
                setRepo(res.data);
                console.log(repo);

            }
            else {
                console.error("Problem Occured");
            }
        }).catch(error => {
            console.error(error);
        });
    }, []);

    useEffect(() => {
        axios.get("https://api.github.com/users/nawed2611").then((res) => {

            if (res.status === 200 && res != null) {
                setUser(res.data);


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
        setWidth(- repoContainer.current.scrollWidth + repoContainer.current.offsetWidth);
    }, []);

    return (
        <div className="projects">

            <div data-aos="fade-up" className="projDiv">
                <h1 data-aos="fade-up" data-aos-delay="200">My Education & Work-Experiences</h1>
                <div className="projList">
                    <div className="proj" data-aos="fade-up" data-aos-delay="250">
                        <h2>BTech Computer Science and Engineering</h2>
                        <h3>Maharaja Agrasen Institute of Technology - GGSIPU</h3>
                    </div>
                    <div className="proj" data-aos="fade-up" data-aos-delay="300">
                        <h2>Content Writer and Mentor</h2>
                        <h3>GirlScript Summer of Code'22</h3>

                    </div>
                    <div className="proj" data-aos="fade-up" data-aos-delay="350">
                        <h2>Open-source Developer</h2>
                        <h3>Script Winter of Code 2.0 </h3>
                    </div>
                    <div className="proj" data-aos="fade-up" data-aos-delay="400">
                        <h2>Content Developer</h2>
                        <h3>1Script Health - <strong>Internship</strong></h3>
                    </div>
                </div>
            </div>

            <motion.div className="githubStats">
                <div className="repoCount">
                    <h1>My GitHub Stats</h1>
                    <h2>Repositories</h2>
                    <h3>{repo.length}</h3>
                </div>

                <motion.div ref={repoContainer} whileTap={{ cursor: "grabbing" }} className="repoContainer">
                    <motion.div drag="x" dragConstraints={{ right: 0, left: -8030 }} className="innerContainer">
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
                    <div className="proj" data-aos="fade-up" data-aos-delay="400">
                        <h2>Bill Saver</h2>
                        <p>Bill Saver is an app, built with React and powered by Twilio and Hedera’s Test Nest Interface, that allows you to organize your bills and stores it on the blockchain</p>
                    </div>
                    <div className="proj" data-aos="fade-up" data-aos-delay="400">
                        <h2>News Centre</h2>
                        <p>News App built with React and News API using Axios</p>
                    </div>
                    <div className="proj" data-aos="fade-up" data-aos-delay="400">
                        <h2>Heartly Heaven</h2>
                        <p>Heartly Heaven is a chat application with a built-in date maker feature and games</p>
                    </div>
                    <div className="proj" data-aos="fade-up" data-aos-delay="400">
                        <h2>Real Time Chat App</h2>
                        <p>A Chat Application built using Node.js and Socket.io</p>
                    </div>
                    <div className="proj" data-aos="fade-up" data-aos-delay="400">
                        <h2>Helping Hand</h2>
                        <p>Helping Hand is a Flask Web App that allows Restaurants to add their leftover dishes for the day</p>
                    </div>
                    <div className="proj" data-aos="fade-up" data-aos-delay="400">
                        <h2>Hackstation</h2>
                        <p>It is a web-app that help you track your coding status, showing it in form of dashboard. It also provides reminders to users for various competitive coding contests</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;