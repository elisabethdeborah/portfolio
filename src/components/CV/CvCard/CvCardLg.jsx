import styles from './cvCard.module.scss';
import CvCard from './CvCard';
import clsx from 'clsx';

const CvCardLg = ({ obj, index, item, handleClickCard, infoIsVisible, clickable=true, setInfoIsVisible }) => (
	<article className={clsx(styles.frontendCardItem, {[styles.full]: !clickable})} key={`${obj}-${index}-${item.name}-${item.credits}`}>
		<h3>{item.title || item.type}</h3>
		<article className={clsx({[styles.cardContainer]: clickable,[styles.notClickable]:!clickable})} key={`${item.title}-${index}x`}>
			{item.items.map((program, index) => (
				<CvCard 
					setInfoIsVisible={setInfoIsVisible}
					key={`${obj.type}-${index}-${program.dates}-${clickable}zz`}
					obj={obj} 
					index={`${program.dates}-${index}`}
					program={program}
					infoIsVisible={infoIsVisible}
					handleClickCard={clickable && handleClickCard}
					noHover={program.credits === '30 HP' || !clickable}
					clickable={clickable}
				/>
			))}	
		</article>
	</article>
);

export default CvCardLg;
