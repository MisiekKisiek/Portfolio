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
    renderNode: {},
  }

  return (<>
    <Head titleSecond={slug} />
    <main className={templateStyles.main}>
      <h1 className={templateStyles.title}>Nasza oferta</h1>
      <div>
        <AsideMenu
          title={name}
          query={props.data.allContentfulOffers}
          path={paths.offer}
        />
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
            {image || <Img fluid={image.fluid} />}
            <span>Obraz: {image || image.title}</span>
          </div>
          <div className={templateStyles.description}>
            <h3>Główny zakres usług:</h3>
            {documentToReactComponents(services.json, options)}
          </div>
        </article>
      </div>

    </main>
  </>);
}

export default OfferTemplate;