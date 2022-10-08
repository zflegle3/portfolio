import { useEffect } from "react";
//Components
import CloudSvg from "./CloudSvg"
import CloudsBackSvg from "./CloudBackSvg";
//GSAP
import gsap from "gsap";
// import {ScrollTrigger} from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

import cloudTest from "../images/cloud-test-2.png"

function CloudsAll() {
    let titleBg;
    let mobileW = 2;
    if (window.screen.width > 800) {//Cloud Background on Desktop only
        titleBg = <CloudsBackSvg />
        mobileW = 1;
    }


    useEffect(() => {
        // Title Slide on Scroll Animation
        // gsap.to(".svg-cloud-1", {
        //     delay: 0,
        //     duration: 30,
        //     repeat: -1,
        //     ease: "none",
        //     x: `${window.screen.width*1.5}`,
        // });

        // gsap.to(".svg-cloud-2", {
        //     delay: 5,
        //     duration: 30,
        //     repeat: -1,
        //     ease: "none",
        //     x: `${window.screen.width*1.5}`,
        // });

        // gsap.to(".svg-cloud-3", {
        //     delay: 10,
        //     duration: 30,
        //     repeat: -1,
        //     ease: "none",
        //     x: `${window.screen.width*1.5}`,
        // });

        // gsap.to(".svg-cloud-4", {
        //     delay: 15,
        //     duration: 30,
        //     repeat: -1,
        //     ease: "none",
        //     x: `${window.screen.width*1.5}`,
        // });

        // gsap.to(".svg-cloud-5", {
        //     delay: 20,
        //     duration: 30,
        //     repeat: -1,
        //     ease: "none",
        //     x: `${window.screen.width*1.5}`,
        // });

        // gsap.to(".svg-cloud-6", {
        //     delay: 25,
        //     duration: 30,
        //     repeat: -1,
        //     ease: "none",
        //     x: `${window.screen.width*1.5}`,
        // });

        // gsap.to(".svg-cloud-7", {
        //     delay: 30,
        //     duration: 30,
        //     repeat: -1,
        //     ease: "none",
        //     x: `${window.screen.width*1.5}`,
        // });
      },[]);






    return (
        <div className='cloud-container'>
            {/* <CloudSvg n={1} seedVal={Math.floor(Math.random() * (10000 - 0 + 1))} heightVal={20} widthVal={35*mobileW} leftVal={50} topVal={0} />
            <CloudSvg n={2} seedVal={Math.floor(Math.random() * (10000 - 0 + 1))} heightVal={35} widthVal={45*mobileW} leftVal={0} topVal={10} />
            <CloudSvg n={3} seedVal={Math.floor(Math.random() * (10000 - 0 + 1))} heightVal={40} widthVal={25*mobileW} leftVal={0} topVal={20} />
            <CloudSvg n={4} seedVal={Math.floor(Math.random() * (10000 - 0 + 1))} heightVal={35} widthVal={35*mobileW} leftVal={0} topVal={30} />
            <CloudSvg n={5} seedVal={Math.floor(Math.random() * (10000 - 0 + 1))} heightVal={25} widthVal={25*mobileW} leftVal={0} topVal={40} />
            <CloudSvg n={6} seedVal={Math.floor(Math.random() * (10000 - 0 + 1))} heightVal={30} widthVal={25*mobileW} leftVal={0} topVal={50} />
            <CloudSvg n={7} seedVal={Math.floor(Math.random() * (10000 - 0 + 1))} heightVal={30} widthVal={25*mobileW} leftVal={0} topVal={60} /> */}
            {/* {titleBg} */}
            <CloudsBackSvg />
        </div>
      );
}

export default CloudsAll;
