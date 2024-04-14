import React from "react";
import classes from '../styles/homePage.module.css'
import image from '../assets/cover.jpeg'
import videoSrc from '../assets/legal2.mp4'
import { Link } from "react-router-dom";



const HomePage = () => {
    return ( 
        <div className={classes.pageCtn}>
            <div className={classes.headlineCtn}>
                {/* <h1>Hello World</h1> */}
                <h3>Jdjjsdjsdjsdkskdklskdlskdskdk <br/>
                    sjddjskldjsjdsjdsjdjdsds <br/>
                    hdshsjdsjdnsdnsdnsndsndknsdksndksdsk <br/>
                    njsdjsndskdjskdjks
                </h3>
            </div>
            <div className={classes.titleUX}>  
                <h1>UX Design</h1>
            </div>
            <div className={classes.projectUXctn}>
                <Link to='/legal'> 
                <video className={classes.video} autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
            </video>
               { /* <img src={image} alt="Project Cover" /> */}
                </Link>
            </div> 
            <div className={classes.titleMicro}>  
                <h1>Another Project</h1>
            </div>
            <div className={classes.projectCtn}>
            <img src={image} alt="Project Cover" />
            </div> 
        </div>
    );
}

export default HomePage;
