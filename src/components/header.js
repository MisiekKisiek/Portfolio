import React, { useContext, useRef, useEffect } from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

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

	const {
		menu,
		handleMenu,
		menuSticky,
		handleMenuSticky,
	} = useContext(AppContext);

	const data = useStaticQuery(graphql`
		query {
			logo50: file(relativePath: { eq: "logo.png" }) {
				childImageSharp {
					fixed(width: 50, height: 50){
						...GatsbyImageSharpFixed
					}
				}
			}
			logo60: file(relativePath: { eq: "logo.png" }) {
				childImageSharp {
					fixed(width: 100, height: 100){
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`)

	const curtine = useRef(null);

	const TRANSITION_LENGTH = 1.5

	const exitTransition = {
		length: TRANSITION_LENGTH / 2,
		trigger: async () => {
			await gsap.to(curtine.current, 0.8, { autoAlpha: 1, display: 'block' });
			handleMenu();
		},
	}

	const entryTransition = {
		delay: TRANSITION_LENGTH * 1.2,
		trigger: () => {
			gsap.to(curtine.current, 1, { autoAlpha: 0, display: 'none' })
		},
	}

	useEffect(() => {
		handleMenuSticky();
	}, []);

	return (
		<header className={`${headerStyles.header} ${menuSticky ? headerStyles.headerSticky : ""}`}>
			<div ref={curtine} className={headerStyles.curtine}>
				<div>
					<Img fixed={data.logo60.childImageSharp.fixed} />
				</div>
			</div>
			<div className={
				menu ?
					`${headerStyles.logo} ${headerStyles.logoActive}` :
					`${headerStyles.logo}`}
			>
				<Img fixed={data.logo50.childImageSharp.fixed} />
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
						<TransitionLink
							activeClass="active"
							exit={exitTransition}
							entry={entryTransition}
							to="/about" >O nas
						</TransitionLink>
					</li>
					<li>
						<TransitionLink
							activeClass="active"
							exit={exitTransition}
							entry={entryTransition}
							to="/projects" >Realizacje
						</TransitionLink>
					</li>
					<li>
						<TransitionLink
							activeClass="active"
							exit={exitTransition}
							entry={entryTransition}
							to="/contact" >Kontakt
						</TransitionLink>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;