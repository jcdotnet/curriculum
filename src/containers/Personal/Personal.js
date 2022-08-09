import React from 'react';
import classes from './Personal.module.css';
import jc from '../../assets/jc.png';
import Sprite from '../../assets/sprite.svg'; 

const personal = (props) =>  (
    <div className={classes.Personal}> 
        <img src={jc} alt="JC" className={classes.Avatar} />
        <h1> José Carlos Román Rubio </h1>
        <h2> Software developer </h2>
        <ul>
            <li>
                <svg className={classes.Icon}><use xlinkHref={Sprite + '#icon-location-pin'}></use></svg>
                Málaga, España
            </li>
            <li>
                <svg className={classes.Icon}><use xlinkHref={Sprite + '#icon-mail'}></use></svg>
                <a href="mailto:info@josecarlosroman.com">info@josecarlosroman.com</a>
            </li>
            <li>
                <svg className={classes.Icon}><use xlinkHref={Sprite + '#icon-twitter'}></use></svg>
                <a href="https://twitter.com/jcdev_">https://twitter.com/jcdev_</a>
            </li>
        </ul>
        <p>
            <svg className={classes.Icon}><use xlinkHref={Sprite + '#icon-code'}></use></svg>
            Esta página Web se ha desarrollado con <strong><a href="https://es.reactjs.org/" target="_blank" rel="noreferrer">React</a></strong>. 
            Puede ver el código fuente en mi repo de <strong><a href="https://github.com/jcdotnet/curriculum">GitHub</a></strong>. 
            Además, en la carpeta <code>docs</code> del proyecto puede encontrar la versión completa y actualizada de este currículum en diferentes formatos. 
        </p>       
    </div>
);

export default personal;