
import '../styles/About.css';

import { ReactComponent as GithubSvg } from "../images/gh.svg";
import { ReactComponent as CssSvg } from "../images/css.svg";
import { ReactComponent as JestSvg } from "../images/javascript.svg";

import htmlImg from "../images/html.png";
import cssImg from "../images/css.png";
import jsImg from "../images/javascript.png";
import sassImg from "../images/sass.png";
import reactImg from "../images/react.png";
import bsImg from "../images/bootstrap.png";
import gsapImg from "../images/gsap.png";
import nodeImg from "../images/nodejs.png";
import mongoImg from "../images/mongo.png";
import exImg from "../images/express.png";
import fbImg from "../images/firebase.png";
import gitImg from "../images/git.png";
import wpImg from "../images/webpack.png";
import ghImg from "../images/github.png";
import npmImg from "../images/npm.png";
import jestImg from "../images/jest.png";


function About() {

  return (
    <div id="about" className="about">
        <div id="about-container" className="about-container"> 
          <div className='section-header'>
            <p className="about-title">About</p>
            <div className="section-break"></div>
          </div>
          <p className="about-bio">
          I am Zach Flegle, a self-taught software developer who studied 
          Mechanical Engineering at the Georgia Institute of Technology. 
          See my work below and send a message to get in touch. 
          </p>

          <div className='section-header'>
            <p className="skills-title">{"Tools & Skills"}</p>
            <div className="section-break"></div>
          </div>


          <p className="skill-label">Front End</p>
          <div className="skill-container">

            <div className="skill-item">
              <img src={htmlImg} alt="html logo"></img>
              <p className="skill-title">Html</p>
            </div>

            <div className="skill-item">
              <img src={cssImg} alt="html logo"></img>
              <p className="skill-title">CSS</p>
            </div>

            <div className="skill-item">
              <img src={jsImg} alt="html logo"></img>
              <p className="skill-title">JavaScript</p>
            </div>

            <div className="skill-item">
              <img src={reactImg} alt="html logo"></img>
              <p className="skill-title">React</p>
            </div>

            <div className="skill-item">
              <img src={bsImg} alt="html logo"></img>
              <p className="skill-title">Bootstrap</p>
            </div>

            <div className="skill-item">
              <img src={sassImg} alt="html logo"></img>
              <p className="skill-title">Sass</p>
            </div>

            <div className="skill-item">
              <img src={gsapImg} alt="html logo"></img>
              <p className="skill-title">gsap</p>
            </div>
          </div>


          <p className="skill-label">Back End</p>
          <div className="skill-container">


            <div className="skill-item">
                <img src={nodeImg} alt="html logo"></img>
                <p className="skill-title">NodeJs</p>
            </div>

            <div className="skill-item">
                <img src={mongoImg} alt="html logo"></img>
                <p className="skill-title">MongoDB</p>
            </div>

            <div className="skill-item">
                <img src={exImg} alt="html logo"></img>
                <p className="skill-title">Express</p>
            </div>

            <div className="skill-item">
                <img src={fbImg} alt="html logo"></img>
                <p className="skill-title">Firebase</p>
            </div>


          </div>

          <p className="skill-label">Miscellaneous</p>
          <div className="skill-container">


            <div className="skill-item">
                <img src={gitImg} alt="html logo"></img>
                <p className="skill-title">git</p>
            </div>

            <div className="skill-item">
                {/* <GithubSvg /> */}
                <img src={ghImg} alt="html logo"></img>
                <p className="skill-title">Github</p>
            </div>

            <div className="skill-item">
                <img src={npmImg} alt="html logo"></img>
                <p className="skill-title">Npm</p>
            </div>

            <div className="skill-item">
                <img src={wpImg} alt="html logo"></img>
                <p className="skill-title">Webpack</p>
            </div>

            <div className="skill-item">
                <img src={jestImg} alt="html logo"></img>
                <p className="skill-title">Jest</p>
            </div>


          </div>
        </div>
    </div>

  );
}

export default About;
