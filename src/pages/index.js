import React, { useRef } from "react";

//Components
import Head from '../components/head';

//Styles
import mainStyles from '../styles/main.module.scss';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Main = (props) => {

  console.log(props.dupa)

  const secondSection = useRef(null);

  const executeScroll = () => secondSection.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <Head titleSecond="main" />
      <main className={mainStyles.main}>
        <section>
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
        </section>
        <section ref={secondSection}>

        </section>
      </main>
    </>
  )
}

export default Main;