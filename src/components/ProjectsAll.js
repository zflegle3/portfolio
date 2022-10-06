//React
import {useState} from "react";
//Components
import Project from "./Project";
// PNGs
// import weatherAppImg from "../images/project-images/weather-app.png"
// import battleshipAppImg from "../images/project-images/bs.png"
// import todoAppImg from "../images/project-images/to-do-app.png"
// import waldoImg from "../images/project-images/waldo.png"
//WebPs
import weatherAppImg from "../images/webps/weather-app.webp"
import battleshipAppImg from "../images/webps/bs.webp"
import todoAppImg from "../images/webps/to-do-app.webp"
import waldoImg from "../images/webps/waldo.webp"

function ProjectsAll() {
    const [projectDataAll, setProjectDataAll] = useState([
      { id: "0",
      // imgId: "project-img-2",
      class: "project-item-a",
      title: "To Do Task Tracker",
      desc: "To Do Tracker is a task tracking application that allows users to sign in using their google account, create new tasks, organize tasks by project, and to update tasks as they are completed. It was built in order to practice OOP (SOLID Principles) but was extended to also practice react hooks and  interfacing with a BaaS.",
      codeUrl: "https://github.com/zflegle3/to-do-list",
      demoUrl: "https://zflegle3.github.io/to-do-list/",
      imgSrc: todoAppImg,
      imgAlt: "to do project demo image",
      tech: ["React", "Firebase Authentication", "Firebase Cloud Firestore","SASS" ]
      },
      { id: "1",
      // imgId: "project-img-3",
      class: "project-item-b",
      title: "Where's Waldo Photo Tagging Game",
      desc: "This web application allows users to play the classic Where's Waldo game by selecting locations on a photo where they think the three hidden characters are located. The project was built in order to practice using Google Firebase to store data like user high scores and character coordinates.",
      codeUrl: "https://github.com/zflegle3/where-is-waldo",
      demoUrl: "https://zflegle3.github.io/where-is-waldo/",
      imgSrc: waldoImg,
      imgAlt: "where's waldo project demo image",
      tech: ["React","React Router", "Firebase Cloud Firestore", "CSS" ]
      },
      { id: "2",
      // imgId: "project-img-0",
      class: "project-item-a",
      title: "Live Weather Widget",
      desc: "The Live Weather Widget displays the current weather conditions at the location searched by the user.  Users can also toggle between metric and imperial units. It was developed using Open Weather API in order to practice asynchronous code, fetching data from APIs, and OOP (SOLID) principles.",
      codeUrl: "https://github.com/zflegle3/weather-app",
      demoUrl: "https://zflegle3.github.io/weather-app/",
      imgSrc: weatherAppImg,
      imgAlt: "weather app project demo image",
      tech: ["JavaScript", "CSS", "HTML","Open Weather API" ]
    },
      { id: "3",
      // imgId: "project-img-1",
      class: "project-item-b",
      title: "Battleship Game vs Computer AI",
      desc: "The game application lets users test their skills in playing battleship versus a computer AI. The project was built in order to practice Test Driven Development (TDD) using jest.",
      codeUrl: "https://github.com/zflegle3/battleship",
      demoUrl: "https://zflegle3.github.io/battleship/",
      imgSrc: battleshipAppImg,
      imgAlt: "battleship project demo image",
      tech: ["JavaScript", "HTML", "CSS","SASS","Npm","Webpack","Jest"]
    },
    ]);

    return (
        <div id="projects">
            <div className="project-header">
              <div className="project-section-title">
                <p className="about-title">Projects</p>
                <div className="section-break"></div>
              </div>
            </div>
            <Project projectData={projectDataAll[0]}/>
            <Project projectData={projectDataAll[1]}/>
            <Project projectData={projectDataAll[2]}/>
            <Project projectData={projectDataAll[3]}/>
        </div>

    );
}

export default ProjectsAll;
