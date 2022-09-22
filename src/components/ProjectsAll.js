import {useState, useEffect} from "react";

import Project from "./Project";

import weatherAppImg from "../images/project-images/weather-app.png"
import battleshipAppImg from "../images/project-images/bs.png"
import todoAppImg from "../images/project-images/to-do-app.png"
import waldoAppGif from "../images/project-images/waldo_test2.gif"

function ProjectsAll(props) {
    const [projectDataAll, setProjectDataAll] = useState([
        { id: "project-item-0",
        class: "project-item-a",
        title: "Live Weather App",
        desc: "A live weather application built using OpenWeather API to display the current weather conditions at the location searched.",
        codeUrl: "https://github.com/zflegle3/weather-app",
        demoUrl: "https://zflegle3.github.io/weather-app/",
        imgSrc: weatherAppImg,
        imgAlt: "weather app project demo image",
      },
        { id: "project-item-1",
        class: "project-item-b",
        title: "Battleship Game App",
        desc: "A game application that plays battleship against a computer AI. This project was built using Jest, JavaScript, CSS and HTML in order to practice Test Driven Development(TDD).",
        codeUrl: "https://github.com/zflegle3/battleship",
        demoUrl: "https://zflegle3.github.io/battleship/",
        imgSrc: battleshipAppImg,
        imgAlt: "battleship project demo image",
      },
      { id: "project-item-2",
      class: "project-item-a",
      title: "To Do List App",
      desc: "A to do list application to keep track of projects and tasks. This application built with React and Firebase, allows users to sign in using their google account, create new tasks, organize tasks by project, and to update tasks as they are completed.",
      codeUrl: "https://github.com/zflegle3/to-do-list",
      demoUrl: "https://zflegle3.github.io/to-do-list/",
      imgSrc: todoAppImg,
      imgAlt: "to-do project demo image",
      },
      { id: "project-item-3",
      class: "project-item-b",
      title: "Where's Waldo Phototagging App",
      desc: "A Where's Waldo game built using React, Firestore Database, and CSS.",
      codeUrl: "https://github.com/zflegle3/where-is-waldo",
      demoUrl: "https://zflegle3.github.io/where-is-waldo/",
      imgSrc: waldoAppGif,
      imgAlt: "where's waldo project demo image",
      },
    ]);


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
          sectionNext.observe(document.getElementById("proj-listener-0"));
          sectionNext.observe(document.getElementById("proj-listener-1"));
          sectionNext.observe(document.getElementById("proj-listener-2"));
          sectionNext.observe(document.getElementById("proj-listener-3"));

      }
    });

    return (
        <div id="projects">
            <div className="project-header">
                <p className="about-title">Projects</p>
                <div className="section-break"></div>
            </div>
            <Project projectData={projectDataAll[0]}/>
            <Project projectData={projectDataAll[1]}/>
            <Project projectData={projectDataAll[2]}/>
            <Project projectData={projectDataAll[3]}/>
            <div id="proj-listener-0" className='pl-0'>0</div>
            <div id="proj-listener-1" className='pl-1'>1</div>
            <div id="proj-listener-2" className='pl-2'>2</div>
            <div id="proj-listener-3" className='pl-3'>3</div>
            {/* <div id="proj-target" className='pt'></div> */}
        </div>

    );
}

export default ProjectsAll;
