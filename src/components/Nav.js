import {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import '../styles/Nav.css';

import { ReactComponent as LinkedInSvg } from "../images/linkedin.svg";
import { ReactComponent as GithubSvg } from "../images/github.svg";



function Nav(props) {
    //props.links
    //props.switchTheme
    // const [navClass, setNavClass] = useState(["nav-bar, hidden"])
    const [linkSelections, setLinkSelections] = useState(["home","about","projects","contact"]);


    const scrollClick = (e) => {
        e.preventDefault();
        // console.log("scroll to section");
        let target = e.target.getAttribute("href");
        let scrollLoc = document.querySelector(target).offsetTop;
        let navOffset = document.getElementById("nav-bar").offsetHeight;
        window.scrollTo({
            left: 0,
            top: scrollLoc-navOffset,
        });
        // selectLink(e.target);
    }

    const resetLinkSelect = () => {
        let allLinks = document.querySelectorAll("a[id^='nav-link']");
        // console.log(allLinks);
        for (let i=0; i<allLinks.length; i++) {
            allLinks[i].classList = "";
        };
    }


    useEffect(() => { //Nav "hidden" styling
        let options = {
            root: document.querySelector('#scrollArea'),
            rootMargin: '0px',
            threshold: 1.0,
          }
        if ( //checking to see if browser supports Intersection Observer
            "IntersectionObserver" in window &&
            "IntersectionObserverEntry" in window &&
            "intersectionRatio" in window.IntersectionObserverEntry.prototype
          ) {
          let observer = new IntersectionObserver(entries => {
            console.log(entries);
            if (entries[0].boundingClientRect.y < 0) {
                document.getElementById("nav-bar").classList.remove("hidden");
            } else {
                document.getElementById("nav-bar").classList.add("hidden");
            }
        }, options);
            observer.observe(document.getElementById("top-of-site-pixel-anchor"));
        }
    });


    useEffect(() => { //Section Selection Styling
        let options2 = {
            root: document.querySelector('#scrollArea'),
            rootMargin: '0px',
            threshold: 1.0,
          }
        if ( //checking to see if browser supports Intersection Observer
            "IntersectionObserver" in window &&
            "IntersectionObserverEntry" in window &&
            "intersectionRatio" in window.IntersectionObserverEntry.prototype
          ) {
          let sectionNext = new IntersectionObserver(entries => {
            //remove selected elements from all 
            console.log(entries[0]);
            if (entries[0].intersectionRatio > 0.75) {
                if (entries[0].boundingClientRect.y > 0) {
                    console.log("switch selection");
                    console.log(entries, entries[0].boundingClientRect.y);
                    resetLinkSelect()
                    let idSplit = entries[0].target.id.split("-");
                    let index = Number(idSplit[2]);
                    console.log(index);
                    console.log("Select", entries[0].target.classList);
                    document.getElementById(`nav-link-${linkSelections[index]}`).classList.add("selected");
                } 
            }
        }, options2);
            sectionNext.observe(document.getElementById("section-inc-0"));
            sectionNext.observe(document.getElementById("section-inc-1"));
            sectionNext.observe(document.getElementById("section-inc-2"));
            sectionNext.observe(document.getElementById("section-inc-3"));
            // sectionNext.observe(document.getElementById("section-inc-4"));
        }
    });




    return (
        <div id="nav-bar" className={"nav-bar hidden"}>
            <ul className="nav-bar-left">
                <div id="theme-toggle" class = 'toggle-switch'>
                    <input onClick={props.switchTheme} className="tog-input" type="checkbox" id="switch" />
                    <label className="tog-label" for="switch">Toggle</label>
                </div>
            </ul>
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
