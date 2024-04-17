import React, { useState, useEffect, useRef } from "react";
import classes from "../styles/about.module.css";

const About = ({ id }) => {
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
        <div className={`${classes.leftCtn} ${animate ? classes.animate : ""}`} ref={titleRef}>
          <span style={{ "--i": 1 }}>A</span>
          <span style={{ "--i": 2 }}>B</span>
          <span style={{ "--i": 3 }}>O</span>
          <span style={{ "--i": 4 }}>U</span>
          <span style={{ "--i": 5 }}>T</span>
        </div>
        <div className={classes.rightCtn}>
          Jjandjsndjndsndsbjdsnsjndjsdnkjssndk x ndbsjdjsdjdnjsnjsnfnklfsklf
          jssjdsdksjdkjsjskjdlksjndsjdnsnddnsndkdnkdnskmdsmdsmdsldmsm
          AAAAAAAA shdijisjdsjjdshsjhasjajajajkskalksk dsdjskjdskjdkssdkdkskdlksdlksdkskds
          ssmndsnsndjsndlkdsmdklsmkdmsmdsmdslmdldmldmsmdmssdmdlms
          dnsdnsdnksmdsdnksdnksdnskmdsmdsdmsmdsdmsmdlsdlsdlsd,ls,dls,dls,dls,ds,s,,sd
          dmskmdsmdmsmdmdsmsnddmkmdmssdmsldsdmdsmdjsndndnnmdmdmd
        </div>
      </div>
    </>
  );
};

export default About;
