import {useState, useEffect} from "react";

// import CloudsRow from "./CloudsRow"
import CloudSvg from "./CloudSvg"
import CloudsBackSvg from "./CloudBackSvg";


function CloudsAll(props) {
    return (
        <div className='cloud-container'>
            <CloudSvg n={1} seedVal={Math.floor(Math.random() * (10000 - 0 + 1))} heightVal={20} widthVal={35} leftVal={0} topVal={0} />
            <CloudSvg n={2} seedVal={Math.floor(Math.random() * (10000 - 0 + 1))} heightVal={25} widthVal={15} leftVal={0} topVal={5} />
            <CloudSvg n={3} seedVal={Math.floor(Math.random() * (10000 - 0 + 1))} heightVal={30} widthVal={25} leftVal={0} topVal={15} />
            <CloudSvg n={4} seedVal={Math.floor(Math.random() * (10000 - 0 + 1))} heightVal={20} widthVal={35} leftVal={0} topVal={25} />
            <CloudSvg n={5} seedVal={Math.floor(Math.random() * (10000 - 0 + 1))} heightVal={25} widthVal={25} leftVal={0} topVal={35} />
            <CloudSvg n={6} seedVal={Math.floor(Math.random() * (10000 - 0 + 1))} heightVal={30} widthVal={25} leftVal={0} topVal={45} />
            <CloudSvg n={7} seedVal={Math.floor(Math.random() * (10000 - 0 + 1))} heightVal={30} widthVal={25} leftVal={0} topVal={55} />
            <CloudsBackSvg />
        </div>
      );
}

export default CloudsAll;
