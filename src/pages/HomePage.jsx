import React, { useRef } from "react";
import classes from '../styles/homePage.module.css';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import coverImage from '../assets/cover.jpeg';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const HomePage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 10,
    restDelta: 0.001
  });

  const y = useParallax(scrollYProgress, 300);

  return (
    <>
      <div className={classes.pageCtn}>
      <div className={classes.headerCtn}>
             
            

             <div className={classes.headlineText}>
             {/* <h1>Hello World</h1> */}
            {/* <h3>Hey there!<br/> */}
             <br/>
             <h3> I'M HRISTINA</h3> 
             <span> <h3>DESIGNER WITH DEVELOPER'S MIND &</h3></span> 
             <span> <h3>DEVELOPER WITH DESIGNER EYES</h3></span> 
             <span>UX UI DESIGN |</span> {"  "}
             <span>INTERACTION DESIGN |</span> {"  "}
             <span>FRONT END DEVELOPMENT</span>
             </div>
         </div>

        {/* Scroll animation section */}
        <section ref={ref} className={classes.scrollSection}>
          <motion.div className={classes.imageContainer} style={{ y }}>
            <img src={coverImage} alt="Cover" />
          </motion.div>
          <div className={classes.textContainer}>
            <h2>Your Text Goes Here</h2>
            <p>Additional text description...</p>
          </div>
        </section>
      </div>

      {/* Progress bar */}
      <motion.div className={classes.progress} style={{ scaleX }} />
    </>
  );
};

export default HomePage;
