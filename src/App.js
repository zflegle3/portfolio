import {useState, useEffect, useRef} from "react";
import useLocalStorage from "use-local-storage";

//Styles
import './styles/App.css';
import './styles/Clouds.css';
import './styles/ProjectsAll.css';

//Componente
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import ProjectsAll from "./components/ProjectsAll";
import Contact from "./components/Contact";
import React from 'react';

//GSAP
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
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
    console.log("switch theme");
    let app = document.querySelector(".App");
    app.classList.toggle("darkMode");
  }

  return (
    <div className="App">
      <Nav links={links} switchTheme={switchTheme}/>
      <Home />
      <About />
      <ProjectsAll />
      <Contact />
      <div id="top-of-site-pixel-anchor"></div>
      {/* <div id="section-inc-0" className='inc-0'>0</div> */}
      {/* <div id="section-inc-1" className='inc-1'>1</div> */}
      {/* <div id="section-inc-2" className='inc-2'>2</div> */}
      {/* <div id="section-inc-3" className='inc-3'>3</div> */}
    </div>
  );
}

export default App;
