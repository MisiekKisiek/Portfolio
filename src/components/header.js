import React, { useContext } from 'react';
import { Link } from 'gatsby';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

//Styles
import headerStyles from '../styles/header.module.scss';

//Context
import AppContext from '../context/App.context'

const Header = () => {

    const {
        menuVisibility,
        handleMenuVisibility,
    } = useContext(AppContext);

    return (
        <header className={headerStyles.header}>
            <div className={
                menuVisibility ?
                    `${headerStyles.logo} ${headerStyles.logoActive}` :
                    `${headerStyles.logo}`}
            >
                <img src="" alt="logo" />
            </div>
            <button className={
                menuVisibility ?
                    `${headerStyles.bars} ${headerStyles.barsActive}` :
                    `${headerStyles.bars}`}
                onClick={handleMenuVisibility}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div className={
                menuVisibility ?
                    `${headerStyles.linkList} ${headerStyles.linkListActive}` :
                    `${headerStyles.linkList}`}
            >
                <ul>
                    <li>
                        <Link to="/" onClick={handleMenuVisibility}>Strona główna</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={handleMenuVisibility}>O nas</Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={handleMenuVisibility}>Realizacje</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={handleMenuVisibility}>Kontakt</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;