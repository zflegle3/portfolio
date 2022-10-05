import {useState, useEffect} from "react";

function Project(props) {
    //props.projectData


    useEffect(() => { //Section Selection Styling
        let options2 = {
            root: document.querySelector('#scrollArea'),
            rootMargin: '0px',
            threshold: 1.0,
        }
        if (
            "IntersectionObserver" in window &&
            "IntersectionObserverEntry" in window &&
            "intersectionRatio" in window.IntersectionObserverEntry.prototype
          ) {
          let sectionNext = new IntersectionObserver(entries => {
            //remove selected elements from all 
            if (entries[0].intersectionRatio > 0.75) {
                if (entries[0].boundingClientRect.y > 0) {
                    let idSplit = entries[0].target.id.split("-");
                    let projIndex = Number(idSplit[2]);
                    //add class to project container
                    let projectDoc = document.getElementById(`project-item-${projIndex}`);
                    projectDoc.classList.add("display");
                } 
            }
        }, options2);
            sectionNext.observe(document.getElementById(`proj-listener-${props.projectData.id}`));
            // sectionNext.observe(document.getElementById("proj-listener-1"));
            // sectionNext.observe(document.getElementById("proj-listener-2"));
            // sectionNext.observe(document.getElementById("proj-listener-3"));
  
        }
      });

    if (props.projectData.class === "project-item-a") {
        return (
            <div id={`project-item-${props.projectData.id}`} className={props.projectData.class}>
                <div id={`proj-listener-${props.projectData.id}`} className={`pl-${props.projectData.id}`}>0</div>

                <img className={`project-img-${props.projectData.id}`} src={props.projectData.imgSrc} alt={props.projectData.imgAlt}></img>

                <div className="project-content">
                    <div className="project-content-container">
                        <p className="project-title">{props.projectData.title}</p>
                        <p className="project-desc">{props.projectData.desc}</p>
                        <div className="project-links">
                            <a className="project-btn" href={props.projectData.demoUrl}>
                                <p>Live Demo</p>
                            </a>
                            <a className="project-btn" href={props.projectData.codeUrl}>
                                <p>See Code</p>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        );
    } else {
        return (
            <div id={`project-item-${props.projectData.id}`} className={props.projectData.class}>
                <div id={`proj-listener-${props.projectData.id}`} className={`pl-${props.projectData.id}`}>0</div>
                <div className="project-content">
                    <div className="project-content-container">
                        <p className="project-title">{props.projectData.title}</p>
                        <p className="project-desc">{props.projectData.desc}</p>
                        <div className="project-links">
                            <a className="project-btn" href={props.projectData.demoUrl}>
                                <p>Live Demo</p>
                            </a>
                            <a className="project-btn" href={props.projectData.codeUrl}>
                                <p>See Code</p>
                            </a>
                        </div>
                    </div>
                </div>

                <img className={`project-img-${props.projectData.id}`} src={props.projectData.imgSrc} alt={props.projectData.imgAlt}></img>

            </div>
        );
    }
}

export default Project;