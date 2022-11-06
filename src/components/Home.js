// React
import { useEffect } from "react";
// Components
import CloudsAll from "./CloudsAll";
import ParticlesBg from "./ParticlesBg"
//Images & Svgs
import { ReactComponent as GithubSvg } from "../images/github.svg";
import { ReactComponent as LinkedInSvg } from "../images/linkedin.svg";
import { ReactComponent as EmailSvg } from "../images/email.svg";
import { ReactComponent as CvSvg } from "../images/cv.svg";
import { ReactComponent as NextSvg } from "../images/next.svg";
import CvPdf from "../documents/Zach_Flegle_Resume_2022.pdf";
//GSAP
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Home() {

  useEffect(() => {
    //Title Text Animation
    gsap.timeline({repeat:-1, repeatDelay: 0})
      .from(".v-slides", {y:0, duration:1, ease:"back", delay: 2})
      .to(".v-slides", {y:-100, duration:1, ease:"back", delay: 2})
      .to(".v-slides", {y:-200, duration:1, ease:"back", delay: 2})
      .to(".v-slides", {y:-300, duration:1, ease:"back", delay: 2})
      .to(".v-slides", {y:-400, duration:1, ease:"back", delay: 2})
  },[]);

  useEffect(() => {
    //Title Link Animation
    gsap.to(".link-svg-home svg", {
      y:0, 
      rotation: 0.01,
      duration:0.5, 
      delay: 1,
      ease: "elastic",
      stagger: {
        each: 0.2,
      }
    })
  },[]);

  useEffect(() => {
    //Title Link Animation
    gsap.to(".home-next-link", {
      delay: 3,
      // ease: "elastic",
      duration: 1,
      y: 0,
      opacity: 1,
    })
  },[]);


  useEffect(() => {
      gsap.to(".home-content",{
        scrollTrigger: {
          trigger: "#home",
          start: "55% center",
          end: "100% top",
          scrub: 1,
        },
        x: 1000,
        ease: "none",
        duration: 1,
      })
  },[]);


  return (
    <div id="home" className="home">
      {/* <ParticlesBg /> */}



        <div className="home-content">

            <div id="banner-name" className="slide-container">

              <ul className="v-slides">

                <li className="v-slide">Hi, I'm Zach Flegle</li>
                <li className="v-slide">I am a software engineer</li>
                <li className="v-slide">Check out my links below</li>
                <li className="v-slide">Scroll down to learn more!</li>
                <li className="v-slide">Hi, I'm Zach Flegle</li>

              </ul>

            </div>
            <div id="banner-links" className="link-container">

              <a href="https://github.com/zflegle3" className="link-item-home">
                <div className="link-svg-home">
                  <GithubSvg />
                </div>
                <p>GitHub</p>
              </a>

              <a href="https://www.linkedin.com/in/zach-flegle-185341a0/" className="link-item-home">
                <div className="link-svg-home">
                  <LinkedInSvg />
                </div>
                <p>LinkedIn</p>
              </a>

              <address>
                <a href="mailto:zflegle3@gmail.com" className="link-item-home">
                  <div className="link-svg-home">
                    <EmailSvg />
                  </div>
                  <p>Email</p>
                </a>
              </address>

              <a href={CvPdf} className="link-item-home">
                <div className="link-svg-home">
                  <CvSvg />
                </div>
                <p>Resume</p>
              </a>

            </div>


        </div>

        <a id="banner-link-next"className="home-next-link" href="#about">
          <p>Learn More</p>
          <div>
            <NextSvg />
          </div>
        </a>

        {/* <CloudsAll /> */}
        {/* <img src={bgImgA} alt="background test" /> */}

    </div>
  );
}

export default Home;
