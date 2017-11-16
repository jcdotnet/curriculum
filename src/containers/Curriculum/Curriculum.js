import React, {Component} from 'react';
import classes from './Curriculum.css';
import axios from 'axios';
import Section from '../../hoc/Section/Section';
import CustomList from '../../components/CustomList/CustomList';
import Spinner from '../../components/Spinner/Spinner';
import Skill from '../../components/Skill/Skill';
import { BACKGROUND, SKILLS } from '../../shared/data';

class curriculum extends Component {
    
    state = {
        projects: null
    }

    componentDidMount() {
        axios.get('https://josecarlosroman.com/api/proyectos/desc')
            .then( response =>  this.setState({projects: response.data}) )
            .catch( error => console.log(error) );     
    }
    
    render() 
    {
        let projects = <Spinner/>

        if (this.state.projects)
          projects = <CustomList items={this.state.projects.map (p => p.nombre)} object={this.state.projects}/> 
        
        return (
            <div className={classes.Curriculum}>
                <Section title="Formación">
                    <CustomList items={ BACKGROUND.education }/>
                </Section>
                <Section title="Conocimientos">
                    <Skill name="Lenguajes de programación" skills={SKILLS.languages}/>
                    <Skill name="Aplicaciones de escritorio" skills={SKILLS.desktop}/>
                    <Skill name="Aplicaciones Web (back-end)" skills={SKILLS.webBack}/>
                    <Skill name="Aplicaciones Web (front-end)" skills={SKILLS.webFront}/>
                    <Skill name="Aplicaciones para móvil" skills={SKILLS.mobile}/>
                    <Skill name="Sistemas de gestión de contenido" skills={SKILLS.CMS}/>
                </Section>
                <Section title="Proyectos">
                    {projects}
                </Section>
                <Section title="Experiencia">
                    <CustomList items={ BACKGROUND.jobs } />
                </Section>
                <Section title="Cursos">
                    <CustomList items={ BACKGROUND.courses }/>
                </Section>
            </div>
        );
    }
}

export default curriculum;