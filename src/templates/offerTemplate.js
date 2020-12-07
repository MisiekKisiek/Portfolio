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
    contentfulOffers(slug: {eq: $slug}){
      slug
      name
      services{
        json
      }
      description{
        json
      }
      image { 
        fluid{
          ...GatsbyContentfulFluid
        }
        title
      }
    }
    allContentfulOffers{
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


const OfferTemplate = (props) => {

  const { slug, name, description, services, image } = props.data.contentfulOffers

  const options = {
    renderNode: {}
  }

  console.log(props)

  return (<>
    <Head titleSecond={slug} />
    <main className={templateStyles.main}>
      <h1 className={templateStyles.title}>Nasza oferta</h1>
      <div>
        <AsideMenu title={name} query={props.data.allContentfulOffers} path={paths.offer} />
        <article className={templateStyles.article}>
          <span>
            <h2>
              {name}
            </h2>
          </span>
          <p>
            <span>
              {documentToReactComponents(description.json, options)}
            </span>
          </p>
          <Img fluid={image.fluid} />
          <span>Obraz: {image.title}</span>
          <p>
            <h3>Główny zakres usług:</h3>
            <span>
              {documentToReactComponents(services.json, options)}
            </span>
          </p>
        </article>
      </div>

    </main>
  </>);
}

export default OfferTemplate;