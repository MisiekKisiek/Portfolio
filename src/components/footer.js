import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import TransitionLink from 'gatsby-plugin-transition-link';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

//Utils
import gsap from 'gsap';

//Styles
import footerStyles from '../styles/footer.module.scss';

//Context
import AppContext from '../context/App.context';


const Footer = ({ curtine }) => {

  const {
    handleMenu,
  } = useContext(AppContext);

  const TRANSITION_LENGTH = 1

  const exitTransition = {
    length: TRANSITION_LENGTH,
    trigger: async (e) => {
      await gsap.to(curtine.current, 0.8, { autoAlpha: 1, display: 'block' });
      handleMenu(e);
    },
  }

  const entryTransition = {
    delay: TRANSITION_LENGTH,
    trigger: () => {
      gsap.to(curtine.current, 1, { autoAlpha: 0, display: 'none' });
    },
  }

  const projectsAndOffers = useStaticQuery(graphql`
  {
    allContentfulProjects{
      edges{
        node{
          id
          shortName
          slug
        }
      }
    }
    allContentfulOffers{
      edges{
        node{
          id
          offerName
          slug
        }
      }
    }
  }
  `)


  const renderRealizationLinks = () => {
    const links = projectsAndOffers.allContentfulProjects.edges.map(project => {
      const { slug, shortName, id } = project.node;
      return <TransitionLink
        key={id}
        to={`/projects/${slug}`}
        exit={exitTransition}
        entry={entryTransition}
      >
        {shortName}
      </TransitionLink>
    })
    return links
  }

  const renderOfferLinks = () => {
    const links = projectsAndOffers.allContentfulOffers.edges.map(offer => {
      const { slug, id, offerName } = offer.node;
      return <TransitionLink
        key={id}
        to={`/offer/${slug}`}
        exit={exitTransition}
        entry={entryTransition}
      >
        {offerName}
      </TransitionLink>
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
              {renderOfferLinks()}
            </div>
            <div>
              <span>Realizacje</span>
              {renderRealizationLinks()}
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
          <section>
            <span>Designed with <FontAwesomeIcon icon={faHeart} /> by:</span>
            <a href="/">MisiekKisiek</a>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;