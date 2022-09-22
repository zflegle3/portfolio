function Project(props) {
    //props.projectData

    if (props.projectData.class === "project-item-a") {
        return (
            <div id={props.projectData.id} className={props.projectData.class}>
                <div className="project-img" >
                    <img className={props.projectData.imgId} src={props.projectData.imgSrc} alt={props.projectData.imgAlt}></img>
                </div>

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
            <div id={props.projectData.id} className={props.projectData.class}>
                
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

                <div className="project-img" >
                    <img src={props.projectData.imgSrc} alt={props.projectData.imgAlt}></img>
                </div>

            </div>
        );
    }
}

export default Project;