import clsx from 'clsx';
import { useState } from 'react';
import styles from '../CV/cv.module.scss';
import CvCard from './CvCard/CvCard';
import CvCardLg from './CvCard/CvCardLg';

const Cv = ({ cvData, cvFrontendData }) => {

	const [infoIsVisible, setInfoIsVisible] = useState(false);
	const [showAllCv, setShowAllCv] = useState(false);

	const handleClickCard = (index, program, type) => {
		if ( !infoIsVisible ) {
			setInfoIsVisible({showInfo: true, showIndex: index, program: program, type: type});
		} else if ( infoIsVisible && infoIsVisible.showIndex !== index ) {
			setInfoIsVisible(false);
			setTimeout(() => {
				setInfoIsVisible({showInfo: true, showIndex: index, program: program, type: type});
			}, 200);
		} else {
			setInfoIsVisible(false);	
		}
	};

	return (
		<section id="cv" className={styles.cvWrapper}>
			<h2>{'CV – frontend\u00ADutveckling'}</h2>
			<section className={styles.experience}>
				<div className={styles.outerCardContainer}>
				{cvFrontendData.map((obj, index) => (
					<CvCardLg
						key={`${obj.type}-${index}-${obj.dates}-two`}
						obj={cvFrontendData}
						index={`${cvFrontendData.type}-${index}-${obj.dates}-index`}
						item={obj}
						infoIsVisible={infoIsVisible}
						clickable={false}
					/>
				))}
				</div>
			</section>
			<div className={styles.allHeader}  onClick={() => setShowAllCv(!showAllCv)}>
				<h2>CV - alla kategorier</h2>
				<div className={styles.arrowPlaceholder}/>
				<article className={styles.readMore}>
					<span>{showAllCv ? ' Dölj ' : 'Läs mer'}</span>
					<h2 className={clsx(styles.plus, {[styles.up]:showAllCv})}>&#10507;</h2>
				</article>
			</div>
			{ showAllCv && (
			<section className={styles.experience}>
				{cvData.map((obj, index) => (
					<article className={styles.cvItem} key={`${obj.type}-${index}-${obj.items.dates}-hey`}>
						<h3>{obj.type}</h3>
						{obj.type !== 'Utbildning' ? (
						<div className={styles.cardContainer}>
						{obj.items.map((program, index) => (
							<CvCard 
								key={`${obj.type}-${index}-${program.dates}-one`}
								obj={obj}
								index={`${obj.type}-${index}-${program.dates}-index`}
								program={program}
								infoIsVisible={infoIsVisible}
								handleClickCard={handleClickCard}
							/>
						))}
						</div>
						) : (
						obj.items.map((item, index) => (
							<CvCardLg
								key={`${obj.type}-${index}-${item.dates}-two`}
								obj={obj}
								index={index}
								item={item}
								infoIsVisible={infoIsVisible}
								handleClickCard={handleClickCard}
							/>
						))
						)}
					</article>
				))}
			</section>
			)}
		</section>
	);
};

export default Cv;
