import React, { Component } from 'react';
import './App.css';
// containers
import Portfolio from './containers/Portfolio';
import Bio from './containers/Bio';
import Technologies from './containers/Technologies';

// components
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Marc Levetin</h1>
        <h2>I'm a full stack web developer.  Thanks for visiting.</h2>
        <Bio />
        <Portfolio />
        <Technologies />
        <Footer />
      </div>
    );
  }
}

export default App;
