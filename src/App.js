import React, { Component, Fragment } from 'react';
import classes from './App.css';

import Header from './components/Header/Header';
import Personal from './containers/Personal/Personal';
import Curriculum from './containers/Curriculum/Curriculum';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className={classes.Content}>
          <div className= {classes.Sidebar}>
            <Personal/>
          </div>
          <div className={classes.Main}>
            <Curriculum/>
          </div>        
        </div>
      </Fragment>
    );
  }
}

export default App;