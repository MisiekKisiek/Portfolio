import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

const SingleProject = (props) => {
  const { name, description, image, slug } = props.node;
  const img = image ? <img src={`${image[0].fluid.src}`} /> : null;
  const descriptionSliced = description?description.description.slice(0, 200):null
  return (<div>
    {img}
    <h3>{name}</h3>
    <p>{descriptionSliced}<TransitionLink
      to={`${slug}`} >...więcej</TransitionLink>
    </p>
  </div>);
}

export default SingleProject;