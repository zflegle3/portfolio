//React
import {useState} from "react";
//Styles
import './styles/App.css';
import './styles/Clouds.css';
import './styles/ProjectsAll.css';
//Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import ProjectsAll from "./components/ProjectsAll";
import Contact from "./components/Contact";
import React from 'react';

function App() {
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
    </div>
  );
}

export default App;
