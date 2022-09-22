import '../styles/Home.css';

import CloudsAll from "./CloudsAll";

import CloudsBackSvg from "./CloudBackSvg";
import { ReactComponent as GithubSvg } from "../images/github.svg";
import { ReactComponent as LinkedInSvg } from "../images/linkedin.svg";
import { ReactComponent as EmailSvg } from "../images/email.svg";
import { ReactComponent as CvSvg } from "../images/cv.svg";
import { ReactComponent as NextSvg } from "../images/next.svg";
import resumePdf from '../documents/z_flegle_resume.pdf';

function Home() {

  return (
    <div id="home" className="home">
        <div id="section-inc-0" className='inc-0'>0</div>
        <div className="home-content">
            <CloudsBackSvg />
            <p id="banner-name">Zach Flegle</p>
            <p id="banner-title">Developer</p>
            <div id="banner-links" className="link-container">

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
                <p>GitHub</p>
              </a>

              <a href="https://www.linkedin.com/in/zach-flegle-185341a0/" className="link-item-home">
                <div className="link-svg-home">
                  <LinkedInSvg />
                </div>
                <p>LinkedIn</p>
              </a>
            </div>

        </div>

        <a id="banner-link-next"className="home-next-link" href="#about">
          <p>Learn More</p>
          <div>
            <NextSvg />
          </div>
        </a>

        <div className="load-bg" id="banner-bg"></div>

     <CloudsAll />
    </div>
  );
}

export default Home;
