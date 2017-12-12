import React from 'react';

const ProductManagementProject = (props) => {
  let githubURL = "https://github.com/marclevetin/" + props.github;

    return (
      <div>
        <li>
          <p>{props.name}</p>
          <p><a href={githubURL} target="_blank">Source code</a></p>
          <p><a href={props.live} target="_blank">See it live</a></p>
        </li>
      </div>
    )
};

export default ProductManagementProject;
