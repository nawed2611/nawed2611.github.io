import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

            setRepo(res.data);
            console.log(repo);            
        });
     }, []);

    React.useEffect(() => {
         axios.get("https://api.github.com/users/nawed2611").then((res) => {

             setUser(res.data);
             console.log(user);            
         });
      }, []);

    
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

            <div className="githubStats">
                <h1>My Github Stats</h1>
                <h2>Repositories</h2>
                <h3>{repo.length}</h3>
            </div>

            <div data-aos="fade-up" className="projDiv">
                <h1 data-aos="fade-up" data-aos-delay="200">My Projects & Open-Source Contributions</h1>
                <div className="projList">  
                    {repo.map((repo) => {
                        return <div className="proj" data-aos="fade-up">
                            <a href={repo.url} ><h3 key={repo.name}>{repo.name}</h3></a>                        
                            <p key={repo.description}>{repo.description}</p></div>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Projects;