import React from "react";
import classes from "../styles/homePage.module.css"
import imageAbout from "../assets/me.png"
import imageLegal from "../assets/effect.png"
import Footer from "../components/Footer.jsx";
import Process from "../components/Process.jsx";
/* import Legal from "../assets/legal.png" */
import Legal from "../assets/legalPurple.png"
import DigitalPlayground from "../assets/digitalPlaygroundDark.png"
import DigitalPlaygroundLight from "../assets/digitalPlaygroundLight.png"


const HomePage = () => {

 const handleEmailCliclk = () => {
  /* console.log ('hello') */
  window.location.href = "mailto:hgjorgieva@gmail.com";
 }

  return ( 

    <div className={classes.pageCtn}>
      <div className={classes.heroCtn}>
        <h1>Digital <br className={classes.mobileBreak} />Designer</h1>
        <h4>UX & UI DESIGN | WEB DESIGN | WEB DEVELOPMENT</h4>
        <button className={classes.button} onClick={handleEmailCliclk}>Get in touch</button>
        {/* <h4 className={classes.badge}>Based in Berlin</h4> */}
      </div>

      <div className={classes.aboutCtn}>
        <div className={classes.text}>
          <h2>About</h2>
          <p>sidjsidjsjdsjdsjdkskds
            sdnsdnskdnskdksmdkmskdmksmdkdmkdm
            sdnsdnskmdksmdkmskmdksmdksmdkmskdmskdm
            sndsdklsmdklsmkdmskdskdmskls
          </p>
        </div>
     <div className={classes.aboutImage}>
             <img src={Legal}/> 
            </div> 
        
      </div>

      <Process />

      <div className={classes.projectsCtn}>
        <div className={classes.projectOne}>
            <img src={Legal}/> 
        
          <div className={classes.textOverlay}>
              <p>Legal APP </p>
              <p>UX | UI Case Study</p>
            </div> 
            </div>
        
        <div className={classes.projectTwo}>
             <img src={DigitalPlaygroundLight}/> 
            <div className={classes.textOverlay}>
             { /* <h3>Comming soon</h3>
             <p>Playground</p>  */}
            </div>
        </div>
      </div>

      <div className={classes.connectCtn}>
        <div>
          <h2>Let's Chat</h2>
          <button className={classes.button} onClick={handleEmailCliclk}>hgjorgieva@gmail</button>
        </div>

      </div>
      <Footer/>
    </div>

   );
}
 
export default HomePage;