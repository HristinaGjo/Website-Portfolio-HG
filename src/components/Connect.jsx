import React, { useState, useEffect, useRef } from "react";
import classes from "../styles/connect.module.css";

const Connect = ({ id }) => {
  const titleRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const connectSection = titleRef.current;
      if (!connectSection) return;

      const rect = connectSection.getBoundingClientRect();
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
    <div id={id} className={classes.pageCtn}>
      <div className={classes.leftCtn} ref={titleRef}>
        <div className={`${animate ? classes.animate : ""}`}>
          <span style={{ "--i": 1 }}>L</span>
          <span style={{ "--i": 2 }}>E</span>
          <span style={{ "--i": 3 }}>T</span>
          <span style={{ "--i": 4 }}>'</span>
          <span style={{ "--i": 5 }}>S</span>
          <span style={{ "--i": 6 }}> &nbsp;</span>
          <span style={{ "--i": 7 }}>C</span>
          <span style={{ "--i": 8 }}>H</span>
          <span style={{ "--i": 9 }}>A</span>
          <span style={{ "--i": 10 }}>T</span>
      {    /* <span style={{ "--i": 11 }}>E</span>
          <span style={{ "--i": 12 }}>C</span>
          <span style={{ "--i": 13 }}>T</span> */}
        </div>
        
        <a className={` ${classes.emailLink} ${animate ? classes.animate : ""}`}href="mailto:hgjorgieva@gmail.com">hgjorgieva@gmail.com</a>
      </div>
    </div>
  );
};

export default Connect;
