import React from 'react';
import '../Styles/homeStyle.css';
import Nawed from '../../Images/nawed.jpg';
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
                        <div className="titleId">MERN Stack Developer</div>
                        <div className="titleId">Content Writer</div>
                        <div className="titleId">Open Source Developer</div>
                    </div>
                </div>
                <h5>Based in New Delhi, India</h5>
            </div>
            <div className="profDiv">
                    <img src={Nawed} />
            </div>
           
        </div>
    );
}

export default Home;