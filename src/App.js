import React, { Component } from 'react';

/* eslint-disable */
import zenscroll from 'zenscroll';
/* eslint-enabled */

import './App.css';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar.js';

class App extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    // };
  }

  render() {
    return (
      <div className="App">

        <NavBar />

        <div className="main" id="section1">
          <h2>Section 1</h2>
          <p>Click on the link to see the "smooth" scrolling effect.</p>
          <a href="#section2">Click Me to Smooth Scroll to Section 2 Below</a>
          <p>Note: Remove the scroll-behavior property to remove smooth scrolling.</p>
        </div>

        <div className="main" id="section2">
          <h2>Section 2</h2>
          <a href="#section1">Click Me to Smooth Scroll to Section 1 Above</a>
        </div>

      </div>
    );
  }
}


export default App;
