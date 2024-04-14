import React from "react";
import classes from '../styles/homePage.module.css'
import image from '../assets/cover.jpeg'
import videoSrc from '../assets/legal2.mp4'
import { Link } from "react-router-dom";



const HomePage = () => {
    return ( 
        <>
        <div className={classes.pageCtn}>
            <div className={classes.headerCtn}>
             
                <div className={classes.headerImg}> 
                <img src={image} alt="Project Cover" /> 
                </div>

                <div className={classes.headlineText}>
                {/* <h1>Hello World</h1> */}
               {/* <h3>Hey there!<br/> */}
                <br/>
                <h3> I'M HRISTINA</h3> 
                <span> <h3>DESIGNER WITH DEVELOPER'S MIND &</h3></span> 
                <span> <h3>DEVELOPER WITH DESIGNER EYES</h3></span> 
                <span>UX UI DESIGN |</span> {"  "}
                <span>INTERACTION DESIGN |</span> {"  "}
                <span>FRONT END DEVELOPMENT</span>
                </div>
            </div>
            <div className={classes.titleUX}>  
                <h1>UX Design</h1>
            </div>
            <div className={classes.projectUXctn}>
                <Link to='/legal'> 
                {/* <video className={classes.video} autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
            </video> */}
                <img src={image} alt="Project Cover" /> 
                </Link>
            </div> 
            <div className={classes.titleMicro}>  
                <h1>Interactive Design</h1>
            </div>
            <div className={classes.projectCtn}>
            <img src={image} alt="Project Cover" />
            </div> 
        </div>
        </>
    );
}

export default HomePage;
