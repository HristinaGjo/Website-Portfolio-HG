import React, { useRef, useEffect } from "react";
import SectionContainer from "../components/SectionContainer";
import locomotiveScroll from 'locomotive-scroll';
import classes from '../styles/homePage.module.css'
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import imageOne from '../assets/me.png'
import imageTwo from '../assets/me.png'
/*import '../styles/scrollCtn.module.css';*/


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
      <SectionContainer>
        <div data-scroll-container className={classes.pageCtn} ref={scrollRef}>
          <section  data-scroll-section>
            <div className={classes.headerCtn}>
            <h3>Hello world! I am Hristina Gjorgieva</h3>
            </div>
          </section>

          <section data-scroll-section>
            <div className={classes.projectsCtn}>
              <div className={classes.projectOne} 
              data-scroll 
              data-scroll-speed="2">
                <img src={imageOne} alt="Project One" />
                <h3>LEGAL</h3>
              </div>
              <div className={classes.projectTwo} 
              data-scroll 
              data-scroll-speed="2"
             >
                <h3>LEGAL</h3>
                <img src={imageTwo} alt="Project Two" />
              </div>
            </div>
          </section>

          <section data-scroll-section>
          <div className={classes.aboutCtn} 
          data-scroll 
          data-scroll-speed="1" >
            <h3 >ABOUT</h3>
            <p>
              jsajknsjsnajksnaksnaksakaksasnskasnkanskskasdskdnksldnksdnskdnksndnsdnks
              jsajknsjsnajksnaksnaksakaksasnskasnkanskskasdskdnksldnksdnskdnksndnsdnks
              jsajknsjsnajksnaksnaksakaksasnskasnkanskskasdskdnksldnksdnskdnksndnsdnks
              jsajknsjsnajksnaksnaksakaksasnskasnkanskskasdskdnksldnksdnskdnksndnsdnks
              jsajknsjsnajksnaksnaksakaksasnskasnkanskskasdskdnksldnksdnskdnksndnsdnks
              jsajknsjsnajksnaksnaksakaksasnskasnkanskskasdskdnksldnksdnskdnksndnsdnks
              jsajknsjsnajksnaksnaksakaksasnskasnkanskskasdskdnksldnksdnskdnksndnsdnks
              jsajknsjsnajksnaksnaksakaksasnskasnkanskskasdskdnksldnksdnskdnksndnsdnks
              jsajknsjsnajksnaksnaksakaksasnskasnkanskskasdskdnksldnksdnskdnksndnsdnks
              jsajknsjsnajksnaksnaksakaksasnskasnkanskskasdskdnksldnksdnskdnksndnsdnks
              jsajknsjsnajksnaksnaksakaksasnskasnkanskskasdskdnksldnksdnskdnksndnsdnks
              jsajknsjsnajksnaksnaksakaksasnskasnkanskskasdskdnksldnksdnskdnksndnsdnks
              jsajknsjsnajksnaksnaksakaksasnskasnkanskskasdskdnksldnksdnskdnksndnsdnks
              jsajknsjsnajksnaksnaksakaksasnskasnkanskskasdskdnksldnksdnskdnksndnsdnks
              jsajknsjsnajksnaksnaksakaksasnskasnkanskskasdskdnksldnksdnskdnksndnsdnks
              jsajknsjsnajksnaksnaksakaksasnskasnkanskskasdskdnksldnksdnskdnksndnsdnks
              jsajknsjsnajksnaksnaksakaksasnskasnkanskskasdskdnksldnksdnskdnksndnsdnks
            </p>
            </div>
          </section>

          <section data-scroll-section>
           <div className={classes.servicesCtn} 
           data-scroll 
           data-scroll-speed="1">
            <h3>SERVICES</h3>
            <p>
              jsajknsjsnajksnaksnaksakaksasnskasnkanskska
              sansanskanklanskanaksnnasknansnaksnkasnkansksas
              snfjnkfjdiojfdkfmklmdkmnsjdijdeksodksöldsekoo
              dskdnksldnksdnskdnksndnsdnks
            </p>
            </div>
          </section>

          <section data-scroll-section>
            <div className={classes.connectCtn} 
            data-scroll 
            data-scroll-speed="1"
            >
            <h3>LET'S CONNECT</h3>
            <p>
              jsajknsjsnajksnaksnaksakaksasnskasnkanskska
              sansanskanklanskanaksnnasknansnaksnkasnkansksas
              snfjnkfjdiojfdkfmklmdkmnsjdijdeksodksöldsekoo
              dskdnksldnksdnskdnksndnsdnks
            </p>
            </div>
          </section>
        </div>
      </SectionContainer>
    </>
  );
};

export default HomePage;
