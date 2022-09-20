import {useState, useEffect} from "react";

import CloudsRow from "./CloudsRow"
import CloudSvg from "./CloudSvg"



function CloudsAll(props) {
    const [selectedCloud, setSelectedCloud] = useState(-1);
    const[randFactor, setRandFactor] = useState(5)
    const[cloudData, setCloudData] = useState([
        // {   id: 0,
        //     top: 0 + Math.floor(Math.random() * (randFactor*2 + 1) - randFactor),
        //     left: (100/3)*0,
        //     width: 100/3,
        //     height: 100/4,
        //     seedVal: Math.random()*10000,
        // },
        // {   id: 1,
        //     top: 0 + Math.floor(Math.random() * (randFactor*2 + 1) - randFactor),
        //     left: (100/3)*1,
        //     width: 100/3,
        //     height: 100/4,
        //     seedVal: Math.random()*10000,
        // },
        // {   id: 2,
        //     top: 0 + Math.floor(Math.random() * (randFactor*2 + 1) - randFactor),
        //     left: (100/3)*2,
        //     width: 100/3,
        //     height: 100/4,
        //     seedVal: Math.random()*10000,
        // },
        // {   id: 3,
        //     top: (100/4) + Math.floor(Math.random() * (randFactor*2 + 1) - randFactor),
        //     left: (100/4)*0,
        //     width: 100/4,
        //     height: 100/4,
        //     seedVal: Math.random()*10000,
        // },
        {   id: 0,
            top: (100/4) + Math.floor(Math.random() * (randFactor*2 + 1) - randFactor),
            left: (100/4)*1,
            width: 100/4 + Math.floor(Math.random() * (randFactor*2 + 1) - randFactor),
            height: 100/4 + Math.floor(Math.random() * (randFactor*2 + 1) - randFactor),
            seedVal: Math.random()*10000,
        },
        {   id: 1,
            top: (100/4) + Math.floor(Math.random() * (randFactor*2 + 1) - randFactor),
            left: (100/4)*2,
            width: 100/4 + Math.floor(Math.random() * (randFactor*2 + 1) - randFactor),
            height: 100/4 + Math.floor(Math.random() * (randFactor*2 + 1) - randFactor),
            seedVal: Math.random()*10000,
        },
        // {   id: 6,
        //     top: (100/4) + Math.floor(Math.random() * (randFactor*2 + 1) - randFactor),
        //     left: (100/4)*3,
        //     width: 100/4,
        //     height: 100/4,
        //     seedVal: Math.random()*10000,
        // },
        // {   id: 7,
        //     top: (100/4)*2 + Math.floor(Math.random() * (randFactor*2 + 1) - randFactor),
        //     left: (100/4)*0,
        //     width: 100/4,
        //     height: 100/4,
        //     seedVal: Math.random()*10000,
        // }
        {   id: 2,
            top: (100/4)*2 + Math.floor(Math.random() * (randFactor*2 + 1) - randFactor),
            left: (100/4)*1,
            width: 100/4 + Math.floor(Math.random() * (randFactor*2 + 1) - randFactor),
            height: 100/4 + Math.floor(Math.random() * (randFactor*2 + 1) - randFactor),
            seedVal: Math.random()*10000,
        },
        {   id: 3,
            top: (100/4)*2 + Math.floor(Math.random() * (randFactor*2 + 1) - randFactor),
            left: (100/4)*2,
            width: 100/4 + Math.floor(Math.random() * (randFactor*2 + 1) - randFactor),
            height: 100/4 + Math.floor(Math.random() * (randFactor*2 + 1) - randFactor),
            seedVal: Math.random()*10000,
        },
    ])

    const hideCloud = () => {
        let index = Math.floor(Math.random() * (3 + 1))
        console.log(index);
        let cloudSelected = document.querySelector(`.svg-cloud-${index}`);
        console.log(cloudSelected);
        cloudSelected.classList.toggle("hide-cloud")

    }


    useEffect(() => {
        console.log(`initializing interval`);
        const interval = setInterval(() => {
          hideCloud();
        }, 7000);
      
        return () => {
          console.log(`clearing interval`);
          clearInterval(interval);
        };
      }, []);





    
    

    console.log(cloudData);


    return (
        <div className="cloud-array">

            {/* <CloudSvg cloudData={cloudData[0]}/>
            <CloudSvg cloudData={cloudData[1]}/>
            <CloudSvg cloudData={cloudData[2]}/>
            <CloudSvg cloudData={cloudData[3]}/> */}
            <CloudSvg cloudData={cloudData[0]}/>
            <CloudSvg cloudData={cloudData[1]}/>
            {/* <CloudSvg cloudData={cloudData[6]}/> */}
            {/* <CloudSvg cloudData={cloudData[7]}/> */}
            <CloudSvg cloudData={cloudData[2]}/>
            <CloudSvg cloudData={cloudData[3]}/>
            {/* <CloudsRow rowIndex={0} rowQty={3} heightFactor={15}/> */}

            {/* <CloudsRow rowIndex={1} rowQty={4} heightFactor={15}/> */}

            {/* <CloudsRow rowIndex={2} rowQty={3} heightFactor={15}/> */}

            {/* <CloudsRow rowIndex={3} rowQty={4} heightFactor={15}/> */}

            {/* <CloudsRow rowIndex={4} rowQty={3} heightFactor={15}/> */}
 
            {/* <CloudsRow rowIndex={5} rowQty={4} heightFactor={10}/> */}
        </div>

    );
}

export default CloudsAll;
