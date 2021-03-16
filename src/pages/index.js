import React, { useRef } from "react";
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from "gatsby-image";

//Components
import Head from '../components/head';

//Styles
import mainStyles from '../styles/main.module.scss';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
            description{
              json
              content{
                content{
                  value
                }
              }
            }
            image { 
              fluid(maxWidth: 800){
                src
              }
            }
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

  const scrollUtil = useRef(null);

  const renderOfferLinks = () => {
    let links = data.allContentfulOffers.edges.map((offer, index) => {
      const { slug, id, name } = offer.node;
      if (index < 5) {
        return <li key={id}>
          <Link
            to={`/offer/${slug}`}
          >
            {name + ","}
          </Link>
        </li>
      } else if (index === 5) {
        return <li key={id}>
          <Link
            to={`/offer/${slug}`}
          >
            ...więcej
        </Link>
        </li>
      } else {
        return
      }

    })

    return links
  }

  const renderRealizationLinks = () => {
    const links = data.allContentfulProjects.edges.map(project => {
      const { slug, shortName, id, image } = project.node;
      console.log(image)
      return <>
        {/* <Link
          key={id}
          to={`/projects/${slug}`}
        >

          {shortName}
        </Link> */}
        <img src={`${image[0].fluid.src}`} alt="project" />
      </>
    })
    return links
  }

  const executeScroll = () => scrollUtil.current.scrollIntoView({ behavior: 'smooth' })

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
          <ul
            className={mainStyles.offerList}
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            {renderOfferLinks()}
          </ul>
          <p
            className={mainStyles.paragraph}
          >
            Jeżeli masz zadanie z dziedzin budownictwa lądowego i/lub hydrotechnicznego, który nie zawiera się w naszej ofercie wyślij zgłoszenie z opisem  poprzez <Link to="/contact">formularz kontaktowy</Link>.
          </p>
        </section>
        <section
          className={mainStyles.fourthSection}
        >
          <h1
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            Realizacje
          </h1>
          <article>
            <p
              className={mainStyles.paragraph}
            >
              Nasze doświadczenie jest budowane przede wszystkim na praktyce, którą zdobywamy przy konkretnych projektach. Jesteśmy otwarci na wszelkie nowe ścieżki rozwoju, co sprawia że ciągle poszerzamy nasze możliwości działania.
            </p>
            <p
              className={mainStyles.paragraph}
            >
              Oczywiście najskuteczniejszym sposobem na udowodnienie kwalifiakcji jest przedstawienie samych projektów, dlatego oto niektóre z nich:
            </p>
            {renderRealizationLinks()}
          </article>
        </section>
      </main>
    </>
  )
}

export default Main;