import { Fragment } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navs from './components/Navs/Navs';

function App() {
  return (
    <Fragment>
      <Navs />
      <Home />
    </Fragment>

    );
}

export default App;
