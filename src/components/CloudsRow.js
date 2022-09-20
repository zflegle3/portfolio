import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CloudSvg from "./CloudSvg"




function CloudsRow(props) {
    // props.rowIndex
    // props.rowQty
    // props.heightFactor
    // props.
    let rowData = []
    for (let i=0; i< props.rowQty; i++) {
        rowData.push({
            top: Math.floor(Math.random() * (10 + 1) - 5),
            left: (i*(100/props.rowQty)),
            seedVal: Math.random()*10000,
            id: uuidv4(),
        })
    }

    console.log(rowData);

    let rowClouds = rowData.map((cloudData) => <CloudSvg key={uuidv4()}left={cloudData.left} top={cloudData.top} seedVal={cloudData.seedVal} id={cloudData.id} />);
    
    return (
        <div className={`clouds-row-${props.rowIndex}`}>
            {rowClouds}
        </div>
    );
}

export default CloudsRow;