import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CloudSvg from "./CloudSvg"




function CloudsRow(props) {
    // props.rowIndex
    // props.rowQty
    let rowData = []
    for (let i=0; i< props.rowQty; i++) {
        rowData.push({
            top: props.rowIndex*props.heightFactor,
            left: (i*(100/props.rowQty))-5,
            seedVal: Math.random()*10000,
            id: uuidv4(),
        })
    }

    console.log(rowData);

    let rowClouds = rowData.map((cloudData) => <CloudSvg left={cloudData.left} top={cloudData.top} seedVal={cloudData.seedVal} id={cloudData.id} />)

    // const hideCloud = (cloudEl) => {

    // }


    // useEffect(() => {
    //     console.log(`initializing interval`);
    //     const interval = setInterval(() => {
    //       pickCloud();
    //     }, props.randInterval);
      
    //     return () => {
    //       console.log(`clearing interval`);
    //       clearInterval(interval);
    //     };
    // }, []);
    
    return (
        <div className={`clouds-row-${props.rowIndex}`}>
            {rowClouds}
        </div>
    );
}

export default CloudsRow;