import '../styles/Home.css';

import CloudsAll from "./CloudsAll"



function Home() {


  return (
    <div id="home" className="home">
        <div className="home-content">
            <p>Zach</p>
            <p>Flegle</p>
            <p>Front End Developer</p>
        </div>

     <CloudsAll />
    </div>
  );
}

export default Home;
