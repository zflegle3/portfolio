//React
import { useEffect } from "react";
//UUID
import { v4 as uuidv4 } from 'uuid';
//Svgs
import { ReactComponent as GithubSvg } from "../images/github2.svg";
import { ReactComponent as LinkSvg } from "../images/link.svg";
import { ReactComponent as HtmlSvg } from "../images/svgs/icons/html5.svg";
import { ReactComponent as CssSvg } from "../images/svgs/icons/css3.svg";
import { ReactComponent as JSSvg } from "../images/svgs/icons/javascript.svg";
import { ReactComponent as NpmSvg } from "../images/svgs/icons/npm.svg";
import { ReactComponent as ReactSvg } from "../images/svgs/icons/react.svg";
import { ReactComponent as SassSvg } from "../images/svgs/icons/sass.svg";
import { ReactComponent as WebpSvg } from "../images/svgs/icons/webpack.svg";
import { ReactComponent as ApiSvg } from "../images/svgs/icons/api.svg";
import { ReactComponent as FbSvg } from "../images/svgs/icons/firebase.svg";
import { ReactComponent as JestSvg } from "../images/svgs/icons/jest.svg";

//GSAP
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Project(props) {
    //props.projectData

    const getTechLogo = (techType) => {
        switch (techType) {
            case "html":
                return(
                    <div className="tech-logo">
                        <HtmlSvg />
                    </div>);
            case "css":
                return(
                    <div className="tech-logo">
                        <CssSvg />
                    </div>);
            case "javascript":
                return(
                    <div className="tech-logo">
                        <JSSvg />
                    </div>);
            case "sass":
                return(
                    <div className="tech-logo">
                        <SassSvg />
                    </div>);
            case "react":
                return(
                    <div className="tech-logo">
                        <ReactSvg />
                    </div>);
            case "npm":
                return(
                    <div className="tech-logo">
                        <NpmSvg />
                    </div>);
            case "webpack":
                return(
                    <div className="tech-logo">
                        <WebpSvg />
                    </div>);
            case "jest":
                return(
                    <div className="tech-logo">
                        <JestSvg />
                    </div>);
            case "firebase":
                return(
                    <div className="tech-logo">
                        <FbSvg />
                    </div>);
            case "api":
                return(
                    <div className="tech-logo">
                        <ApiSvg />
                    </div>);
            default:
        }
    }
 
    let projTech = props.projectData.tech.map((techItem) => 
    <div key={uuidv4()} className={`tech-item ${techItem[1]}`} >
        {getTechLogo(techItem[1])}
        <p > {techItem[0]}</p>
    </div>

    );



    

    useEffect(() => {
        //image slide in
        gsap.to(`#project-image-container-${props.projectData.id}`, {
            scrollTrigger: {
                trigger: `#project-item-${props.projectData.id}`,
                start: "top 66%",
                end: "bottom top",
                // markers: true,
                toggleActions: "play none none none",
            },
            duration: 0.5,
            x: 0,
            opacity: 1,
        });
        //title slide in
        gsap.to(`.project-header-${props.projectData.id}`, {
            scrollTrigger: {
                trigger: `#project-item-${props.projectData.id}`,
                start: "top 66%",
                end: "bottom top",
                // markers: true,
                toggleActions: "play none none none",
            },
            duration: 0.5,
            x: 0,
            opacity: 1,
        });
        //content fade in
        gsap.to(`.project-details-${props.projectData.id}`, {
            scrollTrigger: {
                trigger: `#project-item-${props.projectData.id}`,
                start: "top 66%",
                end: "bottom top",
                // markers: true,
                toggleActions: "play none none none",
            },
            duration: 0.5,
            delay: 1,
            opacity: 1,
        });

    },[]);





    if (props.projectData.class === "project-item-a") {
        return (
            <div className="project-container">
                <div id={`project-item-${props.projectData.id}`} className={props.projectData.class}>

                    {/* <div className="project-image">
                        <div className="image-bg"></div>
                        <img className={`project-img-${props.projectData.id}`} src={props.projectData.imgSrc} alt={props.projectData.imgAlt}></img>

                    </div> */}

                    <a id={`project-image-container-${props.projectData.id}`} className="project-image" href={props.projectData.demoUrl}>

                        <div className="img-wrapper">
                            <div className="img-filter"></div>
                                <div className="proj-image">
                                    <img className={`project-img-${props.projectData.id}`} src={props.projectData.imgSrc} alt={props.projectData.imgAlt}></img>
                                </div>
                            </div>

                        <div className="img-bg"></div>
                    </a>


                    <div className="project-content-container">

                        <div className={`project-header-${props.projectData.id}`}>
                            <p className={`project-title-${props.projectData.id}`}>{props.projectData.title}</p>
                        </div>

                        <div className={`project-details-${props.projectData.id}`}>
                            <p className="project-desc">{props.projectData.desc}</p>
                            {/* <div className="project-tech"> */}
                                {/* <div className='section-header'>
                                    <p className="skills-title">Technologies</p>
                                </div> */}
                                <div className="tech-list">
                                    {projTech}
                                </div>
                            {/* </div> */}


                            <div className="project-links">
                                    <a className="project-btn" href={props.projectData.demoUrl}>
                                        <div className="link-svg-proj">
                                            <LinkSvg />
                                        </div>
                                        <p>Live Demo</p>
                                    </a>
                                    <a className="project-btn" href={props.projectData.codeUrl}>
                                        <div className="link-svg-proj">
                                            <GithubSvg />
                                        </div>
                                        <p>See Code</p>
                                    </a>
                            </div>
                        </div>



                    </div>

                </div>

                {/* <div className="project-break">
                    <div className="section-break"></div>
                </div> */}

            </div>


        );
    } else {
        return (
            <div className="project-container">
                <div id={`project-item-${props.projectData.id}`} className={props.projectData.class}>


                <a id={`project-image-container-${props.projectData.id}`} className="project-image" href={props.projectData.demoUrl}>

                    <div className="img-wrapper">
                        <div className="img-filter"></div>
                            <div className="proj-image">
                                <img className={`project-img-${props.projectData.id}`} src={props.projectData.imgSrc} alt={props.projectData.imgAlt}></img>
                            </div>
                        </div>

                    <div className="img-bg"></div>
                </a>


                    <div className="project-content-container">

                        <div className={`project-header-${props.projectData.id}`}>
                            <p className={`project-title-${props.projectData.id}`}>{props.projectData.title}</p>
                        </div>

                        <div className={`project-details-${props.projectData.id}`}>
                            <p className="project-desc">{props.projectData.desc}</p>
                            {/* <div className="project-tech"> */}
                                {/* <div className='section-header'>
                                    <p className="skills-title">Technologies</p>
                                </div> */}
                                <div className="tech-list">
                                    {projTech}
                                </div>
                            {/* </div> */}


                            <div className="project-links">
                                    <a className="project-btn" href={props.projectData.demoUrl}>
                                        <div className="link-svg-proj">
                                            <LinkSvg />
                                        </div>
                                        <p>Live Demo</p>
                                    </a>
                                    <a className="project-btn" href={props.projectData.codeUrl}>
                                        <div className="link-svg-proj">
                                            <GithubSvg />
                                        </div>
                                        <p>See Code</p>
                                    </a>
                            </div>
                        </div>



                    </div>

                </div>

                {/* <div className="project-break">
                    <div className="section-break"></div>
                </div> */}

            </div>

        );
    }
}

export default Project;