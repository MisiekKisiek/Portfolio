import React from 'react';
import { graphql, useStaticQuery, useQuery } from 'gatsby';

//Components
import Head from '../components/head';
import OfferMenu from '../components/offerMenu';

//Styles
import offerTemplateStyles from '../styles/offerTemplate.module.scss';

const OfferTemplate = (props) => {

  const { slug, offerName } = props.pathContext


  console.log(props)

  return (<>
    <Head titleSecond={slug} />
    <main className={offerTemplateStyles.main}>
      <h1 className={offerTemplateStyles.title}>{offerName}</h1>
      <div>
        <OfferMenu title={offerName} />
      </div>
    </main>
  </>);
}

export default OfferTemplate;