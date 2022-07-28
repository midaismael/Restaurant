import { Fragment } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navs from './components/Navs/Navs';
import Footer from './components/Home/footer';

function App() {
  return (
    <Fragment>
      <Navs />
      <Home />
      <Footer />
    </Fragment>
    );
}

export default App;
