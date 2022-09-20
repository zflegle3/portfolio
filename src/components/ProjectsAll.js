import {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';

// import { ReactComponent as LinkedInSvg } from "../images/linkedin.svg";
// import { ReactComponent as GithubSvg } from "../images/github.svg";

import Project from "./Project";

import weatherAppImg from "../images/project-images/weather-app.png"
import battleshipAppImg from "../images/project-images/battleship.png"
import todoAppImg from "../images/project-images/to-do-app.png"

function ProjectsAll(props) {
    // const [linkSelections, setLinkSelections] = useState(["home","about","projects","contact"]);

    const [projectDataAll, setProjectDataAll] = useState([
        { id: "project-item",
        class: "project-item-a",
        title: "Live Weather App",
        desc: "A weather application that displays the current weather conditions at the location searched",
        codeUrl: "https://github.com/zflegle3/weather-app",
        demoUrl: "https://zflegle3.github.io/weather-app/",
        imgSrc: weatherAppImg,
        imgAlt: "weather app project demo image",
      },
        { id: "project-item",
        class: "project-item-b",
        title: "Battleship App",
        desc: "A game application that plays battleship against a computer AI",
        codeUrl: "https://github.com/zflegle3/battleship",
        demoUrl: "https://zflegle3.github.io/battleship/",
        imgSrc: battleshipAppImg,
        imgAlt: "battleship project demo image",
      },
      { id: "project-item",
      class: "project-item-a",
      title: "To Do List App",
      desc: "A to do list application to allow users to sign in using their google account, to create new tasks or projects, to display all tasks or sort by project, and to update tasks as they are completed",
      codeUrl: "https://github.com/zflegle3/to-do-list",
      demoUrl: "https://zflegle3.github.io/to-do-list/",
      imgSrc: todoAppImg,
      imgAlt: "to-do project demo image",
    },
      ])


    // let projectDivs = projectDataAll.map((projectData) => 
    //     <Project key={uuidv4()} projectData={projectData}/>
    // );

    return (
        <div id="projects">
            <div className="project-header">
                <p className="about-title">Projects</p>
                <div className="section-break"></div>
            </div>
            <Project projectData={projectDataAll[0]}/>
            <Project projectData={projectDataAll[1]}/>
            <Project projectData={projectDataAll[2]}/>
            <div></div>
        </div>

    );
}

export default ProjectsAll;
