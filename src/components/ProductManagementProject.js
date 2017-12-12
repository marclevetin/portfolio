import React from 'react';

const ProductManagementProject = (props) => {
    return (
      <div>
        <li>
          <p>{props.name}</p>
          <p>Problem: {props.problem}</p>
          <p>Solution: {props.solution}</p>
          <p>Team: {props.team}</p>
          <p>Results: {props.results}</p>
        </li>
      </div>
    )
};

export default ProductManagementProject;
