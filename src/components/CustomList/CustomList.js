import { useRef, useState } from "react";

import classes from './CustomList.module.css';
import Sprite from '../../assets/sprite.svg';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Spinner from '../Spinner/Spinner';
import Project from '../Project/Project';

function CustomList({ items, projects }) {

	const dialog = useRef();
	const [currentProject, setCurrentProject] = useState(undefined);

	const icon = Sprite + '#icon-chevron-small-right';

	function handleProject(event) {
		setCurrentProject(projects[event.target.id]);
		dialog.current.showModal();
	}

	function handleCancel() {
    setCurrentProject(null);
  }

	const renderButton = (index) => {
		if (projects) {
			return <Button id={index} onClick={handleProject}>VER PROYECTO</Button>
		}
	}

	return (
		<div className={classes.List}>
			<Modal ref={dialog} onReset={handleCancel}>
				{currentProject ? <Project project={currentProject} /> : <Spinner />}
			</Modal>
			{items && (
				<ul>
					{items.map((item, index) => <li key={index}><svg className={classes.ListIcon}><use xlinkHref={icon}></use></svg>
						{item} {renderButton(index)}</li>)}
				</ul>
			)}
		</div>
	)
}

export default CustomList;