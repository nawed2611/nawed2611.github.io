import React from 'react';
import '../Styles/homeStyle.css';
import Nawed from '../../Images/nawed.jpg';


function Home() {
    return (
        <div className="headerDiv">
            <div className="headerText">
                <h1>Hi, I'm Nawed Ali</h1>
                <h5>MERN Stack Developer Based in New Delhi, India</h5>
                
            </div>
            <div className="profDiv">
                    <img src={Nawed} />
            </div>
           
        </div>
    );
}

export default Home;