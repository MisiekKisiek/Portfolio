import React from 'react';

//Components
import Head from '../components/head';

//Styles
import aboutStyles from '../styles/about.module.scss';

//Context
import AppContext from '../context/App.context';

const About = () => {

  return (
    <>
      <Head titleSecond="about" />
      <main className={aboutStyles.about}>

      </main>
    </>
  )
}

export default About;