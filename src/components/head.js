import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';



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
        <title>{`${title} ${titleSecond ? "| " + titleSecond : ""}`}</title>
        <link rel='icon' type='image/png' href="favicon.ico" sizes="16x16" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP" rel="stylesheet"></link>
      </Helmet>
    </>
  );
}

export default Head;