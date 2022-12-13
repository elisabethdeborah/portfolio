import styles from './cvCard.module.scss';
import clsx from 'clsx';
import { useEffect, useState, useRef } from 'react';

const CvCard = ({ obj, index, program, infoIsVisible, handleClickCard, noHover=false, clickable=true }) => {
	const initialSize = useRef(null);
	const [height, setHeight] = useState(null);
	const [isHiding, setIsHiding] = useState(false);
	const [isShowing, setIsShowing] = useState(false);
	const [isCurrent, setIsCurrent] = useState(false);


	useEffect(() => {
		let initialHeight = initialSize.current.clientHeight;
		setHeight(`${initialHeight}px`);
	}, []);

	useEffect(() => {
		if (infoIsVisible && infoIsVisible.showInfo && infoIsVisible.showIndex === index && !noHover) {
			setHeight(h =>`${height}px`);
			setIsCurrent(true);
			setTimeout(() => {
				setIsShowing(true);
				setIsHiding(false);
				setHeight('fit-content');
			}, 500); 
		} else if (!infoIsVisible && isCurrent) {
			let initialHeight = initialSize.current.clientHeight;
			setIsHiding(true);
			setIsShowing(false);
			setHeight(h => `${initialHeight}px`);
			setTimeout(() => {
				setIsCurrent(false);
				setIsHiding(false);
			}, 500);
		} else if (!infoIsVisible && !isCurrent) {
			let initialHeight = initialSize.current.clientHeight;
			setHeight(h => `${initialHeight}px`);
			setIsShowing(false);
			setIsCurrent(false);
			setIsHiding(false);
		};
	}, [infoIsVisible])
	
	return (
		<article 
			style={clickable ? {'height': `${height}`, 'transition': 'height 1s ease-out, box-shadow 0.5s ease-in-out'}: null}
			onClick={() => clickable && !noHover && handleClickCard(index, program.title ? program.title : program.name, obj.type)} 
			className={clsx(styles.cvCard, {
				[styles.internships]: obj.type === 'LIA och praktik',
				[styles.workexperience]: obj.type === 'Arbetslivserfarenhet',
				[styles.education]: obj.type === 'Utbildning', 
				[styles.noHover]: noHover || !clickable,
				[styles.notClickable]: !clickable,
				[styles.clickable]: clickable,
				[styles.focused]: isCurrent,
				[styles.transitionHide]: isHiding,
				[styles.transitionShow]: isShowing,
			})}
		>
			<div className={styles.initialText} ref={initialSize}>
				<h4>{program.title ? program.title : program.name}</h4>
				{!noHover && <h3 className={clsx(styles.plus, {[styles.up]:infoIsVisible && infoIsVisible.showIndex === index && infoIsVisible.program === (program.title ? program.title : program.name) && infoIsVisible.type === obj.type  })}>&#10507;</h3>}
				
				<span className={infoIsVisible && infoIsVisible.showInfo && infoIsVisible.showIndex === index ? styles.notUnderLined : styles.underLined }>{program.dates}</span>
				
				<span className={infoIsVisible && infoIsVisible.showInfo && infoIsVisible.showIndex === index ? styles.underLined : styles.notUnderLined }>
					{program.credits && !noHover && <p className={styles.educationCredits}>{program.credits}</p>}
					<p>{program.place}</p>
				</span> 
			</div>
			
			{ 
				!clickable || (infoIsVisible && infoIsVisible.showInfo && infoIsVisible.showIndex === index && !noHover) ? (
				<div 
					className={clsx(styles.wholeCard, {
						[styles.hidden]: infoIsVisible && infoIsVisible.showInfo && infoIsVisible.showIndex === index && !noHover,
						[styles.showHidden]: (infoIsVisible.program === program.title ? program.title : program.name) && infoIsVisible.type === obj.type,
					})}
				>
					<p>{program.other}</p>
					<ul> 
						{program.tasks?.map((task) => (
							<li key={`task-${index}-${program.title ? program.title : program.name}-${program.dates}-${obj.type}-${task}mmm`}>
								{task}
							</li>
						))}
					</ul>
				</div>):null
			}
		</article>
	);
};

export default CvCard;