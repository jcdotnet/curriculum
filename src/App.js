import classes from './App.module.css';

import Header from './components/Header/Header';
import Personal from './components/Personal/Personal';
import Curriculum from './components/Curriculum/Curriculum';

function App() {
  return (
    <>
      <Header />
      <main className={classes.Main}>
        <div className={classes.Sidebar}>
          <Personal />
        </div>
        <div className={classes.Content}>
          <Curriculum />
        </div>
      </main>
    </>
  );
}

export default App;