import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from "gatsby-image";

//Components
import Head from '../components/head';
import AsideMenu from '../components/asideMenu';

//Styles
import templateStyles from '../styles/template.module.scss';

//Utils
import paths from '../utils/paths';

export const query = graphql`
  query($slug: String!) {
    contentfulProjects(slug: {eq: $slug}){
      slug
      name
      description{
        json
      }
      image { 
        title
        fluid{
          ...GatsbyContentfulFluid
        }
      }
    }
    allContentfulProjects{
      edges{
        node{
          id
          name
          slug
        }
      }
    }
  }
`;

const Project = (props) => {

  const { slug, name, description, image } = props.data.contentfulProjects;

  const options = {
    renderNode: {}
  }

  return (
    <>
      <Head titleSecond={slug} />
      <main className={templateStyles.main}>
        <h1 className={templateStyles.title}>Realizacje</h1>
        <div>
          <AsideMenu title={name} query={props.data.allContentfulProjects} path={paths.project} />
          <article className={templateStyles.article}>
            <div className={templateStyles.secondTitle}>
              <h2>
                {name}
              </h2>
            </div>
            <div className={templateStyles.description}>
              {documentToReactComponents(description.json, options)}
            </div>
            <div className={templateStyles.image}>
            {image?<Img fluid={image.fluid} />:null}
              <span>Obraz: {image?image.title:""}</span>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}

export default Project;