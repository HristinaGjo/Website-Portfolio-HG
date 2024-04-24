import React from "react";
import classes from "../styles/connect.module.css"
import Footer from "./Footer";


const Connect = () => {

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
            <div className={classes.buttonCtn}>
            <button className={classes.button} onClick={handleEmailCliclk}>Get in touch</button>
            </div>
        </div>
        <Footer />

    </div>
    </> 

    );
}
 
export default Connect;