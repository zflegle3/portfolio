import '../styles/About.css';



function CloudSvg(props) {
    // props.cloudData
    // {   id: 1,
    //     top: 0 ,
    //     left: 0,
    //     width: 100/3,
    //     height: 100/4
    // }

    return (
        <div id="cloud-container-single" className={`svg-cloud-${props.cloudData.id}`} style={{ top:`${props.cloudData.top}%`, left:`${props.cloudData.left}%`, height : `${props.cloudData.height}%`, width : `${props.cloudData.width}%`}} >

            <div className="base-layer">
                <div className="cloud" id="cloud-base" style={{ filter: `url(#filter-base-${props.cloudData.id})`}}></div>
            </div>

            <div className="back-layer">
                <div className="cloud" id="cloud-back" style={{ filter: `url(#filter-back-${props.cloudData.id})`}}></div>
            </div>

            <div className="mid-layer">
                <div className="cloud" id="cloud-mid" style={{ filter: `url(#filter-mid-${props.cloudData.id})`}}></div>
            </div>

            <div className="front-layer">
                <div className="cloud" id="cloud-front"style={{ filter: `url(#filter-front-${props.cloudData.id})`}}></div>
            </div> 

            <svg width="0" height="0" id={props.cloudData.id}> 
                    <filter id={`filter-base-${props.cloudData.id}`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="5" seed={props.cloudData.seedVal} />     
                        <feDisplacementMap  in="SourceGraphic" scale="120" />
                    </filter>

                    <filter id={`filter-back-${props.cloudData.id}`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="3" seed={props.cloudData.seedVal} />     
                        <feDisplacementMap  in="SourceGraphic" scale="120" />
                    </filter>

                    <filter id={`filter-mid-${props.cloudData.id}`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="3" seed={props.cloudData.seedVal}/>
                        <feDisplacementMap  in="SourceGraphic" scale="120" />
                    </filter>

                    <filter id={`filter-front-${props.cloudData.id}`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.009" numOctaves="4" seed={props.cloudData.seedVal}/>
                        <feDisplacementMap  in="SourceGraphic" scale="50" />
                    </filter>
            </svg>
        </div>

    );
}

export default CloudSvg;
