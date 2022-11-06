//React
import {useState} from "react";
//Styles
import "./styles/reset.scss";
import './styles/App.scss';
import './styles/Mobile.scss';


// import './styles/App.css';
// import './styles/About.css';
// import './styles/Home.css';
// import './styles/Clouds.css';
import './styles/ProjectsAll.css';
// import './styles/Contact.css';
// import './styles/Nav.css';
//Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import ProjectsAll from "./components/ProjectsAll";
import Contact from "./components/Contact";
import React from 'react';
import ParticlesBg from "./components/ParticlesBg"

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
    app.classList.toggle("lightMode");
  }

  return (
    <div className="App">
      <ParticlesBg />
      <Nav links={links} switchTheme={switchTheme}/>
      <Home />

      <div className="section-break">
        <div class="section-break-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
        </div>
      </div>

      <About />
      <ProjectsAll />

      <div class="section-break">
        <div className="section-break-top"> 
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
        </div>
      </div>

      <Contact />
    </div>
  );
}

export default App;
