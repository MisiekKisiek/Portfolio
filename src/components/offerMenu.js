import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const OfferMenu = () => {

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
    const { offerName, slug } = item.node;
    return (
      <li>
        <Link to={`/offer/${slug}`}>
          {offerName}
        </Link>
      </li>
    )
  })

  return (
    <ul>
      {menuItems}
    </ul>
  );
}

export default OfferMenu;