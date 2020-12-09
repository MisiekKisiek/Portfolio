import React, { useContext } from 'react';

//Styles
import wrapStyles from '../styles/wrapper.module.scss';

//Context
import AppContext from '../context/App.context';

const MainWrap = ({ children }) => {

  const { menu } = useContext(AppContext);

  return (
    <div className={menu ? `${wrapStyles.wrapActive} ${wrapStyles.wrap}` : wrapStyles.wrap}>
      {children}
    </div>
  );
}

export default MainWrap;