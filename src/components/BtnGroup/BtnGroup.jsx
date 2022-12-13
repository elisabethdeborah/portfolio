import styles from './btnGroup.module.scss';

const BtnGroup = ({hrefs, target, children}) => {
	return(
	<div className={styles.heroBtns}>
		{children.map((child, index) => {
			return (
				hrefs[index].includes('hamster') && !hrefs[index].includes('github') ? 
					<article style={{'maxWidth': '250px', 'filter': 'invert()'}} key={`btn-${index}-${hrefs[index]}`}>{'Uppdatering pågår'}</article>
					:
					<a key={`btn-${index}-${hrefs[index]}`} target={target? target : null} rel="noreferrer" href={`${hrefs[index]}`}>{child}</a>
			)
		})}
	</div>
);}

export default BtnGroup;