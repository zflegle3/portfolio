function CloudBackSvg(props) {
    // props.left
    // props.top
    // props.seedVal
    // props.id

    return (
        <div id="cloud-background" className="cloud-background">

            <div className="base-layer" style={{top: `-500px`, left:`-500px`}}>
                <div className="cloud" id="cloud-base" style={{ filter: `url(#filter-base-bg)`, boxShadow: `500px 500px 80px 120px rgba(255, 255, 255, 1)`}}></div>
            </div>

            <svg width="0" height="0" id={props.n}> 
                    <filter id={`filter-base-bg`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="5" seed={1000} />     
                        <feDisplacementMap  in="SourceGraphic" scale="250" />
                    </filter>
            </svg>
        </div>


    );
}

export default CloudBackSvg;
