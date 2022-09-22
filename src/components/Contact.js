import '../styles/Contact.css';
import { ReactComponent as GithubSvg } from "../images/github.svg";
import { ReactComponent as LinkedInSvg } from "../images/linkedin.svg";
import { ReactComponent as EmailSvg } from "../images/email.svg";
import { ReactComponent as CvSvg } from "../images/cv.svg";
import resumePdf from '../documents/z_flegle_resume.pdf';


function Contact() {

  return (
    <div id="contact" className="contact">
      <div id="section-inc-3" className='inc-3'>3</div>
      <div id="contact-container" className="contact-container"> 
        <div className='section-header'>
          <p className="contact-title">Contact</p>
          <div className="section-break"></div>
        </div>

        <address>
          <a href="mailto:zflegle3@gmail.com" className="link-item">
            <div className="link-svg">
              <EmailSvg />
            </div>
            <p>Email:</p>
            <p>zflegle3@gmail.com</p>
          </a>
        </address>

        <a href={resumePdf} className="link-item">
          <div className="link-svg">
            <CvSvg />
          </div>
          <p>Resume:</p>
          <p>z_flegle_resume.pdf</p>
        </a>


        <a href="https://github.com/zflegle3" className="link-item">
          <div className="link-svg">
            <GithubSvg />
          </div>
          <p>Github:</p>
          <p>github.com/zflegle3</p>
        </a>

        <a href="https://www.linkedin.com/in/zach-flegle-185341a0/" className="link-item">
          <div className="link-svg">
            <LinkedInSvg />
          </div>
          <p>LinkedIn:</p>
          <p>linkedin.com/in/zach-flegle-185341a0/</p>
        </a>

      </div>
    </div>


  );
}

export default Contact;
