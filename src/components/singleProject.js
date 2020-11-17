import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

const SingleProject = (props) => {
  const { projectName, projectDescription, image } = props.node;
  const img = image ? <img src={`${image[0].fluid.src}`} /> : null;
  const descriptionSliced = projectDescription.projectDescription.slice(0, 200);
  return (<div>
    {img}
    <h3>{projectName}</h3>
    <p>{descriptionSliced}<TransitionLink
      to="/" >...więcej</TransitionLink>
    </p>
  </div>);
}

export default SingleProject;