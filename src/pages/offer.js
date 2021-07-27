import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
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
    lawPic: file(relativePath: {eq: "law.jpg"}) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
    site{
      siteMetadata{
          email
          tel
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
          <AsideMenu
            query={offers.allContentfulOffers}
            path={paths.offer}
          />
          <section className={offerStyles.section}>
            <div>
              <h2>
                Zakres możliwości
              </h2>
            </div>
            <article>
              <span>
                Oferujemy szeroki zakres usług poczynając od <strong>analiz konstrukcyjnych oraz środowiskowych</strong>, poprzez <strong>pomoc prawną, głównie dla legalizacji samowoli budowlanych</strong>, do <strong>realizacji z dziedziny budownictwa hydrotechnicznego</strong>.
              </span>
              <Img fluid={offers.offerPic.childImageSharp.fluid} />
            </article>
            <div>
              <h2>
                Najpopularniejsze zlecenia
              </h2>
            </div>
            <article>
              <span>W świetle zmian w prawie dot. <strong>legalizacji samowoli budowlanych </strong> jesteśmy przygotowani na podjęcie się najbardziej skomplikowanych zleceń dotyczących tej materii. Doświadczenie w tej dziedzinie oraz gruntowna analiza przepisów i nowinek pozwala nam na profesjonalne, szybkie i skuteczne działania na rzecz klienta.</span>
              <Img fluid={offers.lawPic.childImageSharp.fluid} />
            </article>
            <div>
              <h2>
                Kontakt
              </h2>
            </div>
            <article>
              <span>Zapraszamy do kontaktu poprzez
                {" "}
                <Link to="/contact">formularz</Link>
                {" "}
                lub bezpośrednio przez mail
                <a href={`mailto:${offers.site.siteMetadata.email}`}> {offers.site.siteMetadata.email}
                </a> i telefon{" "}
                <a href={`tel:${offers.site.siteMetadata.tel}`}>{offers.site.siteMetadata.tel}
                </a> od pon. do pt. w godzinach 8:00 - 22:00 (kontakt w innym terminie po uprzednim umówieniu).
                <br />
                <br />
                <span>Jeżeli zdecydujesz się skorzystać z naszych usług gwarantujemy:</span>
                <ul>
                  <li>Indywidualną analizę oraz wycenę zlecenia,</li>
                  <li>profesjonalną obsługę,</li>
                  <li>opiekę nad realizacją zadania od początku do samego końca procesu,</li>
                  <li>doradztwo na każdym etapie zlecenia,</li>
                </ul>
              </span>
            </article>
          </section>
        </div>
      </main>
    </>);
}

export default Offer;