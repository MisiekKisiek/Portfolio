import React from "react";

//Components
import Head from '../components/head';
import Decoration from '../components/pagesDecoration';

//Styles
import mainStyles from '../styles/main.module.scss';

const Main = () => {
  return (
    <>
      <Head titleSecond="main" />
      <main className={mainStyles.main}>
      </main>
    </>
  )
}

export default Main;