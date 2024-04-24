import React from "react";
import classes from "../styles/process.module.css"
import imageUX from "../assets/me.png"
import Legal from "../assets/legal.png"



const Process = () => {
    return ( 
        <>
        <div className={classes.processCtn}>
            <div className={classes.title}>
           <h2>Process</h2>
           <span>Things I can help you with</span>
           </div>
           <div className={classes.services}>
            <div className={classes.column}>
                <p>UX & UI Design</p>
                <img className={classes.imageCtn} /* src={Legal}*//>
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
            <div className={classes.column}>
                <p>Web Design</p>
                <img className={classes.imageCtn} />
                <p>A comprehensive design that lays the foundation for web implementation.</p>
                <span>Planing & Strategy</span>
                <span>Wireframing</span>
                <span>Website Design Mockups</span>
                <span>Responsive & mobile</span>
                <span>UX & Copywriting</span>
             
            </div>
            <div className={classes.column}>
                <p>Web Development</p>
                <img className={classes.imageCtn}/>
                <p>Bringing visuals to life through developing highly functional web solutions.</p>
                <span>Component Architecture Design</span>
                <span>Frontend Development</span>
                <span>Responsive Design</span>
                <span>Testing</span>
                <span>Deployment</span>
            </div>

           </div>
           
        </div>
        </>
     );
}
 
export default Process;