import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

//Styles
import offerStyles from '../styles/offer.module.scss';

const OfferMenu = ({ title }) => {

  const offers = useStaticQuery(graphql`
  {
    allContentfulOffers{
      edges{
        node{
          id
          offerName
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
  `)

  const menuItems = offers.allContentfulOffers.edges.map(item => {
    const { offerName, slug, id } = item.node;
    return (
      <li key={id} className={title && title === offerName ? offerStyles.activeListItem : ""}>
        <Link to={`/offer/${slug}`}>
          {offerName}
        </Link>
      </li>
    )
  })

  return (
    <nav className={offerStyles.menu}>
      <ul>
        {menuItems}
      </ul>
    </nav>
  );
}

export default OfferMenu;