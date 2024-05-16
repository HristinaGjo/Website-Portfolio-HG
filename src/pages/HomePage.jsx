import React from "react";
import classes from "../styles/homePage.module.css"
import Legal from "../assets/plainLegal.png"
import UX from "../assets/uxBlack.png"
import UI from "../assets/uxHalf.png"
import WEB from "../assets/webDesign.png"
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
      <div className={classes.homeCtn}>

      <div className={classes.heroCtn}>
        <div className={classes.headlineText}>
          {/*<span>HRISTINA GJORGIEVA</span>*/}
        <h1>Digital Designer</h1>
        <span>UX & UI DESIGN | WEB DESIGN | FRONTEND DEVELOPMENT</span>
        </div>
      </div>

      <div className={classes.projectsCtn}>
      <span>SELECTED</span>
        <h1>Projects</h1>
        <Link to="/legal">
        <div className={classes.legalProject}>
        <div className={classes.imgCtnLegal}>
          <img src={Legal} />
          </div>
          <span>Legal app | UX & UI Design</span>
          </div>
          </Link>
      </div>
    


      <div className={classes.aboutSectionCtn}>
        <h1>About me</h1>
        <div className={classes.textAboutSection}>
          <p>Lorem ipum Some text Some text Lorem ipum Some text Some text
          Lorem ipum Some text Some text Lorem ipum Some text Some text
          Lorem ipum Some text Some text Lorem ipum Some text Some text
          Lorem ipum Some text Some text Lorem ipum Some text Some text
          Lorem ipum Some text Some text Lorem ipum Some text Some text
          Lorem ipum Some text Some text Lorem ipum Some text Some text
          Lorem ipum Some text Some text Lorem ipum Some text Some text
          Lorem ipum Some text Some text Lorem ipum Some text Some text
          Lorem ipum Some text Some text Lorem ipum Some text Some text
          </p>
        </div>
      </div>

      <div className={classes.servicesSectionCtn}>
      <span>I CAN HELP YOU WITH</span>
        <h1>Services</h1>
        <div className={classes.gridCtn}>

        <div className={classes.servicesCtn}>
          <span>RESEARCH & DESIGN</span>
          <h3 className={classes.gradientText}>UX & UI Design</h3>
          {/* <img src={UX} /> */}
          <span>Crafting user-centric, intuitive and engaging digital
                  experiences.</span>
          {/* <ul className={classes.list}>
            <li>User & Market Research</li>
            <li>Strategic Ideation</li>
            <li>Conceptual Design</li>
            <li>Design Production & Prototype</li>
            <li>Testing & Feedback</li>
          </ul>*/}
        </div>

       { /*<div className={classes.servicesCtn}>
        <h3>UI Design</h3>
         <img src={UI} /> 
        </div> */}

        <div className={classes.servicesCtn}>
        <span>RESEARCH & DESIGN</span>
        <h3 className={classes.gradientText}>Web Design</h3>
        <span>A comprehensive design that lays the foundation for web implementation.</span>
       {/* <img className={classes.lapTop} src={WEB} /> */}
        </div>

        <div className={classes.servicesCtn}>
        <span>IMPLEMENTATION</span>
        <h3 className={classes.gradientText}>Frontend Development</h3>
        <span>Bringing the design to life through developing highly functional web solutions.</span>
        {/* <img src={UI} /> */}
        </div>

        </div>

      </div>

      </div>

      <Connect />
      </>
   );
}
 
export default HomePage;




{/* <button className={classes.button} onClick={handleEmailCliclk}>Get in touch</button> */}
        {/* <h4 className={classes.badge}>Based in Berlin</h4> */}



       /* <div className={classes.projectsCtn}>
        <Link to="/legal">
        <div className={classes.projectOne}>
            <img src={Legal}/> 
          <div className={classes.textOverlay}>
              <p>Legal App </p>
    
            </div> 
          </div>
            </Link> */