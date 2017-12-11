import React, { Component } from 'react';

// components
import SoftwareProject from '../components/SoftwareProject';

// local data
import softwaredata from '../data/softwareprojects';

class Portfolio extends Component {
  render() {
    let allSoftwareProjects = softwaredata.map(project => {
      return (
        <SoftwareProject
          key = {project.id}
          name = {project.project}
          github = {project.githubpath}
          live = {project.liveurl}
        />
      )
    })

    return (
      <div>
        <h1>Software development</h1>
          <p>Here are some of my side projects.  See more on my Github account.</p>
          <ul>
            {allSoftwareProjects}
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
