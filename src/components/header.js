import React, { useContext, useRef } from 'react';
import  Link  from 'gatsby-plugin-transition-link';
import TransitionLink from 'gatsby-plugin-transition-link';


//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

//Styles
import headerStyles from '../styles/header.module.scss';

//Context
import AppContext from '../context/App.context'

//Utils
import gsap from 'gsap';

const Header = () => {

	const test = useRef(null)

	const TRANSITION_LENGTH = 1.5

	const exitTransition = {
	length: TRANSITION_LENGTH, 
	trigger: async() => {
		await gsap.to(test.current,1,{autoAlpha: 1,display:'block'});
		handleMenu();
	},
	}

	const entryTransition = {
	delay: TRANSITION_LENGTH, 
	trigger: ({exit,node,entry}) => {
		console.group();
		console.log(exit)
		console.log(node)
		console.log(entry)
		gsap.to(test.current,1,{autoAlpha: 0,display:'none'})
	},
	}

	const {
		menu,
		handleMenu,
	} = useContext(AppContext);
	
	return (
		<header className={headerStyles.header}>
			<div ref={test} className={headerStyles.curtine}>
				<img src="../img/logo.png" alt="logo"/>
			</div>
			<div className={
				menu ?
					`${headerStyles.logo} ${headerStyles.logoActive}` :
					`${headerStyles.logo}`}
			>
				<img src="../img/logo.png" alt="logo"/>
			</div>
			<button className={
				menu ?
					`${headerStyles.bars} ${headerStyles.barsActive}` :
					`${headerStyles.bars}`}
				onClick={handleMenu}
			>
				<FontAwesomeIcon icon={faBars} />
			</button>
			<div className={
				menu ?
					`${headerStyles.linkList} ${headerStyles.linkListActive}` :
					`${headerStyles.linkList}`}
			>
				<ul>
					<li>
						<TransitionLink
						  activeClass="active"
						  exit={exitTransition}
						  entry={entryTransition}
						  to="/" >Strona główna
						</TransitionLink>
					</li>
					<li>
						<Link to="/about" activeClass="active" onClick={handleMenu}>O nas</Link>
					</li>
					<li>
						<TransitionLink to="/projects" onClick={handleMenu}>Realizacje</TransitionLink>
					</li>
					<li>
						<TransitionLink to="/contact" onClick={handleMenu}>Kontakt</TransitionLink>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;