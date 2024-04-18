import React, { useRef } from "react";
import Header from "../components/Header";
import Projects from "../components/Projects";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

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
      <Navbar scrollToRef={scrollToRef} />
      <Header ref={headerRef} />
      <Projects ref={projectsRef} />
      <About ref={aboutRef} />
      <Services/>
    </>
  );
};

export default HomePage;



/*const scrollToRef = (refName) => {
  if (refName === "headerRef") {
    headerRef.current.scrollIntoView({ behavior: "smooth" });
  } else if (refName === "projectsRef") {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  } else if (refName === "aboutRef") {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  }
}; */