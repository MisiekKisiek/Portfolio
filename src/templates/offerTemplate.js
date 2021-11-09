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

  return (<>
    <Head titleSecond={slug} />
    <main className={templateStyles.main}>
      <h1 className={templateStyles.title}>Nasza oferta</h1>
      <div>
        <AsideMenu
          title={name?name:""}
          query={props.data.allContentfulOffers}
          path={paths.offer}
        />
        <article className={templateStyles.article}>
          <div className={templateStyles.secondTitle}>
            <h2>
              {name?name:""}
            </h2>
          </div>
          <div className={templateStyles.description}>
            {description?documentToReactComponents(description.json, options):null}
          </div>
          <div className={templateStyles.image}>
            {image?<Img fluid={image.fluid} />:null}
            {image?<span>Obraz: {image.title}</span>:null}
          </div>
          <div className={templateStyles.description}>
            {services?<h3>Główny zakres usług:</h3>:null}
            {services?documentToReactComponents(services.json, options):null}
          </div>
        </article>
      </div>

    </main>
  </>);
}

export default OfferTemplate;