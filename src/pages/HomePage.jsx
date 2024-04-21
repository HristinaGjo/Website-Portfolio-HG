// HomePage.js
import React, { useRef, useEffect } from "react";
import SectionContainer from "../components/SectionContainer";
import locomotiveScroll from 'locomotive-scroll';
import classes from '../styles/homePage.module.css'
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'


const HomePage = () => {

  const scrollRef = useRef(null);

  useEffect(() => {
      const scroll = new locomotiveScroll({
          el: scrollRef.current,
          smooth: true,
      });

      // Destroy the scroll instance when the component unmounts
      return () => {
          scroll.destroy();
      };
  }, []);
  

 
  return (
    <>
   
    <SectionContainer >
  
     
    <div data-scroll-container className={classes.pageCtn} ref={scrollRef}>
    <div className={classes.headerCtn}>
    <h2>
          Hello world! I am Hristina Gjorgieva,
          sjdjsjdjdosdoksskdd
          sdksdksdksdmksmdksmkdmskdmskmdksmdsdmsm
          dskndsdnksndksndkmdksmdksmdksmdkmskdmskmdksm
        </h2>
    </div>
      <div className={classes.aboutCtn} >
        <h3 data-scroll 
        data-scroll-speed="2"
       /* data-scroll-class="scroll"
        class="custom" */
        /*data-scroll-position="top"
        data-scroll-direction="horizontal" */
        >ABOUT</h3>

        <p data-scroll data-scroll-speed="2" >
          jsajknsjsnajksnaksnaksakaksasnskasnkanskska
          sansanskanklanskanaksnnasknansnaksnkasnkansksas
          snfjnkfjdiojfdkfmklmdkmnsjdijdeksodksöldsekoo
          dskdnksldnksdnskdnksndnsdnks
          jsajknsjsnajksnaksnaksakaksasnskasnkanskska
          sansanskanklanskanaksnnasknansnaksnkasnkansksas
          snfjnkfjdiojfdkfmklmdkmnsjdijdeksodksöldsekoo
          dskdnksldnksdnskdnksndnsdnks
          jsajknsjsnajksnaksnaksakaksasnskasnkanskska
          sansanskanklanskanaksnnasknansnaksnkasnkansksas
          snfjnkfjdiojfdkfmklmdkmnsjdijdeksodksöldsekoo
          dskdnksldnksdnskdnksndnsdnks
          jsajknsjsnajksnaksnaksakaksasnskasnkanskska
          sansanskanklanskanaksnnasknansnaksnkasnkansksas
          snfjnkfjdiojfdkfmklmdkmnsjdijdeksodksöldsekoo
          dskdnksldnksdnskdnksndnsdnks
        </p>
      </div>

      <div className={classes.servicesCtn} >
        <h3 data-scroll
         data-scroll-speed="2"
        /*  data-scroll-class="scroll"
         class="custom" */
          >SERVICES</h3>

        <p data-scroll data-scroll-speed="2" >
          jsajknsjsnajksnaksnaksakaksasnskasnkanskska
          sansanskanklanskanaksnnasknansnaksnkasnkansksas
          snfjnkfjdiojfdkfmklmdkmnsjdijdeksodksöldsekoo
          dskdnksldnksdnskdnksndnsdnks
        </p>
      </div>

      <div className={classes.aboutCtn} >
        <h3 data-scroll 
        data-scroll-speed="2"
       /* data-scroll-class="scroll"
        class="custom" */
        /*data-scroll-position="top"
        data-scroll-direction="horizontal" */
        >ABOUT</h3>

        <p data-scroll data-scroll-speed="2" >
          jsajknsjsnajksnaksnaksakaksasnskasnkanskska
          sansanskanklanskanaksnnasknansnaksnkasnkansksas
          snfjnkfjdiojfdkfmklmdkmnsjdijdeksodksöldsekoo
          dskdnksldnksdnskdnksndnsdnks
        </p>
      </div>
      
      </div>
  
      </SectionContainer>
 
    </>
  );
};

export default HomePage;




// HomePage.js
/*import React, { useRef } from "react";
import SectionContainer from "../components/SectionContainer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Connect from "../components/Connect";
import ScrollCtn from "../components/ScrollCtn";

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
    <ScrollCtn />
    </SectionContainer>
    </>
  );
};

export default HomePage; */
