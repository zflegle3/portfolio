import '../styles/Home.css';

import CloudsAll from "./CloudsAll"

import { ReactComponent as GithubSvg } from "../images/github.svg";
import { ReactComponent as LinkedInSvg } from "../images/linkedin.svg";
import { ReactComponent as EmailSvg } from "../images/email.svg";
import { ReactComponent as CvSvg } from "../images/cv.svg";
import resumePdf from '../documents/z_flegle_resume.pdf';



function Home() {



  const translateText = (e) => {
    console.log("translate");
  }

  // document.getElementById("home").onScroll(translateText());

  window.onscroll = translateText();

  return (
    <div id="home" className="home" onScroll={translateText}>
        <div className="home-content">
            <p>Zach</p>
            <p>Flegle</p>
            <p>Front End Developer</p>
            <div className="link-container">

              <address>
                <a href="mailto:zflegle3@gmail.com" className="link-item-home">
                  <div className="link-svg-home">
                    <EmailSvg />
                  </div>
                  <p>Email</p>
                </a>
              </address>

              <a href={resumePdf} className="link-item-home">
                <div className="link-svg-home">
                  <CvSvg />
                </div>
                <p>Resume</p>
              </a>

              <a href="https://github.com/zflegle3" className="link-item-home">
                <div className="link-svg-home">
                  <GithubSvg />
                </div>
                <p>GirHub</p>
              </a>

              <a href="https://www.linkedin.com/in/zach-flegle-185341a0/" className="link-item-home">
                <div className="link-svg-home">
                  <LinkedInSvg />
                </div>
                <p>LinkedIn</p>
              </a>

            </div>
        </div>

     <CloudsAll />
    </div>
  );
}

export default Home;
