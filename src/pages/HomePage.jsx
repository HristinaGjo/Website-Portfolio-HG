import React from "react";
import classes from "../styles/homePage.module.css"
import imageAbout from "../assets/me.png"
import SectionContainer from "../components/SectionContainer.jsx"

const HomePage = () => {
  return ( 

    /* <SectionContainer> */
    <div className={classes.pageCtn}>
      <div className={classes.heroCtn}>
        <h1>Digital <br className={classes.mobileBreak} />Designer</h1>
        <h4>UX & UI DESIGN <br className={classes.mobileBreak} /> WEB DEVELOPMENT <br className={classes.mobileBreak} /> INTERACTION DESIGN</h4>
      </div>

      <div className={classes.aboutCtn}>
        <h2>About</h2>
        <p>hfhfdjfkdjkfdjkdjfkjdkfjkdjdkfjjfdkjfkjd</p>
        <img src={imageAbout}/>
      </div>

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