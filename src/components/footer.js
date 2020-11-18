import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import TransitionLink from 'gatsby-plugin-transition-link';

//Styles
import footerStyles from '../styles/footer.module.scss';


const Footer = () => {

  const projects = useStaticQuery(graphql`
  {
    allContentfulWebpage{
      edges{
        node{
          projectName
          slug
        }
      }
    }
  }
  `)

  const renderRealizationLinks = () => {
    console.log();
    const links = projects.allContentfulWebpage.edges.map(project => {
      return <TransitionLink to="/">{project}</TransitionLink>
    })
    return links
  }

  return (
    <>
      <footer className={footerStyles.footer}>
        <div>
          <section>
            <div>
              <span>Oferta</span>
              {renderRealizationLinks()}
            </div>
            <div>
              <span>Realizacje</span>
            </div>
          </section>
          <section>
            <address>
              <span>SmartHydro Sp. z o.o.</span>
              <span>31-331 Kraków, ul. Mehoffera 10/2</span>
              <span>tel: +48 604 156 103</span>
              <span>e-mail: smarthydro@smarthydro.pl</span>
              <span>NIP: 123654987</span>
            </address>
          </section>
          <section></section>
        </div>
      </footer>
    </>
  );
}

export default Footer;