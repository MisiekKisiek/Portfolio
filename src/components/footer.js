import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import TransitionLink from 'gatsby-plugin-transition-link';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCross } from '@fortawesome/free-solid-svg-icons';

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

  const data = useStaticQuery(graphql`
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
          name
          slug
        }
      }
    }
    site{
      siteMetadata{
          title
          author
          email
          tel
          adress
          nip
      }
    }
  }
  `)


  const renderRealizationLinks = () => {
    const links = data.allContentfulProjects.edges.map(project => {
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
    const links = data.allContentfulOffers.edges.map(offer => {
      const { slug, id, name } = offer.node;
      return <TransitionLink
        key={id}
        to={`/offer/${slug}`}
        exit={exitTransition}
        entry={entryTransition}
      >
        {name}
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
              <span>{data.site.siteMetadata.title}</span>
              <span>{data.site.siteMetadata.adress}</span>
              <span>tel: {data.site.siteMetadata.tel}</span>
              <span>e-mail: {data.site.siteMetadata.email}</span>
              <span>NIP: {data.site.siteMetadata.nip}</span>
            </address>
          </section>
          <section>
            <span>Designed with <FontAwesomeIcon icon={faCross} /> and <FontAwesomeIcon icon={faHeart} />by:</span>
            <a href="/">{data.site.siteMetadata.author}</a>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;