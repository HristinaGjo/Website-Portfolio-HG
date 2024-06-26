import React from "react";
import classes from "../styles/connect.module.css"
import Footer from "./Footer";

const Connect = () => {

    const handleEmailClick = () => {
        /* console.log ('hello') */
        window.location.href = "mailto:hgjorgieva@gmail.com";
       }


    return ( 
    <>
    <div className={classes.connectCtn}>
        <div className={classes.textCtn}>
        <div className={classes.text}>
        <span>HAVE AN IDEA OR PROJECT IN MIND?</span>
            <h1>Let's chat</h1>
            </div>
        
            <div className={classes.contact}>
            <button 
            className={classes.button} 
            onClick={handleEmailClick}>
               <span>hgjorieva@gmail.com</span>
                </button>
            </div>
            </div>
           

          { /* <div className={classes.buttonCtn}>
            <button className={classes.button} onClick={handleEmailCliclk}>Get in touch</button>
            </div> */}
       
        <Footer />
        </div>

    
    </> 

    );
}
 
export default Connect;