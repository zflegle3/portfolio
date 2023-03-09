//React
import {useState, useEffect} from "react";
//Svgs
import { ReactComponent as GithubSvg } from "../images/github.svg";
import { ReactComponent as LinkedInSvg } from "../images/linkedin.svg";
import { ReactComponent as EmailSvg } from "../images/email.svg";
import { ReactComponent as CvSvg } from "../images/cv.svg";
//Docs
import CvPdf from "../documents/Zach_Flegle_Resume.pdf";
//GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Contact() {

  useEffect(() => {
    //section Fade In
    gsap.to(".contact-container", {
        scrollTrigger: {
            trigger: "#contact",
            start: "-10% center",
            end: "bottom top",
            toggleActions: "play none none none",
        },
        duration: 1,
        y: 0,
        opacity: 1,
    });

  },[]);

  return (
    <div id="contact" className="contact">
      <div id="contact-container" className="contact-container"> 
        <div className='section-header'>
          <p className="contact-title">Contact Me</p>
          <div className="section-break"></div>
        </div>

        <a href="https://github.com/zflegle3" className="link-item">
          <div className="link-svg">
            <GithubSvg />
          </div>
          <p>Github:</p>
          <p>github.com/zflegle3</p>
        </a>

        <a href="www.linkedin.com/in/zach-flegle" className="link-item">
          <div className="link-svg">
            <LinkedInSvg />
          </div>
          <p>LinkedIn:</p>
          <p>www.linkedin.com/in/zach-flegle</p>
        </a>

        <address>
          <a href="mailto:zflegle3@gmail.com" className="link-item">
            <div className="link-svg">
              <EmailSvg />
            </div>
            <p>Email:</p>
            <p>zflegle3@gmail.com</p>
          </a>
        </address>

        <a href={CvPdf} className="link-item">
          <div className="link-svg">
            <CvSvg />
          </div>
          <p>Resume:</p>
          <p>z_flegle_resume.pdf</p>
        </a>

      </div>

    </div>


  );
}

export default Contact;
