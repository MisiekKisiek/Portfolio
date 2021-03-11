import React, { useRef } from "react";
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from "gatsby-image";
import TransitionLink from 'gatsby-plugin-transition-link';

//Components
import Head from '../components/head';

//Styles
import mainStyles from '../styles/main.module.scss';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

//Utils
import gsap from 'gsap';

const Main = () => {

  const data = useStaticQuery(graphql`
		query {
			avatar: file(relativePath: { eq: "janusz.png" }) {
				childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
				}
      }
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
            author
        }
      }
    }
    
  `)

  const renderOfferLinks = () => {
    let links = data.allContentfulOffers.edges.map(offer => {
      const { slug, id, name } = offer.node;
      return <li key={id}>
        <TransitionLink
          to={`/offer/${slug}`}
        // exit={exitTransition}
        // entry={entryTransition}
        >
          {name}
        </TransitionLink>
      </li>
    })

    links.push(<li>
      <Link to="/offer">...</Link>
    </li>)

    return links
  }

  const scrollUtil = useRef(null);

  const executeScroll = () => scrollUtil.current.scrollIntoView({ behavior: 'smooth' })

  console.log(data)

  return (
    <>
      <Head titleSecond="main" />
      <main className={mainStyles.main}>
        <section className={mainStyles.firstSection}>
          <div>
            <h1>Smart Hydro</h1>
            <h2>
              <span>Profesjonalizm</span>
              <span>Wiedza</span>
              <span>Doświadczenie</span>
              <span>Jakość</span>
            </h2>
          </div>
          <button onClick={executeScroll}>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <span
            className={mainStyles.scrollUtil}
            ref={scrollUtil}
          ></span>
        </section>
        <section
          className={mainStyles.secondSection}
        >
          <h1
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            Kim jesteśmy i co robimy?
          </h1>
          <article className={mainStyles.article}>
            <div
              className={mainStyles.image}
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              <Img
                fluid={data.avatar.childImageSharp.fluid}
              />
            </div>
            <p
              className={mainStyles.paragraph}
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              Jesteśmy grupą specjalistów z kierunkowym wykształceniem oraz doświadzczeniem w dziedzinie budownictwa lądowego i wodnego, współpracująca pod szyldem <strong>Smart Hydro</strong>.
            </p>
            <p
              className={mainStyles.paragraph}
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              Specjalizujemy się w szerokim pasmie usług z budownictwa ladowego i wodnego, przede wszystkim w legalizacji samowoli budowlanych, sporządzania analiz konstrukcyjnych jak i wiele innych <Link to="/offer">(zobacz)</Link>.
            </p>
          </article>
        </section>
        <section
          className={mainStyles.thirdSection}
        >
          <h1
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            Oferta
          </h1>
          <article className={mainStyles.article}>
            <ul>
              {renderOfferLinks()}
            </ul>
          </article>
        </section>
      </main>
    </>
  )
}

export default Main;