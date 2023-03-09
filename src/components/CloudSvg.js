
function CloudSvg(props) {
    //props.n (id)
    //props.seedVal
    //props.heightVal
    //props.widthVal
    //props.leftVal
    //props.topVal

    // const hideCloud = (e) => {
    //     e.target.classList.add("hide-cloud");
    //     let revealCloud = setTimeout(function(){e.target.classList.remove("hide-cloud")},5000);
    // };

    let totWidth = window.screen.width; //check support for safari/Firefox/mobile
    let totHeight = window.screen.height; //check support for safari/Firefox/mobile
    let offset = 10;
    if (totWidth < 800) {
        offset = 30;
    }
    //Offset vertically &horizontally added to boxshadow and layer offsets to compensate for overlap conditions
   
    return (
        //Cloud Container DIV
        // onMouseEnter={hideCloud}
        <div id="cloud-container-single" className={`svg-cloud-${props.n}`} style={{ top:`${props.topVal}%`, left:`${props.leftVal}%`, height : `${props.heightVal}%`, width : `${props.widthVal}%`}} >

            <div className="base-layer" style={{top: `-${((props.heightVal+offset)/100)*totHeight}px`, left:`-${((props.widthVal+offset)/100)*totWidth}px`}}>
                <div className="cloud" id="cloud-base" style={{ filter: `url(#filter-base-${props.n})`, boxShadow: `${((props.widthVal+offset)/100)*totWidth}px ${((props.heightVal+offset)/100)*totHeight}px 100px 0px rgba(255, 255, 255, 1)`}}></div>
            </div>

            <div className="back-layer" style={{top: `-${((props.heightVal+offset)/100)*totHeight}px`, left:`-${((props.widthVal+offset)/100)*totWidth}px`}}>
                <div className="cloud" id="cloud-back" style={{ filter: `url(#filter-back-${props.n})`, boxShadow: `${((props.widthVal+offset)/100)*totWidth}px ${((props.heightVal+offset)/100)*totHeight}px 100px 0px rgba(215, 215, 215, 0.3)`}}></div>
            </div>

            <div className="mid-layer" style={{top: `-${((props.heightVal+offset)/100)*totHeight}px`, left:`-${((props.widthVal+offset)/100)*totWidth}px`}}>
                <div className="cloud" id="cloud-mid" style={{ filter: `url(#filter-mid-${props.n})` , boxShadow: `${((props.widthVal+offset)/100)*totWidth}px ${((props.heightVal+offset)/100)*totHeight}px 100px 0px rgba(66, 105, 146, 0.2)` }}></div>
            </div>

            <div className="front-layer" style={{top: `-${((props.heightVal+offset)/100)*totHeight}px`, left:`-${((props.widthVal+offset)/100)*totWidth}px`}}>
                <div className="cloud" id="cloud-front"style={{ filter: `url(#filter-front-${props.n})` , boxShadow: `${((props.widthVal+offset)/100)*totWidth}px ${((props.heightVal+offset)/100)*totHeight}px 100px 0px rgba(0, 0, 0, 0.4)`}}></div>
            </div> 

            <svg width="0" height="0" id={props.n}> 
                    <filter id={`filter-base-${props.n}`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="5" seed={props.seedVal} />     
                        <feDisplacementMap  in="SourceGraphic" scale="250" />
                    </filter>

                    <filter id={`filter-back-${props.n}`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="5" seed={props.seedVal} />     
                        <feDisplacementMap  in="SourceGraphic" scale="250" />
                    </filter>

                    <filter id={`filter-mid-${props.n}`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" seed={props.seedVal}/>
                        <feDisplacementMap  in="SourceGraphic" scale="250" />
                    </filter>

                    <filter id={`filter-front-${props.n}`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="4" seed={props.seedVal}/>
                        <feDisplacementMap  in="SourceGraphic" scale="250" />
                    </filter>
            </svg>
        </div>

    );
}

export default CloudSvg;