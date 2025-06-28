import { useEffect, useState } from 'react';

import classes from './Curriculum.module.css';
import Section from '../Section/Section';
import CustomList from '../CustomList/CustomList';
import Spinner from '../Spinner/Spinner';
import Skill from '../Skill/Skill';
import { BACKGROUND } from '../../shared/data';

function Curriculum() {

	const [projects, setProjects] = useState([]);
	const [skills, setSkills] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('https://josecarlosroman.com/api/skills/categories');
			const skills = await response.json();
			setSkills(skills);
		}
		fetchData();
	}, []);

	useEffect(() => {
		//axios.get('https://josecarlosroman.com/wp-json/wp/v2/project/?exclude=361090') // maybe to change the GET request
		//	.then(response => this.setState({ projects: response.data }))
		//	.catch(error => console.log(error))
		// TO-DO: build the new API and consume the projects by using the JS Fetch API instead of axios.
		// in the meantime I am adding some hardcoded projects
		setProjects([
			{
				title: 'DonDivi',
			},
			{
				title: 'Sistema de información de laboratorio',
			},
			{
				title: 'Software de entrenamiento deportivo',
			}
		])
	}, [])

	let projectsList = <Spinner />

	if (projects)
		projectsList = <CustomList items={projects.map(p => p.title)} projects={projects} />

	return (
		<div className={classes.curriculum}>
			<Section title="Formación">
				<CustomList items={BACKGROUND.education} />
			</Section>
			<Section title="Conocimientos">
				<div className={classes.skills}>
					{skills.length > 0 && skills.map((area) => (
						<Skill key={area.title} name={area.title} skills={area.skills.map(skill => skill.name)} />
					))}
				</div>
			</Section>
			<Section title="Proyectos">
				{projectsList}
			</Section>
			<Section title="Experiencia">
				<CustomList items={BACKGROUND.jobs} />
			</Section>
			<Section title="Cursos">
				<CustomList items={BACKGROUND.courses} />
			</Section>
		</div>
	);

}

export default Curriculum;