import React from 'react';
import classes from './Project.module.css';


const project = (props) => {
    
    let div = document.createElement('div');
    div.innerHTML = props.project.excerpt.rendered;
    const description = div.textContent || div.innerText || '';
    
    return (  
        <div className = {classes.Project}>       
            <h4> Nombre: </h4>
            <div> { props.project.title.rendered } </div>
            <h4> Descripción: </h4>
            { description }
            <p> { props.project.project_start_date + ' - '+ props.project.project_end_date}</p>
            <h4> Más información: </h4>
            <a href={ props.project.link } target="_blank" rel="noreferrer"> Ver página del proyecto </a>
            
            {/*<span className={classes.Close} onClick={props.closed}>&times;</span> */}           
        </div>  
    )
}

export default project;