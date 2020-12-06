import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";

//Components
import Head from '../components/head';
import AsideMenu from '../components/asideMenu';

//Styles
import offerStyles from '../styles/offer.module.scss';

//Utils
import paths from '../utils/paths';

const Offer = (props) => {

  const offers = useStaticQuery(graphql`
  {
    allContentfulOffers{
      edges{
        node{
          id
          name
          image { 
            fluid(maxWidth: 800){
              src
            }
          }
          slug
        }
      }
      pageInfo{
        currentPage
      }
    }
    offerPic: file(relativePath: { eq: "offer-pic.jpg" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  return (
    <>
      <Head titleSecond="oferta" />
      <main className={offerStyles.main}>
        <h1 className={offerStyles.title}>Nasza oferta</h1>
        <div>
          <AsideMenu query={offers.allContentfulOffers} path={paths.offer}/>
          <section className={offerStyles.section}>
            <div>
              <h2>
                Zakres możliwości
              </h2>
            </div>
            <article>
              <span>
                Oferujemy szeroki zakres usług poczynając od <strong>analiz konstrukcyjnych oraz środowiskowych</strong>, poprzez <strong>pomoc prawną m.in. dla legalizacji samowoli budowlanych</strong>, do szerokiego zakresu <strong>realizacji z dziedziny budownictwa hydrotechnicznego</strong>.
              </span>
              <Img fluid={offers.offerPic.childImageSharp.fluid} />
            </article>
            <div>
              <h2>
                Najpopularniejsze zlecenia
              </h2>
            </div>
            <article>
              <Img fluid={offers.offerPic.childImageSharp.fluid} />
              <span>W świetle zmian w prawie dot. legalizacji samowoli budowlanych jesteśmy przygotowani na podjęcie się najbardziej skomplikowanych zleceń dotyczących tej materii. Doświadczenie w tej dziedzinie oraz gruntowna analiza przepisów i nowinek pozwala nam na profesjonalne, szybkie i skuteczne działania na rzecz klienta.</span>
            </article>
          </section>
        </div>
      </main>
    </>);
}

export default Offer;