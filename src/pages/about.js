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
			team: file(relativePath: { eq: "team.jpg" }) {
				childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
				}
			}
			avatarJanusz: file(relativePath: { eq: "Janusz_Filipczyk.jpg" }) {
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
        <h1 className={aboutStyles.title}>O nas!</h1>
        <section>
          <div className={aboutStyles.secondaryTitle}>
            <h2>
              Kim jesteśmy?
            </h2>
          </div>
          <article className={aboutStyles.article}>
            <p>
              Jesteśmy grupą specjalistów z kierunkowym wykształceniem oraz doświadczeniem w dziedzinach budownictwa lądowego i wodnego, współpracującą pod szyldem <strong>Smart Hydro</strong>, przy kierownictwie właściciela oraz głównego specjalisty <strong>Janusza Filipczyka</strong>.
            </p>
            <div className={aboutStyles.image} >
              <Img fluid={data.avatarJanusz.childImageSharp.fluid} />
              <span>Obraz: Główny specjalista - Janusz Filipczyk</span>
            </div>
            <p>
              Tworzymy projekty z wielu dziedzin związanych z budownictwem, a celem wszystkich osób pracujących przy projektach dla <strong>Smart Hydro</strong> jest profesjonalna obsługa, rzetelność i profesjonalizm przy tworzeniu projektu oraz sprawna i szybka realizacja tematu.
            </p>
          </article>
          <div className={aboutStyles.secondaryTitle}>
            <h2>
              Czym się zajmujemy?
            </h2>
          </div>
          <article className={`${aboutStyles.article} ${aboutStyles.articleList}`}>
            <p>Jesteśmy firmą specjalizującą się w wielu tematach z dziedzin, głównie:</p>
            <ul>
              <li>budownictwa hydrotechnicznego,</li>
              <li>budownictwa konstrukcyjnego,</li>
              <li>legalizacji samowoli budowlanych,</li>
              <li>
                <Link to="/offer">...pełna oferta</Link>
              </li>
            </ul>
          </article>
          <div className={aboutStyles.secondaryTitle}>
            <h2>
              Jakie są nasze cele?
            </h2>
          </div>
          <article className={aboutStyles.article}>
            <p>Przede wszystkim celujemy w profesjonalne i szybkie wykonanie usługi bez narażania klienta na niepotrzebne koszta. Zadania których się podejmujemy sprawiają, że nad każdą sprawą musimy pochylić się indywidualnie, co w efekcie pozwala nam na optymalizację zlecenia wedle potrzeb klienta.</p>
            <div className={aboutStyles.image} >
              <Img fluid={data.team.childImageSharp.fluid} />
            </div>
            <p>Optymistycznie patrzymy w przyszłość, w naszych planach mamy rozwijanie marki, rozszerzenie działalności na kolejne gałęzie ze swery budownictwa oraz oczywiście baczne przyglądanie się zmianom w prawie jak i na rynku dla dziedzin budownictwa w których świadczymy usługi.</p>
          </article>
        </section>
      </main>
    </>
  )
}

export default About;