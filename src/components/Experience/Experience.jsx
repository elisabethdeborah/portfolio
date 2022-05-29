import React from 'react';
import styles from './experience.module.scss';
import clsx from 'clsx';

const Experience = ({ faerdigheter, allLogos }) => (
	<section className={styles.experienceWrapper}>
		<article className={styles.logoContainer} >
		{faerdigheter.allStuff.map((logo, index) =>  (
			<div className={styles.gridItem} key={`${logo}-${index}-${logo}-1`} >
				{allLogos[logo] ? (
					<img index={index} className={clsx(styles.logoMain, {
						[styles.pixi]: logo === 'Pixi.js',
						[styles.js]: logo === 'JavaScript',
						[styles.webflow]: logo === 'Webflow',
						[styles.typescript]: logo === 'TypeScript',
						[styles.sass]: logo === 'Sass',
						[styles.react]: logo === 'React',
						[styles.gsap]: logo === 'Gsap',
						[styles.sanity]: logo === 'Sanity',
						[styles.express]: logo === 'Express',
					})} src={allLogos[logo]} alt={`${allLogos[logo]}-logga`} />
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

export default Experience;
