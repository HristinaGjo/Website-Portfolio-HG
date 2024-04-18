import React, { useState, useEffect, useRef } from "react";
import classes from "../styles/services.module.css"

const Services = ({ id }) => {
    const [animate, setAnimate] = useState(false);
    const titleRef = useRef(null);
  
    useEffect (() => {
      function handleScroll() {
        const aboutSection = titleRef.current;
        if (!aboutSection) return;
  
        const rect = aboutSection.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
  
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      }
  
      window.addEventListener("scroll", handleScroll);
      // Call handleScroll once on mount to check if the element is initially in the viewport
      handleScroll();
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return ( 
        <>
        <div id={id} className={classes.pageCtn}>
        <div className={`${classes.leftCtn} ${animate ? classes.animate : ""}`} ref={titleRef}>
        <span style={{ "--i": 1 }}>S</span>
          <span style={{ "--i": 2 }}>E</span>
          <span style={{ "--i": 3 }}>R</span>
          <span style={{ "--i": 4 }}>V</span>
          <span style={{ "--i": 5 }}>I</span>
          <span style={{ "--i": 5 }}>C</span>
          <span style={{ "--i": 5 }}>E</span>
          <span style={{ "--i": 5 }}>S</span>
                <p>things I can help you with</p>
            </div>
            <div className={classes.rightCtn}>
                <span className={classes.line1}>01 {" "}UX & UI Design</span>
                <span className={classes.line2}>02 {" "}Web Development</span>
                <span className={classes.line3}>03 {" "}Interaction Design</span>
            </div>
        </div>
        </>
     );
}
 
export default Services;