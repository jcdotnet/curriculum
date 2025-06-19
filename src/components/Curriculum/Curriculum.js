import { useEffect, useState } from 'react';

import classes from './Curriculum.module.css';
import Section from '../Section/Section';
import CustomList from '../CustomList/CustomList';
import Spinner from '../Spinner/Spinner';
import Skill from '../Skill/Skill';
import { BACKGROUND, SKILLS } from '../../shared/data';

function Curriculum() {

	const [projects, setProjects] = useState([]);

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

	if ( projects )
		projectsList = <CustomList items={projects.map(p => p.title)} projects={projects} />

	return (
		<div className={classes.Curriculum}>
			<Section title="Formación">
				<CustomList items={BACKGROUND.education} />
			</Section>
			<Section title="Conocimientos">
				<Skill name="Lenguajes de programación" skills={SKILLS.languages} />
				<Skill name="Back-End" skills={SKILLS.back} />
				<Skill name="Front-End" skills={SKILLS.front} />
				<Skill name="Aplicaciones para móvil" skills={SKILLS.mobile} />
				<Skill name="Sistemas de gestión de contenido" skills={SKILLS.CMS} />
				<Skill name="Entornos de desarrollo" skills={SKILLS.IDE} />
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