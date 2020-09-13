import React from 'react';
import './App.css';
import './folder/style.css';
/* eslint-disable */
import zenscroll from 'zenscroll';
/* eslint-enabled */

function App() {
  return (
    <div className="App">
      <h1>Smooth Scroll</h1>

      <div className="main" style={{height:'600px',backgroundColor:'pink'}}id="section1">
        <h2>Section 1</h2>
        <p>Click on the link to see the "smooth" scrolling effect.</p>
        <a href="#section2">Click Me to Smooth Scroll to Section 2 Below</a>
        <p>Note: Remove the scroll-behavior property to remove smooth scrolling.</p>
      </div>

      <div className="main" style={{height:'600px',backgroundColor:'yellow'}} id="section2">
        <h2>Section 2</h2>
        <a href="#section1">Click Me to Smooth Scroll to Section 1 Above</a>
      </div>

    </div>
  );
}

export default App;
