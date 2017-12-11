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
        Header<br />
        <Bio />
        <Portfolio />
        <Technologies />
        <Footer />
      </div>
    );
  }
}

export default App;
