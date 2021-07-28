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
              fluid(maxWidth: 400){
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
            email
            tel
        }
      }
    }
    
  `)

  const scrollUtil = useRef(null);

  const renderOfferLinks = () => {
    let links = data.allContentfulOffers.edges.map((offer, index, array) => {
      const { slug, id, name } = offer.node;
      if (index < array.length - 1 && index < 5) {
        return <li key={id}>
          <Link
            to={`/offer/${slug}`}
          >
            {name + ","}
          </Link>
        </li>
      } else if (index === array.length || index <= 5) {
        return (<li key={id}>
          <Link
            to={`/offer/${slug}`}
          >
            ...więcej
          </Link>
        </li>)
      } else {
        return
      }

    })

    return links
  }

  const renderRealizationLinks = () => {
    const links = data.allContentfulProjects.edges.map(project => {
      const { slug, shortName, id, image } = project.node;
      return <div
        key={shortName}
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        <Link
          to={`/projects/${slug}`}
        >
          <img src={`${image[0].fluid.src}`} alt="project" />
          {shortName}
        </Link>
      </div>
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
            <div className={mainStyles.paragraph}>
              <p
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="1000"
                data-sal-easing="ease"
              >
                Jesteśmy grupą specjalistów z kierunkowym wykształceniem oraz doświadczeniem w dziedzinach budownictwa lądowego i wodnego, współpracującą pod szyldem <strong>Smart Hydro</strong>.
            </p>
              <p
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="1000"
                data-sal-easing="ease"
              >
                Specjalizujemy się w szerokim pasmie usług z budownictwa ladowego i wodnego, przede wszystkim w legalizacji samowoli budowlanych, sporządzania analiz konstrukcyjnych jak i wiele innych <Link to="/offer">(zobacz)</Link>.
            </p>
            </div>
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
          <div className={mainStyles.offerContainer}>
            <ul
              className={mainStyles.offerList}
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              {renderOfferLinks()}
            </ul>
            <div
              className={mainStyles.paragraph}
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              <p>
                Jeżeli masz zlecenie z dziedzin budownictwa lądowego i/lub hydrotechnicznego, który nie zawiera się w naszej ofercie wyślij zgłoszenie z opisem zagadnienia poprzez <Link to="/contact"> formularz kontaktowy</Link>.
              </p>
            </div>
          </div>
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
          <article
          >
            <div
              className={mainStyles.paragraph}
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              <p>
                Nasze doświadczenie jest budowane przede wszystkim na praktyce, którą zdobywamy przy konkretnych projektach. Jesteśmy otwarci na wszelkie nowe ścieżki rozwoju, co sprawia że ciągle poszerzamy nasze możliwości działania.
              </p>
              <p>
                Oczywiście najskuteczniejszym sposobem na udowodnienie kwalifiakcji jest przedstawienie naszych osiągnięć, dlatego oto niektóre z nich:
              </p>
            </div>
            {renderRealizationLinks()}
          </article>
        </section>
        <section
          className={mainStyles.fifthSection}
        >
          <h1
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            Kontakt
          </h1>
          <p
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            Zapraszamy do kontaktu bezpośrednio przez telefon {" "}
            <a href={`tel:${data.site.siteMetadata.tel}`}>{data.site.siteMetadata.tel}</a> albo e-mail
            <a href={`mailto:${data.site.siteMetadata.email}`}> {data.site.siteMetadata.email}</a> lub poprzez formularz <Link to="/contact">TU</Link>.
          </p>
        </section>
      </main>
    </>
  )
}

export default Main;