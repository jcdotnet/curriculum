import classes from './Project.module.css';

const Project = (props) => {

	return (
		<div className={classes.Project}>
			<h4> Nombre: </h4>
			<div> {props.project.title} </div>
			{/*
            <h4> Descripción: </h4> 
            { description }
            <p> { props.project.project_start_date + ' - '+ props.project.project_end_date}</p>
            */}
			<h4> Más información: </h4>
			{/*<a href={ props.project.link } target="_blank" rel="noreferrer"> Ver página del proyecto </a>*/}
			<p>Contacta conmigo para recibir mi CV completo y actualizado.</p>

			{/*<span className={classes.Close} onClick={props.closed}>&times;</span> */}
		</div>
	)
}

export default Project;