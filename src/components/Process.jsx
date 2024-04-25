import React, {useEffect} from "react";
import classes from "../styles/process.module.css"
import imageUX from "../assets/me.png"
import Legal from "../assets/legal.png"
import videoUX from "../assets/uxFinalZoom.mp4"
import videoWebDev from "../assets/webDevCleanCut.mp4"
import videoWebDesign from "../assets/webDesignZoom.mp4"


const Process = ({ videoRef }) => {

    useEffect(() => {
        if (videoRef.current) {
            // Access the video element using videoRef.current and perform any operations
            console.log("Video element reference:", videoRef.current);
        }
    }, [videoRef]);

    return ( 
        <>
         <hr className={classes.hr} />
        <div className={classes.title}>
           <h2>Process</h2>
           <span>Things I can help you with</span> 
           </div>

        <div className={classes.processCtn}>
           <div>
           <div className={classes.services}>
            <div className={classes.column}>
                <p>UX & UI Design</p>
                <video  className={classes.videoCtn}  autoPlay loop muted>
            <source src={videoUX} type="video/mp4" />
            </video>
            <div className={classes.videoText}>
                <p>Crafting user-centric, intuitive and engaging digital experiences.</p>
                <span>User Research & Discovery</span>
                {/* <span>User Persona Development</span> */}
                <span>UX Strategy</span>
                <span>Wireframing & Prototyping</span>
                <span>User Testing</span>
                <span>UI Design</span>
               
                {/* <span>Iterative Design Process</span>
                <span>Implementation & Design Handoff</span> */}
                 </div>
            </div>
            <div className={classes.column}>
         
                <p>Web Design</p>
                {/* <img className={classes.imageCtn} /* src={Legal} */}
                <video  className={classes.videoCtn} autoPlay loop muted>
            <source src={videoWebDesign} type="video/mp4" />
            </video>
            <div className={classes.videoText}>
           
                <p>A comprehensive design that lays the foundation for web implementation.</p>
                <span>Planing & Strategy</span>
                <span>Wireframing</span>
                <span>Website Design Mockups</span>
                <span>Responsive & mobile</span>
               {/*  <span>UX & Copywriting</span> */}
               </div>
            </div>
            <div className={classes.column}>
                <p>Web Development</p>
                <video  className={classes.videoCtn} autoPlay loop muted>
            <source src={videoWebDev} type="video/mp4" />
            </video>
            <div className={classes.videoText}>
                <p>Bringing visuals to life through developing highly functional web solutions.</p>
               {/* <span>Component Architecture Design</span> */}
                <span>Frontend Development</span>
                <span>Responsive Design</span>
                <span>Testing</span>
                <span>Deployment</span>
            </div>
            </div>

           </div>
           </div>
           
        </div>
        </>
     );
}
 
export default Process;