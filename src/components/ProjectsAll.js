import {useState, useEffect} from "react";

import Project from "./Project";

import weatherAppImg from "../images/project-images/weather-app.png"
import battleshipAppImg from "../images/project-images/bs.png"
import todoAppImg from "../images/project-images/to-do-app.png"
import waldoImg from "../images/project-images/waldo.png"

function ProjectsAll(props) {
    const [projectDataAll, setProjectDataAll] = useState([
      { id: "2",
      // imgId: "project-img-2",
      class: "project-item-a",
      title: "To Do List App",
      desc: "A to do list application to keep track of projects and tasks. This application built with React and Firebase, allows users to sign in using their google account, create new tasks, organize tasks by project, and to update tasks as they are completed.",
      codeUrl: "https://github.com/zflegle3/to-do-list",
      demoUrl: "https://zflegle3.github.io/to-do-list/",
      imgSrc: todoAppImg,
      imgAlt: "to-do project demo image",
      tech: ["React", "Firebase Authentication", "Firebase Cloud Firestore","SASS" ]
      },
      { id: "3",
      // imgId: "project-img-3",
      class: "project-item-b",
      title: "Where's Waldo Phototagging App",
      desc: "A Where's Waldo game built using React, Firestore Database, and CSS.",
      codeUrl: "https://github.com/zflegle3/where-is-waldo",
      demoUrl: "https://zflegle3.github.io/where-is-waldo/",
      imgSrc: waldoImg,
      imgAlt: "where's waldo project demo image",
      tech: ["React", "Firebase Cloud Firestore","CSS" ]
      },
      { id: "0",
      // imgId: "project-img-0",
      class: "project-item-a",
      title: "Live Weather App",
      desc: "A live weather application built using OpenWeather API to display the current weather conditions at the location searched.",
      codeUrl: "https://github.com/zflegle3/weather-app",
      demoUrl: "https://zflegle3.github.io/weather-app/",
      imgSrc: weatherAppImg,
      imgAlt: "weather app project demo image",
      tech: ["React", "Firebase Authentication", "Firebase Cloud Firestore","SASS" ]
    },
      { id: "1",
      // imgId: "project-img-1",
      class: "project-item-b",
      title: "Battleship Game App",
      desc: "A game application that plays battleship against a computer AI. This project was built using Jest, JavaScript, CSS and HTML in order to practice Test Driven Development(TDD).",
      codeUrl: "https://github.com/zflegle3/battleship",
      demoUrl: "https://zflegle3.github.io/battleship/",
      imgSrc: battleshipAppImg,
      imgAlt: "battleship project demo image",
      tech: ["React", "Firebase Authentication", "Firebase Cloud Firestore","SASS" ]
    },
    ]);


    return (
        <div id="projects">
            <div id="section-inc-2" className='inc-2'>2</div>
            <div className="project-header">
                <p className="about-title">Projects</p>
                <div className="section-break"></div>
            </div>
            <Project projectData={projectDataAll[0]}/>
            <Project projectData={projectDataAll[1]}/>
            <Project projectData={projectDataAll[2]}/>
            <Project projectData={projectDataAll[3]}/>
        </div>

    );
}

export default ProjectsAll;
