import React, { useState, useEffect } from 'react';
import styles from './header.module.scss';
import clsx from 'clsx';


const Hero = ({ faerdigheter, intro }) => { 
	const [showAboutMe, setShowAboutMe] = useState(false);
	const [hobbies, setHobbies] = useState([null]);
	
	useEffect(()=> {
		setHobbies(intro.aboutMe.hobbies);
	}, [intro.aboutMe.hobbies])

	return (
		<section className={styles.heroWrapper}>
			<article className={styles.imgContainer} />
			<section className={styles.textContainer}>
				<h1 className={styles.heroHeader}>Elisabeth Rumar</h1>
				<h2>– frontend developer</h2>
				<div className={clsx(styles.intro, {[styles.expanded]: showAboutMe})}>
					<p className={styles.introText}>{intro.intro}</p>
					{!showAboutMe && (
						<p className={styles.expandAboutMe} onClick={() => setShowAboutMe(!showAboutMe)}>
							<span>{ showAboutMe ? 'Visa mindre' : 'Läs mer' }</span>
						</p>
					)}
					{ showAboutMe && (
					<>
						<p className={styles.intro}>{intro.aboutMe.text}</p>
						<ul className={styles.aboutMeList}>
							{ intro.aboutMe.qualities.map(x => <li key={x} className={styles.aboutMeListItem}>{x}</li>) }
						</ul>
						<ul className={styles.aboutMeList}>
							{ hobbies ? hobbies.map((x, index) => <img className={styles.hobbyListImg} key={`hobbies-${index + 1}`} src={require(`../../assets/images/${x.imgSrc}.png`)} alt={x.alt}/>
							): null}
						</ul>
						
						<p className={styles.expandAboutMe} onClick={() => setShowAboutMe(!showAboutMe)}>
							<span>{ 'Visa mindre' }</span>
						</p>
					</>
					)}
				</div>
				
				<div className={styles.heroBtns}>
					<a href="#projekt">Mina projekt</a>
					<a href="#kontakta_mig">Kontakta mig</a>
				</div>
			</section>
			<div className={styles.headerList}>
					{
					faerdigheter.schoolStuff.map((x, index) => {
						return (
							<h5 className={styles.heroparagraph} key={`faerdigheter-${index + 1}`}>{x}</h5>
						)
					})
					}
			</div>
		</section>
	);
};

export default Hero;
