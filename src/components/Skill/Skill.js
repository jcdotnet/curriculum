import React from 'react';
import classes from './Skill.css';

const skill = (props) =>  (
    <div className={classes.Skill}>
        <h3 className={ classes.SkillName }> { props.name } </h3>
        <ul> { props.skills.map( (skill, index) => <li key={index}>{skill}</li>) } </ul>
    </div>
);

export default skill;