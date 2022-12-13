import React from 'react';
import styles from './experience.module.scss';
import clsx from 'clsx';

const Experience = ({ faerdigheter }) => {
	const { allStuff } = faerdigheter;
	return (
		<section className={styles.experienceWrapper}>
			<article className={styles.logoContainer} >
			{allStuff.map((logo, index) =>  (
				<div className={styles.gridItem} key={`${logo.alt}-${index}-${logo.imgSrc}-1`} >
					{logo.imgSrc && logo.type ? (
						<img 
							className={clsx(styles.logoMain, {
								[styles.pixi]: logo.imgSrc === 'pixilogo',
								[styles.js]: logo.imgSrc === 'javascript',
								[styles.webflow]: logo.imgSrc === 'webflowlogo',
								[styles.typescript]: logo.imgSrc === 'typescript',
								[styles.sass]: logo.imgSrc === 'sass',
								[styles.react]: logo.imgSrc === 'react',
								[styles.gsap]: logo.imgSrc === 'gsap-greensock',
								[styles.sanity]: logo.imgSrc === 'sanitylogo',
								[styles.express]: logo.imgSrc === 'express',
							})} 
							key={`logos-${index + 1}`} 
							src={require(`../../assets/images/${logo.imgSrc}.${logo.type}`)} 
							alt={logo.alt}
							/>
					) : (
						<article className={styles.logoPlaceholder}>
							<h5>{logo}</h5>
						</article>
					)}
				</div>
			))}
			</article>
		</section>
	);
};

export default Experience;
