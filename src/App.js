import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import './styles/App.css';
import './styles/Clouds.css';
import './styles/Projects.scss';


import Clouds from "./components/Clouds"
import Perlin from "./components/Perlin"

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact";


function App() {






  return (
    <div className="App">
      <Nav />

      <Home />

      <About />

      <Skills />

      <Projects />

      <Contact />

    </div>
  );
}

export default App;
