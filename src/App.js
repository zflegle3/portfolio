// import * as Scroll from 'react-scroll';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {useState, useEffect} from "react";

import './styles/App.css';
import './styles/Clouds.css';
// import './styles/Projects.scss';
import './styles/ProjectsAll.css';
import weatherAppImg  from "./images/project-images/weather-app-demo.png"
import useLocalStorage from "use-local-storage";


// import Clouds from "./components/Clouds";
// import Perlin from "./components/Perlin";

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
// import Skills from "./components/Skills";
import ProjectsAll from "./components/ProjectsAll";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React from 'react';


function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const [links, setLinks] = useState([
    { id: "nav-link-home",
      text: "home",
      url: "#home",
    },
    { id: "nav-link-about",
      text: "about",
      url: "#about",
    },
    { id: "nav-link-projects",
      text: "projects",
      url: "#projects",
    },
    { id: "nav-link-contact",
      text: "contact",
      url: "#contact",
    },
  ])

  const switchTheme = (e) => {
    // e.preventDefault();
    let togSwitch = document.getElementById("theme-toggle");
    console.log(togSwitch);
    togSwitch.classList.toggle("light-mode")
    console.log("switching theme");
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }



  return (
    <div className="App" data-theme={theme}>


      <Nav links={links} switchTheme={switchTheme}/>

      {/* <div className="backdrop-home"></div> */}
      <Home />


      <About />
      {/* <div className="backdrop-about"></div> */}

      <ProjectsAll />

      <Contact />

      {/* <Footer /> */}

      <div id="top-of-site-pixel-anchor"></div>
      <div id="section-inc-0" className='inc-0'>0</div>
      <div id="section-inc-1" className='inc-1'>1</div>
      <div id="section-inc-2" className='inc-2'>2</div>
      <div id="section-inc-3" className='inc-3'>3</div>
      {/* <div id="section-inc-4" className='inc-4'>4</div> */}

    </div>
  );
}

export default App;
