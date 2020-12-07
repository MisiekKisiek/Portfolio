import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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

  const avatarImage = data.avatar ? <Img fluid={data.avatar.childImageSharp.fluid} /> : null;

  return (
    <>
      <Head titleSecond="o nas" />
      <main className={aboutStyles.about}>
        <h1 className={aboutStyles.title}>o nas!</h1>
        <section className={aboutStyles.section}>
          {avatarImage}
        </section>
      </main>
    </>
  )
}

export default About;