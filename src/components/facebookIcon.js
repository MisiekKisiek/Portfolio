import React from 'react';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

//Styles
import * as facebookIconStyles from '../styles/facebookIcon.module.scss';

const facebookIcon = () => {
  return ( <a
    target="_blank" 
    rel="noreferrer"
    href="https://www.facebook.com/SmartHydro-102222518800563"
    className={facebookIconStyles.facebookIcon}
  >
    <FontAwesomeIcon icon={faFacebook}/>
    <span>Znajdź nas na facebooku!</span>
  </a> );
} 
 
export default facebookIcon;