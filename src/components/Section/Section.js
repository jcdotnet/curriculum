import { useState } from 'react';

import classes from './Section.module.css';
import Sprite from '../../assets/sprite.svg';


export default function Section(props) {

	const [visibleSection, setVisibleSection] = useState(true)

	const handleSectionVisibility = () => {
		setVisibleSection(!visibleSection);
	}

	let icon = Sprite + '#icon-chevron-thin-down';
	const contentStyle = {
		backgroundColor: '#FFF'
	}
	if (!visibleSection) {
		icon = Sprite + '#icon-chevron-thin-up';
		contentStyle.display = 'none';
	}

	return (
		<>
			<div className={classes.SectionHeader} onClick={handleSectionVisibility}>
				<h3>{props.title}</h3>
				<svg className={classes.SectionHeaderIcon}>
					<use xlinkHref={icon}></use>
				</svg>
			</div>

			<div style={contentStyle}>
				{props.children}
			</div>
		</>
	)
}