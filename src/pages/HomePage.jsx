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
        <p>hfhfdjfkdjkfdjkdjfkjdkfjkdjdkfjjfdkjfkjd
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
      <Footer/>
    </div>
   /* </SectionContainer> */

   );
}
 
export default HomePage;




// HomePage.js
/* import React, { useRef } from "react";
import SectionContainer from "../components/SectionContainer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Connect from "../components/Connect";

const HomePage = () => {
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToRef = (refName) => {
    switch (refName) {
      case "headerRef":
        headerRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "projectsRef":
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "aboutRef":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <>
    <SectionContainer>
      <Navbar scrollToRef={scrollToRef} />
        <Header ref={headerRef} />
        <Projects ref={projectsRef} />
        <About ref={aboutRef} />
        <Services />
        <Connect />
      </SectionContainer>
      <Footer />
    </>
  );
};

export default HomePage; */