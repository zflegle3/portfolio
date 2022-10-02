import {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';

import '../styles/Nav.css';
import { ReactComponent as LightOutSvg } from "../images/light-fill.svg";
import { ReactComponent as DarkOutSvg } from "../images/dark-out.svg";

function Nav(props) {
    //props.links
    //props.switchTheme
    const [linkSelections, setLinkSelections] = useState(["home","about","projects","contact"]);
    

    const scrollClick = (e) => {
        e.preventDefault();
        let target = e.target.getAttribute("href");
        let scrollLoc = document.querySelector(target).offsetTop;
        let navOffset = document.getElementById("nav-bar").offsetHeight;
        let screenW = window.innerWidth;
        // console.log(screenW);
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

    const resetLinkSelect = () => {
        let allLinks = document.querySelectorAll("a[id^='nav-link']");
        for (let i=0; i<allLinks.length; i++) {
            allLinks[i].classList = "";
        };
    }

    useEffect(() => { //Nav "hidden" styling
        let options = {
            root: document.querySelector('#scrollArea'),
            rootMargin: '0px',
            threshold: 1.0,
        };
        if (
            "IntersectionObserver" in window &&
            "IntersectionObserverEntry" in window &&
            "intersectionRatio" in window.IntersectionObserverEntry.prototype
          ) {
          let observer = new IntersectionObserver(entries => {
            if (entries[0].boundingClientRect.y < 0) {
                document.getElementById("nav-bar").classList.remove("hidden");
            } else {
                document.getElementById("nav-bar").classList.add("hidden");
            }
        }, options);
            observer.observe(document.getElementById("top-of-site-pixel-anchor"));
        };
    });


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
                    resetLinkSelect(); // removes class from all links
                    let idSplit = entries[0].target.id.split("-");
                    let index = Number(idSplit[2]);
                    document.getElementById(`nav-link-${linkSelections[index]}`).classList.add("selected");
                } 
            }
        }, options2);
            sectionNext.observe(document.getElementById("section-inc-0"));
            sectionNext.observe(document.getElementById("section-inc-1"));
            sectionNext.observe(document.getElementById("section-inc-2"));
            sectionNext.observe(document.getElementById("section-inc-3"));
        }
    });

    const switchTheme = (e) => {
        let themeBtns = document.querySelectorAll(".nav-btn");
        for (let i=0; i< themeBtns.length; i++) {
            // themeBtns[i]className.remove("selected");
            let selected = themeBtns[i];
            selected.classList.remove("selected");
            console.log(selected);
        };;
        e.target.classList.add("selected");
        console.log(e.target.classList);
        let app = document.querySelector(".App");
        if (e.target.id === "light") {
            app.classList.remove("darkMode");
        } else {
            app.classList.add("darkMode")
        }
    }


    return (
        <div id="nav-bar" className={"nav-bar hidden"}>
            <div className="nav-bar-left">
                <button id="light" className="nav-btn" onClick={switchTheme}>
                    <LightOutSvg id="light"  className="light-svg" onClick={e=> e.stopPropagation() }/>
                </button>
                <button id="dark" className="nav-btn" onClick={switchTheme}>
                    <DarkOutSvg id="dark" className="dark-svg" fill='red' onClick={e=> e.stopPropagation()}/>
                </button>
                {/* <div id="theme-toggle" className = 'toggle-switch'>
                    <input onClick={props.switchTheme} className="tog-input" type="checkbox" id="switch" />
                    <label className="tog-label" htmlFor="switch">Toggle</label>
                </div> */}
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
