import React, { useState, useEffect, useRef } from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import classes from "../styles/services.module.css";

const Services = ({ id }) => {
  const [animate, setAnimate] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
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
        {/* Apply ScrollAnimation to the "SERVICES" text */}
        <ScrollAnimation animateIn='tada' initiallyVisible={true}>
          <div className={`${classes.leftCtn} ${animate ? classes.animate : ""}`} ref={titleRef}>
            <span style={{ "--i": 1 }}>S</span>
            <span style={{ "--i": 2 }}>E</span>
            <span style={{ "--i": 3 }}>R</span>
            <span style={{ "--i": 4 }}>V</span>
            <span style={{ "--i": 5 }}>I</span>
            <span style={{ "--i": 6 }}>C</span>
            <span style={{ "--i": 7 }}>E</span>
            <span style={{ "--i": 8 }}>S</span>
            <p>things I can help you with</p>
          </div>
        </ScrollAnimation>
        <div className={classes.rightCtn}>
          <span>01 {" "}UX & UI Design</span>
          <span>02 {" "}Web Development</span>
          <span>03 {" "}Interaction Design</span>
        </div>
      </div>
    </>
  );
}

export default Services;
