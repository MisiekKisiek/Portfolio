import React from 'react';
import { graphql } from 'gatsby';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Img from "gatsby-image";

//Components
import Head from '../components/head';
import AsideMenu from '../components/asideMenu';

//Styles
import offerTemplateStyles from '../styles/offerTemplate.module.scss';

//Utils
import paths from '../utils/paths';

export const query = graphql`
  query($slug: String!) {
    contentfulOffers(slug: {eq: $slug}){
      slug
      name
      description{
        json
      }
      services{
        json
      }
      image { 
        fluid{
          ...GatsbyContentfulFluid
        }
      }
    }
    allContentfulOffers{
      edges{
        node{
          id
          name
          image { 
            fluid(maxWidth: 800){
              src
            }
          }
          slug
        }
      }
    }
  }
`;


const OfferTemplate = (props) => {

  const { slug, name, description, services, image } = props.data.contentfulOffers

  const options = {
    renderNode: {
      // "embedded-asset-block": (node) => {
      //   const alt = node.data.target.fields.title('en-US');
      //   const url = node.data.target.fields.fields('en-US').url;
      //   return <img url={url} alt={alt}/>
      // }
    }
  }

  return (<>
    <Head titleSecond={slug} />
    <main className={offerTemplateStyles.main}>
      <h1 className={offerTemplateStyles.title}>Nasza oferta</h1>
      <div>
        <AsideMenu title={name} query={props.data.allContentfulOffers} path={paths.offer}/>
        <article className={offerTemplateStyles.article}>
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
          <Img fluid={image.fluid}/>
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