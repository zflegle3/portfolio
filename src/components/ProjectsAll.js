//React
import {useState, useEffect} from "react";
//Components
import Project from "./Project";
import ProjectMobile from "./ProjectMobile";
//WebPs
import weatherAppImg from "../images/project-images/weather.png"
// import battleshipAppImg from "../images/project-images/bs.webp";
import todoAppImg from "../images/project-images/to_do.png";
import waldoImg from "../images/project-images/waldo2.png";
import rpsImg from "../images/project-images/rps.png";
import landingImg from "../images/project-images/landing.png";
//GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ProjectsAll() {
    const [projectDataAll, setProjectDataAll] = useState([
      { id: "0",
      classTitle: "project-item-a",
      title: "To Do Task Tracker",
      desc: "A full-stack to-do list application to manage tasks and projects. Sign in using your google account to create new tasks, visualize your upcoming projects, and more.",
      codeUrl: "https://github.com/zflegle3/to-do-list",
      demoUrl: "https://zflegle3.github.io/to-do-list/",
      imgSrc: todoAppImg,
      imgAlt: "to do project demo image",
      tech: [["React","react"], ["SASS","sass"],["Firebase Authentication","firebase"], ["Firebase Cloud Firestore","firebase"] ]
      },
      { id: "1",
      classTitle: "project-item-b",
      title: "Bookmark Landing Page Challenge",
      desc: "An animated and fully responsive template for a company landing page. Built as part of a challenge to match a design file as closely as possible.",
      codeUrl: "https://github.com/zflegle3/landing-page",
      demoUrl: "https://zflegle3.github.io/landing-page",
      imgSrc: landingImg,
      imgAlt: "landing page project demo image",
      tech: [["React","react"], ["React Router","react"], ["SASS","sass"] ]
      },
      { id: "2",
      // imgId: "project-img-0",
      classTitle: "project-item-a",
      title: "Where's Waldo Game App",
      desc: "A full-stack web application to play Where's Waldo and compare high scores. Built as part of The Odin Project Fullstack JavaScript curriculum to practice using a BaaS to store data.",
      codeUrl: "https://github.com/zflegle3/where-is-waldo",
      demoUrl: "https://zflegle3.github.io/where-is-waldo/",
      imgSrc: waldoImg,
      imgAlt: "where's waldo game app project demo image",
      tech: [["React","react"], ["React Router","react"], ["CSS","css"],["Firebase Cloud Firestore","firebase"]]
    },
    { id: "3",
    // imgId: "project-img-1",
    classTitle: "project-item-b",
    title: "Live Weather Widget",
    desc: "A live weather application to display the current weather conditions at the location searched. Users can easily switch color themes and display units.",
    codeUrl: "https://github.com/zflegle3/weather-app",
    demoUrl: "https://zflegle3.github.io/weather-app/",
    imgSrc: weatherAppImg,
    imgAlt: "live weather app demo image",
    tech: [["HTML","html"], ["CSS","css"], ["JavaScript","javascript"], ["Npm","npm"],["Webpack","webpack"],["OpenWeather API","api"]]
    },
    { id: "4",
    // imgId: "project-img-1",
    classTitle: "project-item-a",
    title: "Rock Paper Scissors Game App",
    desc: "An animated and fully responsive Rock Paper Scissors game application. Built as part of a challenge to match a design file as closely as possible.",
    codeUrl: "https://github.com/zflegle3/rock-paper-scissors-game",
    demoUrl: "https://zflegle3.github.io/rock-paper-scissors-game/",
    imgSrc: rpsImg,
    imgAlt: "rock paper scissors game app demo image",
    tech: [["React","react"], ["React Router","react"], ["SASS","sass"]]
  },
    ]);

    useEffect(() => {
      //section Fade In
      gsap.to(".project-header", {
          scrollTrigger: {
              trigger: "#projects",
              start: "-10% center",
              end: "bottom top",
              // markers: true,
              toggleActions: "play none none none",
          },
          duration: 1,
          y: 0,
          opacity: 1,
      });
  
    },[]);


    let vw = window.innerWidth;
    if (vw > 480) {
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
            <Project projectData={projectDataAll[4]}/>
        </div>
      );
    } else {
      return (
        <div id="projects">
            <div className="project-header">
              <div className="project-section-title">
                <p className="about-title">Projects</p>
                <div className="section-break"></div>
              </div>
            </div>
            <ProjectMobile projectData={projectDataAll[0]}/>
            <ProjectMobile projectData={projectDataAll[1]}/>
            <ProjectMobile projectData={projectDataAll[2]}/>
            <ProjectMobile projectData={projectDataAll[3]}/>
            <ProjectMobile projectData={projectDataAll[4]}/>
        </div>
      );
    }
}

export default ProjectsAll;
