import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h1>Software development</h1>
          <p>Here are some of my side projects.  See more on my Github account.</p>
          <ul>
            <li>My Ukulele Info</li>
            <li>Portsmouth Randomizer</li>
            <li>Hangman</li>
            <li>Psychic</li>
            <li>Card flip</li>
            <li>Ship It Saturday Hackathon</li>
          </ul>

        <h1>Product management</h1>
          <p>This is a sampling of my product management projects.</p>
          <ul>
            <li>Company financials</li>
            <li>Cash flow statement</li>
            <li>Automatic bank reconciliation</li>
            <li>Overhaul support ticket system</li>
            <li>Implement stronger passwords</li>
          </ul>
      </div>
    )
  }
}

export default Portfolio;
