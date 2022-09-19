import {gsap} from "gsap";
import React, { useState, useEffect, useRef } from 'react';
import "../styles/Projects.css"

import { ReactComponent as leftSvg } from "../images/left.svg";
import { ReactComponent as rightSvg } from "../images/right.svg";




function Projects() {
    // Transform value
    // let value = 0;
    const [value, setValue] = useState(0);
    // trail index number
    // let trailValue = 0;
    const [trailValue, setTrailValue] = useState(0);
    // interval (Duration)
    // let interval = 4000
    const [interval, setinterval] = useState(4000);

    const timeoutRef = useRef(null);



    // //*** need this to be called after Render somehow
    // // Slider(all Slides in a container)
    // // const slider = document.querySelector(".slider")
    // // All trails 
    // // const trail = document.querySelector(".trail").querySelectorAll("div")

    const slideClick = (e) => { 
        console.log(e.target.id);
        let condition = e.target.id;
        resetTimeout();
        slide (condition);
    }


    // Function to slide forward
    const slide = (condition) => {
        // Clear interval
        // clearInterval(start)
        // update value and trailValue
        condition === "increase" ? initiateInc() : initiateDec()
        // move slide

        // Restart Animation
        // animate()
        testAnimate()
        // start interal for slides back 
        // start = setInterval(() => slide("increase"), interval);
    }

    // function for increase(forward, next) configuration
    const initiateInc = () => {
        let trail = document.querySelector(".trail").querySelectorAll("div");
        // console.log(trail);
        // Remove active from all trails
        trail.forEach(cur => cur.classList.remove("active"));
        // increase transform value
        let currentValue = value;
        if (currentValue === 80) {
            setValue(0)
            trailUpdate(0);
        } else {
            setValue(currentValue+20)
            trailUpdate(currentValue+20);
        }
        // currentValue === 80 ? setValue(0) : setValue(currentValue+20);
        // update trailValue based on value
        // trailUpdate();
    }

    // function for decrease(backward, previous) configuration
    const initiateDec = () => {
        let trail = document.querySelector(".trail").querySelectorAll("div");
        // Remove active from all trails
        trail.forEach(cur => cur.classList.remove("active"))
        // decrease transform value
        let currentValue = value;
        // currentValue === 0 ? setValue(80) : setValue(currentValue-20);
        if (currentValue === 0) {
            setValue(80)
            trailUpdate(80);
        } else {
            setValue(currentValue-20)
            trailUpdate(currentValue-20);
        }
        // update trailValue based on value
        // trailUpdate()
    }

    // function to transform slide 
    const move = (S, T) => {
        let trail = document.querySelector(".trail").querySelectorAll("div");
        let slider = document.querySelector(".slider");
        // transform slider
        slider.style.transform = `translateX(-${S}%)`
        //add active class to the current trail
        trail[T].classList.add("active")
    }

    // const tl = gsap.timeline({defaults: {duration: 0.6, ease: "power2.inOut"}})
    // tl.from(".bg", {x: "-100%", opacity: 0})
    // .from("p", {opacity: 0}, "-=0.3")
    // .from("h1", {opacity: 0, y: "30px"}, "-=0.3")
    // .from("button", {opacity: 0, y: "-40px"}, "-=0.8")
    // function to restart animation 

    // const animate = () => tl.restart();

    const testAnimate = () => {
        console.log("Animate");
        // gsap.from(".bg", {duration: 0.7, ease: "power2.inOut", x: "-100%", opacity: 0});
        gsap.from(".fade-text", {duration: 0.5, delay: 1, ease: "power2.inOut", opacity: 0});
        gsap.from(".project-btn", {duration: 0.5, delay: 1, ease: "power2.inOut", opacity: 0});
        gsap.from(".slide-title", {duration: 1, delay: 0, ease: "power2.inOut", opacity: 0, y: "30px"});
    }

    // function to update trailValue based on slide value
    const trailUpdate = (newVal) => {
        let newTrailVal = 0;
        if (newVal === 0) {
            newTrailVal = 0;
        } else if (newVal === 20) {
            newTrailVal = 1;
        } else if (newVal === 40) {
            newTrailVal = 2;
        } else if (newVal === 60) { 
            newTrailVal = 3;
        } else {
            newTrailVal = 4;
        }
        setTrailValue(newTrailVal);
        move(newVal, newTrailVal);
    };


    // Start interval for slides
    // let start = setInterval(() => initiateInc(), interval);


    // // Next  and  Previous button function (SVG icon with different classes)
    // document.querySelectorAll("svg").forEach(cur => {
    //     // Assign function based on the class Name("next" and "prev")
    //     cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"))
    // });

    



    // function to slide when trail is clicked
    const clickCheck = (e) => {
        let trail = document.querySelector(".trail").querySelectorAll("div");
        // CLear interval
        resetTimeout();
        testAnimate();
        // clearInterval(start)
        // remove active class from all trails
        trail.forEach(cur => cur.classList.remove("active"))
        // Get selected trail
        const check = e.target;
        console.log(check.classList);
        // add active class
        check.classList.add("active");
        console.log(check.classList);

        // Update slide value based on the selected trail
        let newVal = 0;
        if(check.classList.contains("box1")) {
            newVal = 0;
        } else if (check.classList.contains("box2")) {
            newVal = 20;
        } else if (check.classList.contains("box3")) {
            newVal = 40;
        } else if (check.classList.contains("box4")) {
            newVal = 60;
        } else {
            newVal = 80;
        }
        setValue(newVal);
        trailUpdate(newVal)
        // transfrom slide
        // move(value, trailValue);
        // start animation
        // animate()
        // start interval
        // start = setInterval(() => slide("increase"), interval)
    }

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
    }



    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => slide("increase"), 6000
        );
        // gsap.from(".bg", {duration: 0.6, ease: "power2.inOut", x: "-100%", opacity: 0});
    })




    return (
        <div  id="projects" > 
            <div className="container">     
                <div className="slider">

                    <div className="box1 box">
                        <div id="background" className="bg"></div> 

                        <div className="details">
                            <h1 className="slide-title">I'm the first Box</h1>
                            <p className="fade-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit. Integer lacinia dui lectus. Donec scelerisque ipsum
                                diam, ac mattis orci pellentesque eget. 
                            </p>
                            <button className="project-btn">Live Demo</button>
                            <button className="project-btn">See Code</button>
                        </div>

                        <div className="illustration"><div className="inner"></div></div>
                    </div>
                                    

                    <div className="box2 box">
                        <div className="bg"></div>
                        <div className="details">
                            <h1 className="slide-title">I'm the second Box</h1>
                            <p className="fade-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit. Integer lacinia dui lectus. Donec scelerisque ipsum
                                diam, ac mattis orci pellentesque eget. 
                            </p>
                            <button className="project-btn">Check Now</button>
                        </div>

                        <div className="illustration"><div className="inner"></div></div>
                    </div>
                                    
                    <div className="box3 box">
                        <div className="bg"></div>
                        <div className="details">
                            <h1 className="slide-title">I'm the third Box</h1>
                            <p className="fade-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit. Integer lacinia dui lectus. Donec scelerisque ipsum
                                diam, ac mattis orci pellentesque eget. 
                            </p>
                            <button className="project-btn">Check Now</button>
                        </div>

                        <div className="illustration"><div className="inner"></div></div>
                    </div>
                                    
                    <div className="box4 box">
                        <div className="bg"></div>
                        <div className="details">
                            <h1 className="slide-title">I'm the fourth Box</h1>
                            <p className="fade-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit. Integer lacinia dui lectus. Donec scelerisque ipsum
                                diam, ac mattis orci pellentesque eget. 
                            </p>
                            <button className="project-btn">Check Now</button>
                        </div>

                        <div className="illustration"><div className="inner"></div></div>
                    </div>
                                    
                    <div className="box5 box">
                        <div className="bg"></div>
                        <div className="details">
                            <h1 className="slide-title">I'm the fifth Box</h1>
                            <p className="fade-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit. Integer lacinia dui lectus. Donec scelerisque ipsum
                                diam, ac mattis orci pellentesque eget. 
                            </p>
                            <button className="project-btn">Check Now</button>
                        </div>

                        <div className="illustration"><div className="inner"></div></div>
                    </div>
                                    
                </div>

                {/* <leftSvg /> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="prev" onClick={slideClick} id={"decrease"} width="56.898" height="91" viewBox="0 0 56.898 91"><path id={"decrease"} d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(0 91) rotate(-90)" fill="#fff"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="next" onClick={slideClick} id={"increase"} width="56.898" height="91" viewBox="0 0 56.898 91"><path id={"increase"}d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(56.898) rotate(90)" fill="#fff"/></svg>
                <div className="trail">
                    <div className="box1 active" onClick={clickCheck}>Tab 1</div>
                    <div className="box2" onClick={clickCheck}>Tab 2</div>
                    <div className="box3" onClick={clickCheck}>Tab 3</div>
                    <div className="box4" onClick={clickCheck}>Tab 4</div>
                    <div className="box5" onClick={clickCheck}>Tab 5</div>
                </div>

            </div>
        </div>
    );
};

export default Projects;
