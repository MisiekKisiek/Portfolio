import React, { useContext } from "react";

//Components
import Head from '../components/head';

//Styles
import mainStyles from '../styles/main.module.scss';

const Main = () => {
  return (
      <>
          <Head titleSecond="main" />
            <main 
            className={mainStyles.main}
            >
            </main>
      </>
  )
}

export default Main;