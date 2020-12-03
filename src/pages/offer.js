import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

//Components
import Head from '../components/head';
import OfferMenu from '../components/offerMenu';

//Styles
import offerStyles from '../styles/offer.module.scss';

const Offer = (props) => {

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
        {offerName}
      </li>
    )
  })

  return (
    <>
      <Head titleSecond="oferta" />
      <main className={offerStyles.main}>
        <h1 className={offerStyles.title}>Nasza oferta</h1>
        <div>
          <nav className={offerStyles.menu}>
            <OfferMenu />
          </nav>
          <section className={offerStyles.section}>
            <div>
              <h2>
                Zakres możliwości
              </h2>
            </div>
            <p>
              <span>
                Oferujemy szeroki zakres usług poczynając od analiz konstrukcyjnych oraz środowiskowych, poprzez pomoc prawną m.in. dla legalizacji samowoli budowlanych, do szerokiego zakresu realizacji z dziedziny budownictwa hydrotechnicznego.
              </span>
            </p>
            <p>

            </p>
          </section>
        </div>
      </main>
    </>);
}

export default Offer;