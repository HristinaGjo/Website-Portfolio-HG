import React from "react";
import classes from "../styles/homePage.module.css"
import Legal from "../assets/plainLegal.png"
import UX from "../assets/uxBlack.png"
import UI from "../assets/uxHalf.png"
import WEB from "../assets/webDesign.png"
import Connect from "../components/Connect.jsx";
import { Link, useNavigate  } from "react-router-dom";



const HomePage = () => {



    const navigate = useNavigate()

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
          <p>Hey there! I’m Hristina Gjorgieva. Berlin based Digital Designer crafting intuitive and  
                    interactive experiences. <br/>My journey began in architecture, where I learned and practiced
                    design that focus on human behavior and user-centric environments.
                    However, I eventually found myself drawn to the digital realm due to its speed, scalability, 
                    and the exciting potential for constant product improvement.
                    {/* Switching from architecture to digital design, I merged my expertise in UX & UI Design, 
                    Web Design, and Frontend Development, bringing a fresh perspective to my work. */}
          </p>
        {/*  <br/> */}

        <button
              className={classes.button}
              onClick={aboutPageClick}>
                <span>more about</span>
                </button>
        { /* <Link to="/about">
            <span>Read more</span>
          </Link> */}
        </div>
      </div>

      <div className={classes.servicesSectionCtn}>
      <span>I CAN HELP YOU WITH</span>
        <h1>Services</h1>
        <div className={classes.gridCtn}>

        <div className={classes.servicesCtn}>
         {/* <span>RESEARCH & DESIGN</span> */}
          <h3 className={classes.gradientText}>Research & <br/>Art Direction</h3>
          {/* <img src={UX} /> */}
          <p>I conduct in-depth research to define project goals, 
            target audiences, analyze competitors. 
            Afterwards, I begin working on an art direction to find the best visual style.</p>
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
        {/* <span>RESEARCH & DESIGN</span> */}
        <h3 className={classes.gradientText}>Web, Mobile & <br/> UX & UI Design</h3>
        <p> 
          I create user-centric, intuitive and engaging digital experiences for websites and mobile apps.
          My aim is to blend creativity and uniqueness with user convenience.
        </p>
       {/* <img className={classes.lapTop} src={WEB} /> */}
        </div>

        <div className={classes.servicesCtn}>
       {/* <span>IMPLEMENTATION</span> */}
        <h3 className={classes.gradientText}>Frontend <br/>Development</h3>
        <p>I bring designs to life by developing highly functional and responsive web solutions. 
          Specializing in React.js, JavaScript, HTML, and CSS.</p>
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
                    <h3 className={classes.gradientText}>UX & UI Design</h3>

            </Link> */