import React from "react";
import classes from "../styles/homePage.module.css"
import Connect from "../components/Connect.jsx";
import { Link } from "react-router-dom";


const HomePage = () => {


    const handleEmailClick = () => {
        window.location.href = "mailto:hgjorgieva@gmail.com";
    };

    const aboutPageClick = () => {
      navigate ('/about');
    }


  return ( 
      <>
      <div className={classes.heroCtn}>
        <div className={classes.headlineText}>
        <h1>Digital Designer</h1>
        <span>UX & UI Design | Web Design | Frontend Development</span>
        </div>
      </div>
      </>
   );
}
 
export default HomePage;




{/* <button className={classes.button} onClick={handleEmailCliclk}>Get in touch</button> */}
        {/* <h4 className={classes.badge}>Based in Berlin</h4> */}



