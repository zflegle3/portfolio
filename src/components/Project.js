import {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';

//GSAP
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Project(props) {
    //props.projectData

    let projTech = props.projectData.tech.map((techItem) => 
        <p key={uuidv4()}>{techItem}</p>
    );


    // useEffect(() => { //Section Selection Styling
    //     let options2 = {
    //         root: document.querySelector('#scrollArea'),
    //         rootMargin: '0px',
    //         threshold: 1.0,
    //     }
    //     if (
    //         "IntersectionObserver" in window &&
    //         "IntersectionObserverEntry" in window &&
    //         "intersectionRatio" in window.IntersectionObserverEntry.prototype
    //       ) {
    //       let sectionNext = new IntersectionObserver(entries => {
    //         //remove selected elements from all 
    //         if (entries[0].intersectionRatio > 0.75) {
    //             if (entries[0].boundingClientRect.y > 0) {
    //                 let idSplit = entries[0].target.id.split("-");
    //                 let projIndex = Number(idSplit[2]);
    //                 //add class to project container
    //                 let projectDoc = document.getElementById(`project-item-${projIndex}`);
    //                 projectDoc.classList.add("display");
    //             } 
    //         }
    //     }, options2);
    //         sectionNext.observe(document.getElementById(`proj-listener-${props.projectData.id}`));
    //     }
    // });

    const fadeIn = () => {
        console.log(`project-details-${props.projectData.id}`);
        let details = document.querySelector(`project-details-${props.projectData.id}`);
        console.log(details);
        // if (details.classList)
    }

    let vw = window.screen.width;
    console.log(vw);
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
            <div id={`project-item-${props.projectData.id}`} className={props.projectData.class}>
                <img className={`project-img-${props.projectData.id}`} src={props.projectData.imgSrc} alt={props.projectData.imgAlt}></img>

                <div className="project-content">
                    <div className="project-content-container">

                        <div className={`project-header-${props.projectData.id}`}>
                            <p className={`project-title-${props.projectData.id}`}>{props.projectData.title}</p>
                            <div className="project-links">
                                <a className="project-btn" href={props.projectData.demoUrl}>
                                    <p>Live Demo</p>
                                </a>
                                <a className="project-btn" href={props.projectData.codeUrl}>
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
        );
    } else {
        return (
            <div id={`project-item-${props.projectData.id}`} className={props.projectData.class}>
                <div className="project-content">
                    <div className="project-content-container">

                        <div className={`project-header-${props.projectData.id}`}>
                            <p className={`project-title-${props.projectData.id}`}>{props.projectData.title}</p>
                            <div className="project-links">
                                <a className="project-btn" href={props.projectData.demoUrl}>
                                    <p>Live Demo</p>
                                </a>
                                <a className="project-btn" href={props.projectData.codeUrl}>
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
        );
    }
}

export default Project;