import React, { useContext } from 'react';

//Styles
import wrapStyles from '../styles/wrapper.module.scss';

//Context
import AppContext from '../context/App.context';

const MainWrap = ({ children }) => {

  const { menu, menuSticky } = useContext(AppContext);

  const classesWrap = () => {
    if (menu) {
      if (menuSticky) {
        return `${wrapStyles.wrapActive} ${wrapStyles.wrap} ${wrapStyles.wrapSticky}`
      } else {
        return `${wrapStyles.wrapActive} ${wrapStyles.wrap}`
      }

    } else {
      if (menuSticky) {
        return `${wrapStyles.wrap} ${wrapStyles.wrapSticky}`
      } else {
        return wrapStyles.wrap
      }
    }
  }

  return (
    <div className={classesWrap()}>{children}</div>
  );
}

export default MainWrap;