import React, { useContext } from "react";

//Components
import Head from '../components/head';
import MainPage from '../components/mainPage';

//Layouts 
import Layout from '../layouts/layout';

//Context
import AppProvider from '../context/App.provider';

const Main = () => {

  return (
    <AppProvider>
      <Layout>
        <Head titleSecond="main" />
        <MainPage />
      </Layout>
    </AppProvider>
  )
}

export default Main;