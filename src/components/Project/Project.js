import React from 'react';
import classes from './Project.css';


const project = (props) => {
    
    let div = document.createElement("div");
    div.innerHTML = props.project.descripcion;
    const description = div.textContent || div.innerText || "";
    
    return (  
        <div className = {classes.Project}>       
            <h4> Nombre: </h4>
                { props.project.nombre }
            <h4> Descripción: </h4>
                { description }
            <h4> Más información: </h4>
            <a href={"https://josecarlosroman.com/old/es/proyecto/" + props.project.slug } target="_blank">{"https://josecarlosroman.com/old/es/proyecto/" + props.project.slug }</a>
            
            {/*<span className={classes.Close} onClick={props.closed}>&times;</span> */}           
        </div>  
    )
}

export default project;