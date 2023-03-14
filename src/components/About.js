// React
import { useEffect } from "react";

import InfiniteLoopSlider from "./InfiniteLoopSlider";
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
import reduxImg from "../images/webps/redux.png";
import tsImg from "../images/webps/typescript.png";
import pythonImg from "../images/webps/python.png";
import matlabImg from "../images/webps/matlab.png";
import mongooseImg from "../images/webps/mongoose.png";
import postmanImg from "../images/webps/postman.png";
import vercelImg from "../images/webps/vercel.png";
import pugImg from "../images/webps/pug.png";


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

  const languageSkills = [
    {text:"HTML5", image: htmlImg},
    {text:"CSS3", image: cssImg},
    {text:"JavaScript", image: jsImg},
    {text:"TypeScript", image: tsImg},
    {text:"Python", image: pythonImg},
    {text:"Matlab", image: matlabImg},
  ];

  const frameworkSkills = [
    {text:"React.js", image: reactImg},
    {text:"Node.js", image: nodeImg},
    {text:"MongoDB", image: mongoImg},
    {text:"Express", image: exImg},
    {text:"SASS", image: sassImg},
    {text:"Bootstrap", image: bsImg},
    {text:"GSAP", image: gsapImg},
  ];

  const toolSkills = [
    {text:"Git", image: gitImg},
    {text:"Github", image: ghImg},
    {text:"Npm", image: npmImg},
    {text:"Webpack", image: wpImg},
    {text:"Jest", image: jestImg},
    {text:"Pug", image: pugImg},
    {text:"Postman", image: postmanImg},
    {text:"Google Firebase", image: fbImg},
    {text:"Vercel", image: vercelImg},
    // {text:"Figma", image: figmaImg},
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
              Hi I'm Zach, a full-stack software engineer who thrives at solving complex challenges with innovative solutions. 
              </p>
              <p className="about-bio">
              I re-discovered my passion for programming after working as a mechanical engineer in a series of progressive roles with Proctor & Gamble and Gulfstream Aerospace. During my time as a mechanical engineer, I realized that I missed the creative challenges from my programming coursework at Georgia Tech. This led me to pursue self-studying and to gain proficiency in a diverse range of  languages, frameworks, and tools. With over 4 years of professional engineering experience, I bring a meticulous eye for detail to every project and a proven track record of solving complex, technical problems.
              </p>
              <p className="about-bio">
              I invite you to take a look at my work and connect with me using my contact information below.
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

          <p className="skill-label">Languages</p>

          <InfiniteLoopSlider type="front" children={languageSkills}/>

          <p className="skill-label">Frameworks, Libraries, & Databases</p>

          <InfiniteLoopSlider type="back" children={frameworkSkills}/>

          <p className="skill-label">Tools & Miscellaneous</p>

          <InfiniteLoopSlider type="dev" children={toolSkills}/>

        </div>
    </div>

  );
}

export default About;
