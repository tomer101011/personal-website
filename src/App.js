import React, { Component } from 'react';

/* eslint-disable */
import zenscroll from 'zenscroll';
/* eslint-enabled */

import './App.css';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar.js';
import Intro from './components/Intro.js';
import Portfolio from './components/Portfolio.js';
import Resume from './components/Resume.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

class App extends Component {

  render() {
    return (
      <div className="App">

        <NavBar />
        <Intro />
        <Portfolio />
        <Resume />
        <About />
        <Contact />
        <Footer/>
        
      </div>
    );
  }
}


export default App;
