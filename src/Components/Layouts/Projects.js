import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/projStyle.css';

//Importing AOS Library
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const baseURL = "https://jsonplaceholder.typicode.com/posts";
const repoURL = "https://api.github.com/users/nawed2611/repos";

function Projects() {

    // const [post, setPost] = React.useState(null);
    // const [repo, setRepo] = React.useState(0);

    // React.useEffect(() => {
    //     axios.get(`${baseURL}/1`).then((res) => {
    //         setPost(res.data);
    //     });
    // }, []);

    // React.useEffect(() => {
    //     axios.get({repoURL}).then((res) => {
    //         setRepo(res.data);
    //     });
    // }, []);

    // function createPost() {
    //     axios
    //     .post(baseURL, {
    //         title: "Hello World!",
    //         body: "This is a new post."
    //     })
    //     .then((response) => {
    //         setPost(response.data);
    //     });
    // }

    // if (!post) return null;
    
    return (
        <div className="projects">

            <div data-aos="fade-up" className="projDiv">
                <h1 data-aos="fade-up" data-aos-delay="200">My Work-Experiences</h1>
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
                        <h3>Pokedex</h3>
                        <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="projDiv">
                <h1 data-aos="fade-up" data-aos-delay="200">My Projects & Open-Source Contributions</h1>
                <div className="projList">
                    <div className="proj">
                        <h3>Weather Web-App</h3>
                        <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    </div>
                    <div className="proj">
                        <h3>Nawed Ali Portfolio</h3>
                        <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    </div>
                    <div className="proj">
                        <h3>Pokedex</h3>
                        <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    </div>
                    <div className="proj">
                        <h3>Pokedex</h3>
                        <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    </div>
                </div>
            </div>

            {/* <div>
                <h1>{post.title}</h1>
                <h4>{post.body}</h4>
                <button onClick={createPost}>Create Post</button>
                <h2>helo {repo}</h2>
            </div> */}
        </div>
    );
}

export default Projects;