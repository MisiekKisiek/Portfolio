import React,{useContext} from 'react';

//Components
import Head from '../components/head';

//Context
import AppContext from '../context/App.context';

const About = () => {

  const {menu} = useContext(AppContext);

  return (
      <>
        <Head titleSecond="about" />
        <h1>fasfasfasfasfasfasf</h1>
        <button onClick={()=>{
          console.log(menu)
        }}>fasfasf</button>
      </>
  )
}

export default About;