import React, { useContext } from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

//Styles
import headerStyles from '../styles/header.module.scss';

//Context
import AppContext from '../context/App.context';

//Utils
import gsap from 'gsap';

const Header = ({ curtine }) => {

	const {
		menu,
		handleMenu,
	} = useContext(AppContext);

	const data = useStaticQuery(graphql`
		query {
			logo: file(relativePath: { eq: "smarthydro.png" }) {
				childImageSharp {
					fluid( maxWidth: 100){
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	const TRANSITION_LENGTH = 1.4

	const exitTransition = {
		length: TRANSITION_LENGTH,
		trigger: async (e) => {
			await gsap.to(curtine.current, 0.5, { autoAlpha: 1, display: 'block' });
			handleMenu(e);
		},
	}

	const entryTransition = {
		delay: TRANSITION_LENGTH,
		trigger: () => {
			gsap.to(curtine.current, 1, { autoAlpha: 0, display: 'none' });
		},
	}

	return (
		<header className={`${headerStyles.header}`}>
			<div ref={curtine} className={headerStyles.curtine}>
				<div>
					<Img fixed={data.logo.childImageSharp.fluid} />
				</div>
			</div>
			<div className={
				menu ?
					`${headerStyles.logo} ${headerStyles.logoActive}` :
					`${headerStyles.logo}`}
			>
				<Img fixed={data.logo.childImageSharp.fluid} />
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
							exit={exitTransition}
							entry={entryTransition}
							to="/" >Strona główna
						</TransitionLink>
					</li>
					<li>
						<TransitionLink
							exit={exitTransition}
							entry={entryTransition}
							to="/offer" >Oferta
						</TransitionLink>
					</li>
					<li>
						<TransitionLink
							exit={exitTransition}
							entry={entryTransition}
							to="/about" >O nas
						</TransitionLink>
					</li>
					<li>
						<TransitionLink
							exit={exitTransition}
							entry={entryTransition}
							to="/projects" >Realizacje
						</TransitionLink>
					</li>
					<li>
						<TransitionLink
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