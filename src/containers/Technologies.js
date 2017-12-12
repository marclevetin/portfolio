import React, { Component } from 'react';
import Technology from '../components/Technology'

// local data
import technologiesdata from '../data/tech'

class Technologies extends Component {


  render() {
    let allTech = technologiesdata.map(tech => {
      return (
        <Technology
          key = {tech.id}
          name = {tech.tech}
        />
      )
    })
    return (
      <div>
        <h1>Tech I know</h1>
        <ul>
          {allTech}
        </ul>
      </div>
    )
  }
}

export default Technologies;
