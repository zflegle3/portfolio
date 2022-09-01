import { v4 as uuidv4 } from 'uuid';

function Clouds() {

    let cloudCoords=[];
    for (let i=0; i<10; i++) {//left coord
        for (let j=0; j<6; j++) {//top coord
            let coords ={
                left: i,
                top: j,
            }
            cloudCoords.push(coords);
        }
    }
    console.log(cloudCoords);
    let cloudsAll = cloudCoords.map((cloud) => 
        <div key={uuidv4()} className="cloud" style={{color:"blue",top:`${cloud}`}}>Cloud</div>
    );

    // `top:${cloud.top}%;left:${cloud.left}%`



  return (
    <div className="clouds">
        <p>Clouds</p>
        {cloudsAll}
    </div>
  );
}

export default Clouds;
