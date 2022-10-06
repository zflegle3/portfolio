import {useState, useEffect, useRef} from "react";

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
// import zachImg from "../images/zach.jpeg"

//GSAP
import gsap from "gsap";
import {ScrollTrigger, TimelineLite} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function About() {

  let vw = window.screen.width;
  useEffect(() => {
    //Title Slide on Scroll Animation

    // if (vw > 800) {
    //   gsap.to(".bio-image",{
    //     scrollTrigger: {
    //       trigger: "#about",
    //       start: "top center",
    //       end: "bottom top",
    //       markers: true,
    //       // scrub: 1,
    //     },
    //     duration: 1.5,
    //     y: 0,
    //     ease: "bounce.out",
    //   });
    // }


    // gsap.to(".bio-image",{
    //   scrollTrigger: {
    //     trigger: "#about",
    //     start: "top center",
    //     end: "bottom top",
    //     markers: true,
    //     scrub: 1,
    //   },
    //   x: 0,
    //   ease: "none",
    //   duration: 1.5,
    // });






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
              I am actively looking for front end development positions. Please take a look at my projects and feel free to reach out using my contact info below. 
              </p>
            </div>

            <div className="about-content-right">
              <div className="bio-image"></div>
            </div>

          </div>

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
              <p className="skill-title">GSAP</p>
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
