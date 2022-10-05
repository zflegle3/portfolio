function CloudBackSvg(props) {
    // props.left
    // props.top
    // props.seedVal
    // props.id

    return (
        <div id="cloud-background" className="cloud-background">

            <div className="base-layer" style={{top: `-500px`, left:`-500px`}}>
                <div className="cloud" id="cloud-base" style={{ filter: `url(#filter-base-bg)`, boxShadow: `500px 500px 100px 20px rgba(255, 255, 255, 1)`}}></div>
            </div>

            {/* <div className="back-layer" style={{top: `-500px`, left:`-500px`}}>
                <div className="cloud" id="cloud-back" style={{ filter: `url(#filter-back-bg)`, boxShadow: `500px 500px 100px 0px rgba(215, 215, 215, 0.3)`}}></div>
            </div>

            <div className="mid-layer" style={{top: `-500px`, left:`-500px`}}>
                <div className="cloud" id="cloud-mid" style={{ filter: `url(#filter-mid-bg)` , boxShadow: `500px 500px 100px 0px rgba(66, 105, 146, 0.2)` }}></div>
            </div>

            <div className="front-layer" style={{top: `-500px`, left:`-500px`}}>
                <div className="cloud" id="cloud-front"style={{ filter: `url(#filter-front-bg)` , boxShadow: `500px 500px 100px 0px rgba(0, 0, 0, 0.4)`}}></div>
            </div>  */}

            <svg width="0" height="0" id={props.n}> 
                    <filter id={`filter-base-bg`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="5" seed={1000} />     
                        <feDisplacementMap  in="SourceGraphic" scale="250" />
                    </filter>

                    {/* <filter id={`filter-back-bg`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="5" seed={100} />     
                        <feDisplacementMap  in="SourceGraphic" scale="250" />
                    </filter>

                    <filter id={`filter-mid-bg`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" seed={100}/>
                        <feDisplacementMap  in="SourceGraphic" scale="250" />
                    </filter>

                    <filter id={`filter-front-bg`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="4" seed={100}/>
                        <feDisplacementMap  in="SourceGraphic" scale="250" />
                    </filter> */}
            </svg>
        </div>


    );
}

export default CloudBackSvg;
