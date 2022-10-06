//React
import {useEffect} from "react";
//UUID
import { v4 as uuidv4 } from 'uuid';
//Styles
import '../styles/Nav.css';
//Components
import { ReactComponent as LightOutSvg } from "../images/light-fill.svg";
import { ReactComponent as DarkOutSvg } from "../images/dark-out.svg";
//GSAP
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Nav(props) {
    //props.links
    //props.switchTheme  

    const scrollClick = (e) => {
        e.preventDefault();
        let target = e.target.getAttribute("href");
        let scrollLoc = document.querySelector(target).offsetTop;
        let navOffset = document.getElementById("nav-bar").offsetHeight;
        let screenW = window.innerWidth;
        if (screenW > 600) {
            window.scrollTo({
                left: 0,
                top: scrollLoc-navOffset,
            });
        } else {
            window.scrollTo({
                left: 0,
                top: scrollLoc,
            });
        }
    }

    const resetLink = (linkId) => {
        document.getElementById(`nav-link-${linkId}`).classList = "";
    }

    const selectLink = (linkId) => {
        document.getElementById(`nav-link-${linkId}`).classList.add("selected");
    }

    const hideNav = () => {
        document.getElementById("nav-bar").classList.remove("contrast")
    }

    const showNav = () => {
        document.getElementById("nav-bar").classList.add("contrast")
    }

    const switchTheme = (e) => {
        let themeBtns = document.querySelectorAll(".nav-btn");
        for (let i=0; i< themeBtns.length; i++) {
            let selected = themeBtns[i];
            selected.classList.remove("selected");
        };;
        e.target.classList.add("selected");
        let app = document.querySelector(".App");
        if (e.target.id === "light") {
            app.classList.remove("darkMode");
        } else {
            app.classList.add("darkMode")
        }
    }

    useEffect(() => {

        ScrollTrigger.create({
            trigger: "#home",
            start: "top center",
            end: "bottom center",
            // markers: true,
            onEnter: () => selectLink("home"),
            onLeave: () => resetLink("home"),
            onEnterBack: () => selectLink("home"),
            onLeaveBack: () => resetLink("home"),
        })

        ScrollTrigger.create({
            trigger: "#about",
            start: "top center",
            end: "bottom center",
            // markers: true,
            onEnter: () => selectLink("about"),
            onLeave: () => resetLink("about"),
            onEnterBack: () => selectLink("about"),
            onLeaveBack: () => resetLink("about"),
        })

        ScrollTrigger.create({
            trigger: "#projects",
            start: "top center",
            end: "bottom center",
            // markers: true,
            onEnter: () => selectLink("projects"),
            onLeave: () => resetLink("projects"),
            onEnterBack: () => selectLink("projects"),
            onLeaveBack: () => resetLink("projects"),
        })

        ScrollTrigger.create({
            trigger: "#contact",
            start: "top center",
            end: "bottom center",
            // markers: true,
            onEnter: () => selectLink("contact"),
            onLeave: () => resetLink("contact"),
            onEnterBack: () => selectLink("contact"),
            onLeaveBack: () => resetLink("contact"),
        })

        if (window.screen.width > 800) {
            ScrollTrigger.create({
                trigger: "#home",
                start: "bottom 100px",
                end: "bottom top",
                // markers: true,
                onEnter: () => showNav(),
                onEnterBack: () => hideNav(),
            })
        } else {
            showNav();
        }
    },[]);


    return (
        <div id="nav-bar" className={"nav-bar"}>
            <div className="nav-bar-left">
                <button id="light" className="nav-btn" onClick={switchTheme}>
                    <LightOutSvg id="light"  className="light-svg" onClick={e=> e.stopPropagation() }/>
                </button>
                <button id="dark" className="nav-btn" onClick={switchTheme}>
                    <DarkOutSvg id="dark" className="dark-svg" fill='red' onClick={e=> e.stopPropagation()}/>
                </button>
            </div>
            <ul className="nav-bar-list">
                {props.links.map((link) => 
                    <li key={uuidv4()}>
                        <a href={link.url} id={link.id} onClick={scrollClick}>{link.text}</a>
                    </li>
                )}
            </ul>
        </div>

    );
}

export default Nav;
