import { useState } from 'react';

import classes from './Section.module.css';
import Sprite from '../../assets/sprite.svg';

export default function Section({ title, children }) {

	const [visibleSection, setVisibleSection] = useState(true)

	const handleSectionVisibility = () => {
		setVisibleSection(!visibleSection);
	}

	let icon = Sprite + (visibleSection ? '#icon-chevron-thin-down' : '#icon-chevron-thin-up');

	return (
		<>
			<div className={classes.section + (visibleSection ? ` ${classes.open}` : '')}>
				<div className={classes.sectionHeader} onClick={handleSectionVisibility}>
					<h3>{title}</h3>
					<svg className={classes.sectionHeaderIcon}>
						<use xlinkHref={icon}></use>
					</svg>
				</div>

				<div className={classes.sectionContent}>
					{children}
				</div>
			</div>
		</>
	)
}