import React from 'react';

//Components
import Head from '../components/head';
import MainPage from '../components/mainPage';

//Layouts 
import Layout from '../layouts/layout';

//Context
import AppProvider from '../context/App.provider';

const About = () => {
  return (
    <AppProvider>
      <Layout>
        <Head titleSecond="about" />
        <h1>fasfasfasfasfasfasf</h1>
        <div>dupkjakakakkasfasfasfasfas</div>
      </Layout>
    </AppProvider>
  )
}

export default About;