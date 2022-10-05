import '../styles/Home.css';
import {useState, useEffect, useRef} from "react";

import CloudsAll from "./CloudsAll";

import CloudsBackSvg from "./CloudBackSvg";
import { ReactComponent as GithubSvg } from "../images/github.svg";
import { ReactComponent as LinkedInSvg } from "../images/linkedin.svg";
import { ReactComponent as EmailSvg } from "../images/email.svg";
import { ReactComponent as CvSvg } from "../images/cv.svg";
import { ReactComponent as NextSvg } from "../images/next.svg";

//GSAP
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Home() {


  useEffect(() => {

    // ScrollTrigger.create({
    //     trigger: "#home",
    //     start: "top center",
    //     end: "bottom center",
    //     // id: "about-section",
    //     // markers: true,
    //     onEnter: () => selectLink("home"),
    //     onLeave: () => resetLink("home"),
    //     onEnterBack: () => selectLink("home"),
    //     onLeaveBack: () => resetLink("home"),
    // })

    gsap.timeline({repeat:-1, repeatDelay: 0})
      .from(".v-slides", {y:0, duration:1, ease:"back", delay: 2})
      .to(".v-slides", {y:-100, duration:1, ease:"back", delay: 2})
      .to(".v-slides", {y:-200, duration:1, ease:"back", delay: 2})
      .to(".v-slides", {y:-300, duration:1, ease:"back", delay: 2})
      .to(".v-slides", {y:-400, duration:1, ease:"back", delay: 2})
    //   .to(".v-slides", {y:-50, duration:1, ease:"back"})

  },[]);



  return (
    <div id="home" className="home">
        <div id="section-inc-0" className='inc-0'>0</div>
        <div className="home-content">

            <div id="banner-name" className="slide-container">

              <ul class="v-slides">

                <li class="v-slide">Hi, I'm Zach Flegle</li>
                <li class="v-slide">I'm a Software Engineer</li>
                <li class="v-slide">Checkout my links below!</li>
                <li class="v-slide">Scroll down to learn more!</li>
                <li class="v-slide">Hi, I'm Zach Flegle</li>

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

              <a href="https://www.linkedin.com/in/zach-flegle-185341a0/" className="link-item-home">
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

        <CloudsAll />
    </div>
  );
}

export default Home;
