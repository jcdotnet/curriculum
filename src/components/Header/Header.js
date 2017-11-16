import React from 'react';
import classes from './Header.css';

const header = () =>  (
    <header className={classes.Header}>
            <h1 className={classes.HeaderText}>
                <span className={classes.HeaderTextTitle}>Curriculum vitae </span>
                <span className={classes.HeaderTextSubtitle}>Jose Carlos Román Rubio </span>
            </h1>
    </header>
);

export default header;