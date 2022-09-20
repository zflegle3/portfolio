import {useState, useEffect} from "react";

import Project from "./Project";

import weatherAppImg from "../images/project-images/weather-app.png"
import battleshipAppImg from "../images/project-images/bs.png"
import todoAppImg from "../images/project-images/to-do-app.png"

function ProjectsAll(props) {
    const [projectDataAll, setProjectDataAll] = useState([
        { id: "project-item",
        class: "project-item-a",
        title: "Live Weather App",
        desc: "A live weather application built using OpenWeather API to display the current weather conditions at the location searched.",
        codeUrl: "https://github.com/zflegle3/weather-app",
        demoUrl: "https://zflegle3.github.io/weather-app/",
        imgSrc: weatherAppImg,
        imgAlt: "weather app project demo image",
      },
        { id: "project-item",
        class: "project-item-b",
        title: "Battleship Game App",
        desc: "A game application that plays battleship against a computer AI. This project was built using Jest, JavaScript, CSS and HTML in order to practice Test Driven Development(TDD).",
        codeUrl: "https://github.com/zflegle3/battleship",
        demoUrl: "https://zflegle3.github.io/battleship/",
        imgSrc: battleshipAppImg,
        imgAlt: "battleship project demo image",
      },
      { id: "project-item",
      class: "project-item-a",
      title: "To Do List App",
      desc: "A to do list application to keep track of projects and tasks. This application built with React and Firebase, allows users to sign in using their google account, create new tasks, organize tasks by project, and to update tasks as they are completed.",
      codeUrl: "https://github.com/zflegle3/to-do-list",
      demoUrl: "https://zflegle3.github.io/to-do-list/",
      imgSrc: todoAppImg,
      imgAlt: "to-do project demo image",
    },
      ])

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
