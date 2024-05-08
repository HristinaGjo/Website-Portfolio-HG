import React from "react";
import classes from "../styles/connect.module.css"
import Footer from "./Footer";
import Arrow from "../components/Arrow.jsx";
import ArrowMobile from "./ArrowMobile.jsx";


const Connect = ({fill,stroke}) => {

    const handleEmailCliclk = () => {
        /* console.log ('hello') */
        window.location.href = "mailto:hgjorgieva@gmail.com";
       }


    return ( 
    <>
    <div className={classes.connectCtn}>
        <div className={classes.text}>
            <h2>Let's Chat</h2>
            <span>Have an idea or project in mind?</span>
            </div>
           
            
       
            <div className={classes.contact}>
            <span>Drop me a line</span>
            <div className={classes.arrowDesctop}>
            <Arrow
            fill="white"
            stroke="white"/>
            <button 
            className={classes.button} 
            onClick={handleEmailCliclk}>hgjorgieva@gmail.com</button>
            </div>
            <div className={classes.arrowMobile}>
            <ArrowMobile 
            fill="white"
            stroke="white"/>
            <button 
            className={classes.button} 
            onClick={handleEmailCliclk}>hgjorgieva@gmail.com</button>
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