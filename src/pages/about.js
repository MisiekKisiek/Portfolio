import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from "gatsby-image";

//Components
import Head from '../components/head';

//Styles
import aboutStyles from '../styles/about.module.scss';

const About = () => {

  const data = useStaticQuery(graphql`
		query {
			avatar: file(relativePath: { eq: "janusz.png" }) {
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
      <Head titleSecond="o nas" />
      <main className={aboutStyles.about}>
        <h1 className={aboutStyles.title}>o nas!</h1>
        <section>
          <div className={aboutStyles.secondaryTitle}>
            <h2>
              Kim jesteśmy?
            </h2>
          </div>
          <article className={`${aboutStyles.article} ${aboutStyles.articleFirst}`}>
            <p>
              Grupa specjalistów z kierunkowym wykształceniem oraz doświadzczeniem współpracująca pod szyldem <strong>Smart Hydro</strong>, przy kierownictwie właściciela oraz głównego specjalisty <strong>Janusza Filipczyka</strong>.
            </p>
            <div className={aboutStyles.image} >
              <Img fluid={data.avatar.childImageSharp.fluid} />
              <span>Obraz: Zespół Smart Hydro</span>
            </div>
            <p>
              Tworzymy projekty z wielu dziedzin związanych z budownictwem, a celem wszystkich osób pracujących przy projektach dla <strong>Smart Hydro</strong> jest profesjonalna obsługa, rzetelność i profesjonalizm przy realizacji projektu oraz sprawna i szybka realizacja tematu <strong>:)</strong>
            </p>
          </article>
          <div className={aboutStyles.secondaryTitle}>
            <h2>
              Czym się zajmujemy?
            </h2>
          </div>
          <article className={aboutStyles.article}>
            <div>
              <span>Jesteśmy firmą specjalizującą się w wielu tematach z dziedzin, głównie:</span>
              <ul>
                <li>budownictwa hydrotechnicznego,</li>
                <li>budownictwa konstrukcyjnego,</li>
                <li>legalizacji samowoli budowlanych,</li>
                <li>
                  <Link to="/offer">...pełna oferta</Link>
                </li>
              </ul>
            </div>
          </article>

        </section>
      </main>
    </>
  )
}

export default About;