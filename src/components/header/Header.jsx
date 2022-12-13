import React from 'react';
import styles from './header.module.scss';
import Hero from './Hero';

const Header = ({ data, scrollRef }) => {
	return (
		<section id="om_mig" ref={scrollRef} className={styles.headerWrapper}>
			<Hero faerdigheter={data.faerdigheter} intro={data.om_mig} />
		</section>
	)
};

export default Header;