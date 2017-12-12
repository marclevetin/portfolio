import React, { Component } from 'react';

// components
import SoftwareProject from '../components/SoftwareProject';
import ProductManagementProject from '../components/ProductManagementProject';

// local data
import softwaredata from '../data/softwareprojects';
import pmprojectdata from '../data/pmprojects';

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

    let allPMProducts = pmprojectdata.map(project => {
      return (
        <ProductManagementProject
          key = {project.id}
          name = {project.project}
          company = {project.company}
          problem = {project.problem}
          solution = {project.solution}
          results = {project.results}
          team = {project.team}
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
            {allPMProducts}
          </ul>
      </div>
    )
  }
}

export default Portfolio;
