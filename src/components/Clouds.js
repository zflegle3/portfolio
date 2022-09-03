import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect } from 'react';

function Clouds(props) {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    //props.xCount
    //props.yCount
    //props.xOffset
    //props.yOffset
    //props.type
    //props.randInterval
    //props.delayInterval

    const hideCloud = (e) => {
        console.log(e.target)
        e.target.className = `${props.type} hide`;
    }

    const showCloud = (e) => {
        console.log(e.target)
        setTimeout(() => {
            e.target.className = `${props.type}`;
          }, props.delayInterval);
    }

    const pickCloud = () => {
        // console.log("picking a cloud");
        //set a timer to callcloud pop every second to highlight a different cloud
        //lower or increase opacity randomly 
        let topRand = Math.floor(Math.random() * props.yCount);
        let leftRand = Math.floor(Math.random() * props.xCount);
        let typeRand = Math.floor(Math.random()* 2);
        // console.log(typeRand);
        let cloudSelect = document.getElementById(`${props.type}-${topRand}-${leftRand}`)
        // console.log(cloudSelect);
        if (typeRand === 0) {
            cloudSelect.className = `${props.type} hide`;
        } else {
            cloudSelect.className = `${props.type} highlight`;
        }
        setTimeout(() => {
            cloudSelect.className = `${props.type}`;
          }, props.delayInterval);
    }

    useEffect(() => {
        console.log(`initializing interval`);
        const interval = setInterval(() => {
          pickCloud();
        }, props.randInterval);
      
        return () => {
          console.log(`clearing interval`);
          clearInterval(interval);
        };
    }, []); // has no dependency - this will be called on-component-mount



    let cloudCoords=[];
    for (let i=0; i<props.xCount; i++) {//left coord
        for (let j=0; j<props.yCount; j++) {//top coord
            let coords ={
                left: i,
                top: j,
                d: Math.floor(Math.random()* 10)+10,
                color: Math.floor(Math.random()* 55)+200,
            }
            cloudCoords.push(coords);
        }
    }
    console.log(cloudCoords);
    let cloudsAll = cloudCoords.map((cloud) => 
        <div key={uuidv4()} className={`${props.type}`} id={`${props.type}-${cloud.top}-${cloud.left}`} onMouseEnter={hideCloud} onMouseLeave={showCloud}  style={{
            width:`${cloud.d}%`,
            height:`${cloud.d}%`,
            color:"blue",
            top:`${(cloud.top*props.yOffset)}%`,
            left:`${(cloud.left*props.xOffset)}%`,
        }}></div>
    );

  return (
    <div className="clouds">
        {cloudsAll}
    </div>
  );
}

export default Clouds;
