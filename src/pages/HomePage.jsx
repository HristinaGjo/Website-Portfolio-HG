import React, { useRef } from "react";
import classes from '../styles/homePage.module.css';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import coverImage from '../assets/effect.png';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance * 0.5, distance * 0.5]);
}

const HomePage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useParallax(scrollYProgress, 300);

  return (
    <>
      <div className={classes.pageCtn}>
          <div className={classes.headlineText}>
            {/* <h3> I'M HRISTINA</h3> */}
            <span> <h3 className={classes.developer}>DESIGNER {" "}</h3> </span> 
            <span><h3 style={{ marginLeft: '10px' }}>WITH DEVELOPER'S MIND </h3></span>
            <span> <h3 className={classes.developer}>DEVELOPER  {" "} </h3></span> 
            <span><h3 style={{ marginLeft: '10px' }}>WITH DESIGNER EYES</h3></span>
            <div className={classes.services}>
            <span>UX UI DESIGN |</span> {"  "}
            <span>INTERACTION DESIGN |</span> {"  "}
            <span>FRONT END DEVELOPMENT</span>
            </div>
        </div>

        <section ref={ref} className={classes.scrollSection}>
          <motion.div className={classes.imageContainer} style={{ y }}>
            <img src={coverImage} alt="Cover" />
            <motion.h2 className={classes.textOverlay} style={{ y }}>
              About Me
            </motion.h2>
          </motion.div>
        </section>

        <div className={classes.textContainer}>
          <Link to="/legal" className={classes.projectLink}>
            <div className={classes.projectOne}> <h3 className={classes.text}>LEGAL UX CASE STUDY</h3> </div>
          </Link>
          <div className={classes.projectTwo}> <h3 className={classes.text}>INTERACTION DESIGN</h3> </div>
          <div className={classes.connectText}>
            <h3>Let's Connect</h3>
            <motion.div
              className={classes.arrowContainer}
              animate={{
                y: [0, 40, 0],
                transition: {
                  repeat: Infinity,
                  duration: 1.5,
                },
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </motion.div>
          </div>
        </div>
       
      </div>

      <motion.div className={classes.progress} style={{ scaleX }} />
      <Footer />
    </>
  );
};

export default HomePage;
