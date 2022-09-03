import './styles/App.css';
import './styles/Clouds.css';
import './styles/Projects.scss';

import Projects from "./components/Projects"
import Clouds from "./components/Clouds"

function App() {
  return (
    <div className="App">
      <header className="header">
        <ul className="nav">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </header>

      <div className="home">
        {/* <Clouds xCount={40} yCount={10} xOffset={5} yOffset={5} type={"cloud-small"} randInterval={10} delayInterval={20000} /> */}
        <div className="home-content">
          <p>Zach</p>
          <p>Flegle</p>
          <p>Front End Developer</p>
        </div>
      </div>

      <div className="projects">
        <p>Featured Work</p>
        <Projects />
      </div>

      <div className="about">
        about
      </div>

      <div className="skills">
        skills
      </div>

      <div className="contact">
        contract
      </div>

    </div>
  );
}

export default App;
