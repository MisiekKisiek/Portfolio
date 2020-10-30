import React, { useContext } from 'react';

//Styles
import mainStyles from '../styles/main.module.scss';

//Context
import AppContext from '../context/App.context'

const MainPage = () => {

  const { menuVisibility } = useContext(AppContext);

  return (
    <main className={
      menuVisibility ?
        `${mainStyles.mainActive} ${mainStyles.main}` :
        `${mainStyles.main}`}
    >
    </main>
  );
}

export default MainPage;