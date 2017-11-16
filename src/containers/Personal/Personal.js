import React from 'react';
import classes from './Personal.css';
import jc from '../../assets/jc.jpg';
import Sprite from '../../assets/sprite.svg'; 

const personal = (props) =>  (
    <div className={classes.Personal}> 
        <img src={jc} alt="JC" className={classes.Avatar} />
        <h1> Jose Carlos Román Rubio </h1>
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
                <a href="https://twitter.com/jc2net">https://twitter.com/jc2net</a>
            </li>
        </ul>
        <p>
            <svg className={classes.Icon}><use xlinkHref={Sprite + '#icon-code'}></use></svg>
            Esta página Web se ha desarrollado con <strong>React</strong>. Puede ver el código fuente en mi repo de <a href="https://github.com/jcdotnet/curriculum">GitHub</a>. 
            Además, en la carpeta <code>docs</code> del proyecto puede encontrar la versión completa y actualizada de este currículum en diferentes formatos. 
        </p>       
    </div>
);

export default personal;