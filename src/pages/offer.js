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
                Drodzy państwo poniżej spróbujemy przybliżyć, to co możemy zaoferować. Zajmujemy się szeroko pojętnym budownictwem. Profil naszej firmy ze względu na grono eksperckie jakie posiadamy skupia się na budownictwie wodnym i kubaturowym.
              </span>
              <Img fluid={offers.offerPic.childImageSharp.fluid} />
            </article>
            <div>
              <h2>
                Najpopularniejsze zlecenia
              </h2>
            </div>
            <article>
              <span>
                Bardzo dobrze czujemy się w pracach projektowych wykonywanych dla nadzoru budowlanego. Ekspertyzy, oceny techniczne i legalizacje to nasza codzienność.  Wiemy, że  dla państwa kontakty z nadzorem budowlanym bywają trudne dlatego świadczymy także usługę pełnomocnictwa w prowadzonych przez nas sprawach.  Chcąc pokazać, że nie taki diabeł straszny jak go opisują, poniżej przedstawimy pokrótce najważniejsze typy wykonywanych przez nas prac projektowych.
              </span>
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