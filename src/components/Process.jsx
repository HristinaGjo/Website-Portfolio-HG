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
                <span>UX & UI Design</span>
                <img className={classes.imageCtn} /* src={Legal}*//>
                <p>UX & UI DESIGN UX & UI DESIGN</p>
                <p>UX & UI DESIGN UX & UI DESIGN</p>
                <p>UX & UI DESIGN UX & UI DESIGN</p>
            </div>
            <div className={classes.column}>
                <span>Web Design</span>
                <img className={classes.imageCtn} />
                <p>UX & UI DESIGN</p>
                <p>UX & UI DESIGN</p>
                <p>UX & UI DESIGN</p>
            </div>
            <div className={classes.column}>
                <span>Web Development</span>
                <img className={classes.imageCtn}/>
                <p>UX & UI DESIGN</p>
                <p>UX & UI DESIGN</p>
                <p>UX & UI DESIGN</p>
            </div>

           </div>
           
        </div>
        </>
     );
}
 
export default Process;