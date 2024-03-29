import React from 'react';
import {Helmet} from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import favicon from '../img/favicon.png';


const Head = ({ titleSecond }) => {

  const data = useStaticQuery(graphql`
  query{
      site{
          siteMetadata{
              title
          }
      }
  }
  `)
  const { title } = data.site.siteMetadata;
  return (
    <>
      <Helmet  >
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </meta>
        <title>{`Smarthydro ${titleSecond ? "| " + titleSecond : ""}`}</title>
        <link rel='icon' type='image/png' href={favicon} sizes="16x16" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP" rel="stylesheet"></link>
      </Helmet>
    </>
  );
}

export default Head;