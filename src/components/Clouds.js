import { v4 as uuidv4 } from 'uuid';

function Clouds() {



    const hideCloud = (e) => {
        console.log(e.target)
        e.target.className = "cloud hide"
    }

    const showCloud = (e) => {
        console.log(e.target)
        setTimeout(() => {
            e.target.className = "cloud"
          }, 3000);
    }

    let cloudCoords=[];
    for (let i=0; i<10; i++) {//left coord
        for (let j=0; j<7; j++) {//top coord
            let coords ={
                left: i,
                top: j,
            }
            cloudCoords.push(coords);
        }
    }
    console.log(cloudCoords);
    let cloudsAll = cloudCoords.map((cloud) => 
        <div key={uuidv4()} className="cloud" onMouseEnter={hideCloud} onMouseLeave={showCloud}  style={{color:"blue",top:`${(cloud.top*10)}%`,left:`${(cloud.left*10)}%`}}></div>
    );

    // `top:${cloud.top}%;left:${cloud.left}%`



  return (
    <div className="clouds">
        {cloudsAll}
    </div>
  );
}

export default Clouds;
