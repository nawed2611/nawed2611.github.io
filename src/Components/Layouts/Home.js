import React from 'react';
import '../Styles/homeStyle.css';
import Nawed from '../../Images/profile.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();


function Home() {
    return (
        <div className="headerDiv">
            <div className="headerText">
                <h1>Hi, I'm NAWED ALI.</h1>
                <div className="animatep">
                    <div className="titleWrapper">
                        <div className="titleId">I'm a MERN Stack Developer</div>
                        <div className="titleId">I'm a Content Writer</div>
                        <div className="titleId">I'm an Open Source Enthusiast</div>
                    </div>
                </div>
                <h5>Based in New Delhi, India</h5>
            </div>

            <div className="profDiv">
                    <img src={Nawed} alt="Nawed" />
            </div>
           
        </div>
    );
}

export default Home;