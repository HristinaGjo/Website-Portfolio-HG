import React from "react";
import classes from "../styles/homePage.module.css"
import imageAbout from "../assets/me.png"
import imageLegal from "../assets/effect.png"
import SectionContainer from "../components/SectionContainer.jsx"
import Footer from "../components/Footer.jsx";

const HomePage = () => {
  return ( 

    /* <SectionContainer> */
    <div className={classes.pageCtn}>
      <div className={classes.heroCtn}>
        <h1>Digital <br className={classes.mobileBreak} />Designer</h1>
        <h4>UX & UI DESIGN | <br className={classes.mobileBreak} /> WEB DEVELOPMENT | <br className={classes.mobileBreak} /> INTERACTION DESIGN</h4>
      </div>

      <div className={classes.aboutCtn}>
        <div className={classes.text}> 
        <h2>About</h2>
        <p>hfhfdjfkdjkfdjkdjfkjdkfjkdjdkfjjfdkjf
        hfhfdjfkdjkfdjkdjfkjdkfjkdjdkfjjfdkjfkjd
        hfhfdjfkdjkfdjkdjfkjdkfjkdjdkfjjfdkjfkjd
        hfhfdjfkdjkfdjkdjfkjdkfjkdjdkfjjfdkjfkjd
        hfhfdjfkdjkfdjkdjfkjdkfjkdjdkfjjfdkjfkjd
        hfhfdjfkdjkfdjkdjfkjdkfjkdjdkfjjfdkjfkjd
        hfhfdjfkdjkfdjkdjfkjdkfjkdjdkfjjfdkjfkjd
        hfhfdjfkdjkfdjkdjfkjdkfjkdjdkfjjfdkjfkjd
        hfhfdjfkdjkfdjkdjfkjdkfjkdjdkfjjfdkjfkjd
        </p>
        </div>
        <img src={imageAbout}/>
      </div>

      <div className={classes.projectsCtn}>
        <div className={classes.projectOne}>
            <img src={imageLegal}/>
            <div className={classes.textOverlay}>
              <h3>Legal</h3>
              <p>UX | UI Case Study</p>
            </div>
        </div>
        <div className={classes.projectTwo}>
             <img src={imageLegal}/> 
            <div className={classes.textOverlay}>
              <h3>Comming soon</h3>
           {  /*  <p>Your Project</p> */}
            </div>
        </div>
      </div>
      <div>
        <div className={classes.servicesCtn}>
          <div>
          <h2>Process</h2>
          <p>Things I can help you with</p>
          </div>
          <div className={classes.servicesText}>
          <h3>01. UX | UI Design</h3>
          <h3>02. Web Design</h3>
          <h3>03. Web Development</h3>
          </div>
        </div>
      </div>
      <div className={classes.connectCtn}>
        <div>
          <h2>Let's Chat</h2>
          
          <a className={classes.emailBtn} href="mailto:hgjorgieva@gmail.com">hgjorgieva@gmail.com</a>
         { /* <h3> Let’s talk about a project, collaboration or an idea you may have!</h3> */}
        </div>

      </div>
      <Footer/>
    </div>
   /* </SectionContainer> */

   );
}
 
export default HomePage;

