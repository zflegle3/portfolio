import {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';

import { ReactComponent as GithubSvg } from "../images/github2.svg";
import { ReactComponent as LinkSvg } from "../images/link.svg";

//GSAP
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Project(props) {
    //props.projectData

    let projTech = props.projectData.tech.map((techItem) => 
        <p key={uuidv4()}>{techItem}</p>
    );

    const fadeIn = () => {
        // console.log(`project-details-${props.projectData.id}`);
        let details = document.querySelector(`project-details-${props.projectData.id}`);
        // console.log(details);
    }

    let vw = window.screen.width;
    // console.log(vw);
    useEffect(() => {
        //image slide in
        gsap.to(`.project-img-${props.projectData.id}`, {
            scrollTrigger: {
                trigger: `#project-item-${props.projectData.id}`,
                start: "top center",
                end: "bottom top",
                // markers: true,
                toggleActions: "play none none none",
            },
            duration: 0.5,
            x: 0,
        });
        //title slide in
        gsap.to(`.project-header-${props.projectData.id}`, {
            scrollTrigger: {
                trigger: `#project-item-${props.projectData.id}`,
                start: "top center",
                end: "bottom top",
                // markers: true,
                toggleActions: "play none none none",
            },
            duration: 0.5,
            x: 0,
        });
        //content fade in
        gsap.to(`.project-details-${props.projectData.id}`, {
            scrollTrigger: {
                trigger: `#project-item-${props.projectData.id}`,
                start: "top center",
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
            <div>
                <div id={`project-item-${props.projectData.id}`} className={props.projectData.class}>
                    <img className={`project-img-${props.projectData.id}`} src={props.projectData.imgSrc} alt={props.projectData.imgAlt}></img>

                    <div className="project-content">
                        <div className="project-content-container">

                            <div className={`project-header-${props.projectData.id}`}>
                                <p className={`project-title-${props.projectData.id}`}>{props.projectData.title}</p>
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

                            <div className={`project-details-${props.projectData.id}`}>
                                <p className="project-desc">{props.projectData.desc}</p>
                                <div className="project-tech">
                                    <div className='section-header'>
                                        <p className="skills-title">Technologies</p>
                                    </div>
                                    <div className="tech-list">
                                        {projTech}
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>

                <div className="project-break">
                    <div className="section-break"></div>
                </div>

            </div>


        );
    } else {
        return (
            <div>
                <div id={`project-item-${props.projectData.id}`} className={props.projectData.class}>
                    <div className="project-content">
                        <div className="project-content-container">

                            <div className={`project-header-${props.projectData.id}`}>
                                <p className={`project-title-${props.projectData.id}`}>{props.projectData.title}</p>
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


                            <div className={`project-details-${props.projectData.id}`}>
                                <p className="project-desc">{props.projectData.desc}</p>
                                <div className="project-tech">
                                    <div className='section-header'>
                                        <p className="skills-title">Technologies</p>
                                    </div>
                                    <div className="tech-list">
                                        {projTech}
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <img className={`project-img-${props.projectData.id}`} src={props.projectData.imgSrc} alt={props.projectData.imgAlt}></img>

                </div>

                <div className="project-break">
                    <div className="section-break"></div>
                </div>

            </div>
        );
    }
}

export default Project;