import '../styles/About.css';



function CloudSvg(props) {
    // props.left
    // props.top
    // props.seedVal
    // props.id


    const tempHide = (e) => {
        console.log(e);
        e.target.classList.add("hide-cloud");
        setTimeout(() => {e.target.classList.remove("hide-cloud")}, 9000)
    }


    // let seedVal = Math.random()*10000;
    // console.log(seedVal);
    return (
        <div id="cloud-container-single" className="svg-clouds" style={{ top: `${props.top}%`, left : `${props.left}%`}} >

            <div className="base-layer">
                <div className="cloud" id="cloud-base" style={{ filter: `url(#filter-base-${props.id})`}}></div>
            </div>

            <div className="back-layer">
                <div className="cloud" id="cloud-back" style={{ filter: `url(#filter-back-${props.id})`}}></div>
            </div>

            <div className="mid-layer">
                <div className="cloud" id="cloud-mid" style={{ filter: `url(#filter-mid-${props.id})`}}></div>
            </div>

            <div className="front-layer">
                <div className="cloud" id="cloud-front"style={{ filter: `url(#filter-front-${props.id})`}}></div>
            </div> 

            <svg width="0" height="0" id={props.id}> 
                    <filter id={`filter-base-${props.id}`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="5" seed={props.seedVal} />     
                        <feDisplacementMap  in="SourceGraphic" scale="120" />
                    </filter>

                    <filter id={`filter-back-${props.id}`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="3" seed={props.seedVal} />     
                        <feDisplacementMap  in="SourceGraphic" scale="120" />
                    </filter>

                    <filter id={`filter-mid-${props.id}`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="3" seed={props.seedVal}/>
                        <feDisplacementMap  in="SourceGraphic" scale="120" />
                    </filter>

                    <filter id={`filter-front-${props.id}`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.009" numOctaves="4" seed={props.seedVal}/>
                        <feDisplacementMap  in="SourceGraphic" scale="50" />
                    </filter>
            </svg>
        </div>

    );
}

export default CloudSvg;
