import React, { Component } from 'react';
import classes from './App.css';

import Header from './components/Header/Header';
import Personal from './containers/Personal/Personal';
import Curriculum from './containers/Curriculum/Curriculum';
import Wrapper from './hoc/Wrapper/Wrapper';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <div className={classes.Content}>
          <div className= {classes.Sidebar}>
            <Personal/>
          </div>
          <div className={classes.Main}>
            <Curriculum/>
          </div>        
        </div>
      </Wrapper>
    );
  }
}

export default App;