import React, {useRef} from "react";
import classes from "../styles/homePage.module.css"
import imageAbout from "../assets/me.png"
import imageLegal from "../assets/effect.png"
import Footer from "../components/Footer.jsx";
import Process from "../components/Process.jsx";
/* import Legal from "../assets/legal.png" */
import Legal from "../assets/whiteLegal.png"
import DigitalPlayground from "../assets/digitalPlaygroundDark.png"
import DigitalPlaygroundLight from "../assets/digitalPlaygroundLight.png"
import Connect from "../components/Connect.jsx";


const HomePage = () => {

  const videoRef = useRef(null);

    const handleEmailClick = () => {
        window.location.href = "mailto:hgjorgieva@gmail.com";
    };

    const aboutPageClick = () => {
      navigate ('/about');
    }



  return ( 
<>
    <div className={classes.pageCtn}>
      <div className={classes.heroCtn}>
        <h1>Digital <br className={classes.mobileBreak} />Designer</h1>
        <h4>| UX & UI DESIGN | WEB DESIGN | FRONT END DEVELOPMENT |</h4>
        <div className={classes.buttonCtn}>
        <button className={classes.button} onClick={handleEmailClick}>Get in touch</button>
        </div>

       {/* <h4>| UX & UI DESIGN <br className={classes.mobileBreak}/> | WEB DESIGN <br className={classes.mobileBreak}/>| WEB DEVELOPMENT |</h4> */}

{/* <button className={classes.button} onClick={handleEmailCliclk}>Get in touch</button> */}
        {/* <h4 className={classes.badge}>Based in Berlin</h4> */}
      </div>

      <div className={classes.aboutCtn}>
        <div className={classes.text}>
          <hr className={classes.hr} />
          <h2>About</h2> 
          <p>sidjsidjsjdsjdsjdkskds
            sdnsdnskdnskdksmdkmskdmksmdkdmkdm
            sdnsdnskmdksmdkmskmdksmdksmdkmskdmskdm
            sndsdklsmdklsmkdmskdskdmskls 
            sidjsidjsjdsjdsjdkskds
            sdnsdnskdnskdksmdkmskdmksmdkdmkdm
            sdnsdnskmdksmdkmskmdksmdksmdkmskdmskdm
            sndsdklsmdklsmkdmskdskdmskls 
            sidjsidjsjdsjdsjdkskds
            sdnsdnskdnskdksmdkmskdmksmdkdmkdm
            sdnsdnskmdksmdkmskmdksmdksmdkmskdmskdm
            sndsdklsmdklsmkdmskdskdmskls 
          </p>

          <div className={classes.buttonCtn}>
        <button className={classes.button} onClick={aboutPageClick}>See more</button>
        </div>
 
        </div>
   { /* <div className={classes.aboutImage}>
             <img src={Legal}/> 
            </div> */}
        
      </div>

      <Process videoRef={videoRef} />

      <hr className={classes.hr} />
      <h2 > Work</h2>

      <div className={classes.projectsCtn}>
    

        <div className={classes.projectOne}>
            <img src={Legal}/> 
          <div className={classes.textOverlay}>
              <p>Legal App | UX & UI Case Study </p>
            </div> 
            </div>
        <div className={classes.projectTwo}>
             <img src={DigitalPlaygroundLight}/> 
            <div className={classes.textOverlay}>
            <p>Comming soon...</p>
            </div>
        </div>
      </div>

   {   /* <div className={classes.connectCtn}>
        <div>
          <h2>Let's Chat</h2>
          <button className={classes.button} onClick={handleEmailCliclk}>hgjorgieva@gmail</button>
        </div>

      </div> */}
   
     {/* <Footer/> */}
    </div>
       <Connect />
       </>

   );
}
 
export default HomePage;