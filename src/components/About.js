// React
import { useEffect } from "react";

import InfiniteLoopSlider from "./InfiniteLoopSlider";
// Styles
// import '../styles/About.css';
// PNGs
// import htmlImg from "../images/html.png";
// import cssImg from "../images/css.png";
// import jsImg from "../images/javascript.png";
// import sassImg from "../images/sass.png";
// import reactImg from "../images/react.png";
// import bsImg from "../images/bootstrap.png";
// import gsapImg from "../images/gsap.png";
// import nodeImg from "../images/nodejs.png";
// import mongoImg from "../images/mongo.png";
// import exImg from "../images/express.png";
// import fbImg from "../images/firebase.png";
// import gitImg from "../images/git.png";
// import wpImg from "../images/webpack.png";
// import ghImg from "../images/github.png";
// import npmImg from "../images/npm.png";
// import jestImg from "../images/jest.png";
//WebPs
import htmlImg from "../images/webps/html.webp";
import cssImg from "../images/webps/css.webp";
import jsImg from "../images/webps/javascript.webp";
import sassImg from "../images/webps/sass.webp";
import reactImg from "../images/webps/react.webp";
import bsImg from "../images/webps/bootstrap.webp";
import gsapImg from "../images/webps/gsap.webp";
import nodeImg from "../images/webps/nodejs.webp";
import mongoImg from "../images/webps/mongo.webp";
import exImg from "../images/webps/express.webp";
import fbImg from "../images/webps/firebase.webp";
import gitImg from "../images/webps/git.webp";
import wpImg from "../images/webps/webpack.webp";
import ghImg from "../images/webps/github.webp";
import npmImg from "../images/webps/npm.webp";
import jestImg from "../images/webps/jest.webp";
import figmaImg from "../images/webps/figma.webp";
import BioImg from "../images/webps/zach.webp";
//GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {

  const frontSkills = [
    {text:"HTML5", image: htmlImg},
    {text:"CSS3", image: cssImg},
    {text:"SASS", image: sassImg},
    {text:"Bootstrap", image: bsImg},
    {text:"JavaScript", image: jsImg},
    {text:"React", image: reactImg},
    {text:"GSAP", image: gsapImg},
  ];

  const backSkills = [
    {text:"Firebase", image: fbImg},
    {text:"NodeJs", image: nodeImg},
    {text:"MongoDB", image: mongoImg},
    {text:"Express", image: exImg},
  ];

  const devSkills = [
    {text:"Git", image: gitImg},
    {text:"Github", image: ghImg},
    {text:"Npm", image: npmImg},
    {text:"Webpack", image: wpImg},
    {text:"Jest", image: jestImg},
    {text:"Figma", image: figmaImg},
  ];

  useEffect(() => {
    //section Fade In
    gsap.to(".about-container", {
        scrollTrigger: {
            trigger: "#about",
            start: "-10% center",
            end: "bottom top",
            toggleActions: "play none none none",
        },
        duration: 2,
        y: 0,
        opacity: 1,
    });

  },[]);


  return (
    <div id="about" className="about">
        <div id="about-container" className="about-container"> 

          <div className="about-content-all">

            <div className="about-content-left">

              <div className='section-header'>
                <p className="about-title">About</p>
                <div className="section-break"></div>
              </div>
              <p className="about-bio">
                Hi there! I'm Zach Flegle, a self taught software engineer
                with experience in front end development.
              </p>
              <p className="about-bio">
              I began my career solving technical problems at Gulfstream Aerospace and Procter 
              & Gamble in a series of progressive roles. Despite finding success as a Mechanical 
              Engineer, I missed the creative challenges from my programming coursework at Georgia 
              Tech. This inspired me to reconnect with my passion by teaching myself web development. 
              Currently, I'm focused on improving my back end skill set through the Odin Project's 
              Full Stack JavaScript curriculum.
              </p>
              <p className="about-bio">
              I am actively looking for front end development positions. Please take a look at 
              my projects and feel free to reach out using my contact info below. 
              </p>
            </div>

            <a className="about-content-right" href={"https://github.com/zflegle3"}>

              <div className="bio-wrapper">
                <div className="img-filter"></div>
                <div className="bio-image">
                  <img src={BioImg} alt="Zach Flegle headshot"></img>
                </div>
              </div>

              <div className="img-bg"></div>
            </a>

          </div>

          <div className='section-header'>
            <p className="skills-title">{"Tools & Skills"}</p>
            <div className="section-break"></div>
          </div>

          <p className="skill-label">Front End</p>

          <InfiniteLoopSlider type="front" children={frontSkills}/>

          <p className="skill-label">Back End</p>

          <InfiniteLoopSlider type="back" children={backSkills}/>

          <p className="skill-label">Dev Tools</p>

          <InfiniteLoopSlider type="dev" children={devSkills}/>

        </div>
    </div>

  );
}

export default About;
