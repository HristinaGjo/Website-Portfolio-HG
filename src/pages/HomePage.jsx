import React, { useRef, useEffect } from "react";
import SectionContainer from "../components/SectionContainer";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'; // Importing LocomotiveScrollProvider
import locomotiveScroll from 'locomotive-scroll';
import classes from '../styles/homePage.module.css'
import imageOne from '../assets/me.png'
import imageTwo from '../assets/me.png'
import Footer from '../components/Footer.jsx'

const HomePage = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    console.log("Initializing locomotiveScroll instance...");
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone: {
        smooth: true,
        smoothMobile: 0.5 // Adjust the scroll speed for mobile
      }
    });
   /* console.log("locomotiveScroll instance initialized:", scroll); */

    // Destroy the scroll instance when the component unmounts
    return () => {
      /* console.log("Destroying locomotiveScroll instance..."); */
      scroll.destroy();
      /* console.log("locomotiveScroll instance destroyed"); */
    };
  }); // Empty dependency array to run effect only once

  return (
  
      <SectionContainer>
        <div data-scroll-container className={classes.pageCtn} ref={scrollRef}>
          
            <div data-scroll-section className={classes.headerCtn}  >
              <h1 data-scroll data-scroll-speed={4}>
                DIGITAL DESIGNER
                 </h1>
            </div>
        

        
  

      
            <div className={classes.aboutCtn}
            >
              <h3 >ABOUT</h3>
              <p>
               sdjskdjksjskdjsjdsdksdkskdslkdskd
               sdklsnksmdksmkdmskdmsmdkmdmdmsmdmsmdmmms
               skdmksmdkmskmdksmkdmskmdsmmsmdsmdsmdmskmdmsmdmsd
               smdsmdkmskmdsmdmskldmsklmdksmdmsmdksmkdmskmdsmmskmsdm
               mdxsdmksldmskdmdmsdmsmdskmdkmskdmsmdsmdmsmdsmdsdmsdmdksm
              </p>
            </div>
    

        
            <div className={classes.servicesCtn}>
              <h3 >SERVICES</h3>
              <p>
              sdjskdjksjskdjsjdsdksdkskdslkdskd
               sdklsnksmdksmkdmskdmsmdkmdmdmsmdmsmdmmms
               skdmksmdkmskmdksmkdmskmdsmmsmdsmdsmdmskmdmsmdmsd
               smdsmdkmskmdsmdmskldmsklmdksmdmsmdksmkdmskmdsmmskmsdm
               mdxsdmksldmskdmdmsdmsmdskmdkmskdmsmdsmdmsmdsmdsdmsdmdksm
              </p>
            </div>


      
            <div className={classes.connectCtn} >
              <h3>LET'S CONNECT</h3>
              <p>
                // Your CONNECT content here
              </p>
            </div>
            <Footer />
        </div>
    
      </SectionContainer>
  );
};

export default HomePage;










/*import React, { useRef, useEffect } from "react";
import SectionContainer from "../components/SectionContainer";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'; // Importing LocomotiveScrollProvider
import locomotiveScroll from 'locomotive-scroll';
import classes from '../styles/homePage.module.css'
import imageOne from '../assets/me.png'
import imageTwo from '../assets/me.png'

const HomePage = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    console.log("Initializing locomotiveScroll instance...");
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
    console.log("locomotiveScroll instance initialized:", scroll);

    // Destroy the scroll instance when the component unmounts
    return () => {
      console.log("Destroying locomotiveScroll instance...");
      scroll.destroy();
      console.log("locomotiveScroll instance destroyed");
    };
  }); // Empty dependency array to run effect only once

  return (
    <LocomotiveScrollProvider watch={[]} containerRef={scrollRef}>
      <SectionContainer>
        <div data-scroll-container className={classes.pageCtn} ref={scrollRef}>
          <section data-scroll-section>
            <div className={classes.headerCtn}  >
              <h3 data-scroll data-scroll-speed={2} >Hello world! I am Hristina Gjorgieva
                 Hello world! I am Hristina Gjorgieva
                 Hello world! I am Hristina Gjorgieva
                 Hello world! I am Hristina Gjorgieva
                 Hello world! I am Hristina Gjorgieva
                 Hello world! I am Hristina Gjorgieva</h3>
            </div>
          </section>

          <section data-scroll-section>
            <div className={classes.projectsCtn}>
              <div className={classes.projectOne} data-scroll data-scroll-speed={1}
               data-scroll-position="top"
               data-scroll-direction="vertical">
                <img src={imageOne} alt="Project One" />
                <h3>LEGAL</h3>
              </div>
              <div className={classes.projectTwo} data-scroll data-scroll-speed={1}
               data-scroll-position="top"
               data-scroll-direction="vertical">
                <h3>LEGAL</h3>
                <img src={imageTwo} alt="Project Two" />
              </div>
            </div>
          </section>

          <section data-scroll-section>
            <div className={classes.aboutCtn} data-scroll data-scroll-speed={1}
                 data-scroll-position="top"
                 data-scroll-direction="vertical"
            >
              <h3 >ABOUT</h3>
              <p>
               sdjskdjksjskdjsjdsdksdkskdslkdskd
               sdklsnksmdksmkdmskdmsmdkmdmdmsmdmsmdmmms
               skdmksmdkmskmdksmkdmskmdsmmsmdsmdsmdmskmdmsmdmsd
               smdsmdkmskmdsmdmskldmsklmdksmdmsmdksmkdmskmdsmmskmsdm
               mdxsdmksldmskdmdmsdmsmdskmdkmskdmsmdsmdmsmdsmdsdmsdmdksm
              </p>
            </div>
          </section>

          <section data-scroll-section>
            <div className={classes.servicesCtn} data-scroll data-scroll-speed={1}
             data-scroll-position="top"
             data-scroll-direction="vertical">
              <h3 >SERVICES</h3>
              <p>
              sdjskdjksjskdjsjdsdksdkskdslkdskd
               sdklsnksmdksmkdmskdmsmdkmdmdmsmdmsmdmmms
               skdmksmdkmskmdksmkdmskmdsmmsmdsmdsmdmskmdmsmdmsd
               smdsmdkmskmdsmdmskldmsklmdksmdmsmdksmkdmskmdsmmskmsdm
               mdxsdmksldmskdmdmsdmsmdskmdkmskdmsmdsmdmsmdsmdsdmsdmdksm
              </p>
            </div>
          </section>

          <section data-scroll-section>
            <div className={classes.connectCtn} data-scroll data-scroll-speed={1}
             data-scroll-position="top"
             data-scroll-direction="vertical">
              <h3>LET'S CONNECT</h3>
              <p>
                // Your CONNECT content here
              </p>
            </div>
          </section>
        </div>
      </SectionContainer>
    </LocomotiveScrollProvider>
  );
};

export default HomePage; */
