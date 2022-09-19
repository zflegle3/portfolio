import '../styles/About.css';
import {useState, useEffect} from "react";


function CloudBackSvg(props) {
    // props.left
    // props.top
    // props.seedVal
    // props.id

    const [cloudStats, setCloudStats] = useState({

    })


    return (
        <div id="cloud-background" className="cloud-background">

            <div className="base-layer">
                <div className="cloud" id="cloud-base-bg" style={{ filter: `url(#filter-base-bg`}}></div>
            </div>

            <div className="back-layer">
                <div className="cloud" id="cloud-back-bg" style={{ filter: `url(#filter-back-bg`}}></div>
            </div>

            <div className="mid-layer">
                <div className="cloud" id="cloud-mid-bg" style={{ filter: `url(#filter-mid-bg`}}></div>
            </div>

            <div className="front-layer">
                <div className="cloud" id="cloud-front-bg"style={{ filter: `url(#filter-front-bg`}}></div>
            </div> 

            <svg width="0" height="0" id={props.id}> 
                    <filter id={`filter-base-bg`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="5" seed={2000} />     
                        <feDisplacementMap  in="SourceGraphic" scale="120" />
                    </filter>

                    <filter id={`filter-back-bg`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="3" seed={1000} />     
                        <feDisplacementMap  in="SourceGraphic" scale="120" />
                    </filter>

                    <filter id={`filter-mid-bg`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="3" seed={1000}/>
                        <feDisplacementMap  in="SourceGraphic" scale="120" />
                    </filter>

                    <filter id={`filter-front-$bg`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.009" numOctaves="4" seed={1000}/>
                        <feDisplacementMap  in="SourceGraphic" scale="50" />
                    </filter>
            </svg>
        </div>

    );
}

export default CloudBackSvg;
