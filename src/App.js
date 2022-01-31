import React, {useState} from 'react';
import './App.css';
import Nav from './Components/Layouts/Navbar';
import Home from './Components/Layouts/Home';
import About from './Components/Layouts/About';
import Projects from './Components/Layouts/Projects';
import Footer from './Components/Layouts/Footer';

function App() {
  //Write JavaScript here
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
