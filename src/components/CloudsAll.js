import CloudsRow from "./CloudsRow"


function CloudsAll(props) {

    

    console.log("hello");


    return (
        <div className="cloud-array">
            <CloudsRow rowIndex={0} rowQty={3} heightFactor={15} hideFreq={0}/>

            <CloudsRow rowIndex={1} rowQty={2} heightFactor={15}/>

            <CloudsRow rowIndex={2} rowQty={4} heightFactor={15}/>

            {/* <CloudsRow rowIndex={2} rowQty={3} heightFactor={10}/> */}

            {/* <CloudsRow rowIndex={3} rowQty={4} heightFactor={10}/> */}
        </div>

    );
}

export default CloudsAll;
