import React, { useRef, useState } from "react";
import classes from '../styles/homePage.module.css';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useInView } from 'react-intersection-observer'; // Import useInView hook
import coverImage from '../assets/effect.png';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

function HomePage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useParallax(scrollYProgress, 300);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Use useInView hook to detect when the image comes into view
  const { ref: imageRef, inView } = useInView({
    threshold: 0.65, // Trigger when 50% of the image is visible
    triggerOnce: true // Only trigger once
  });

  // Update isInView state when the image comes into view
  if (inView && !isInView) {
    setIsInView(true);
  }

  return (
    <>
      <div className={classes.pageCtn}>
          <div className={classes.headlineText}>
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
            <motion.div
              initial={false}
              animate={
                isLoaded && isInView // Use isInView to conditionally apply the effect
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              ref={imageRef} // Attach the ref to the image
            >
              <img 
                src={coverImage} 
                alt="Cover" 
                onLoad={() => setIsLoaded(true)} 
                className={isLoaded ? classes.loaded : classes.loading}
              />
            </motion.div>
            <motion.h2 className={classes.textOverlay} style={{ y }}>
              ABOUT ME
            </motion.h2>
          </motion.div>
        </section>

        <div className={classes.textContainer}>
          <Link to="/legal" className={classes.projectLink}>
            <div className={classes.projectOne}> <h3 className={classes.text}>LEGAL UX CASE STUDY</h3> </div>
          </Link>
          <div className={classes.projectTwo}> <h3 className={classes.text}>INTERACTION DESIGN</h3> </div>
          <div className={classes.connectText}>
            <h3>FEEL FREE <br/> TO CONTACT ME <br/>IF YOU HAVE <br/> ANY PROJECTS  <br/> TO REQUEST</h3>
            <div className={classes.arrowCtn}>
            <div className={classes.contactLine}>
              <svg
               width="100%"
               height="194"
               viewBox="0 0 722 194"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M720 44C720 117 507.356 232.749 271.675 68.1592C35.9949 -96.4308 -5.61532 84.8047 3.03962 193"
                  stroke="#282828"
                  strokeWidth="4"
                ></path>
              </svg>
              <div className={classes.contactArrow}>
                <svg
                  width="47"
                  height="22"
                  viewBox="0 0 47 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 2L18.5 19L35 2" stroke="#282828" strokeWidth="4"></path>
                </svg>
              </div>
            </div>
            </div>
          </div> 
        </div>
       
      </div>
      <Footer />
      <motion.div className={classes.progress} style={{ scaleX }} />
    </>
  );
};

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance * 0.5, distance * 0.5]);
}

export default HomePage;
