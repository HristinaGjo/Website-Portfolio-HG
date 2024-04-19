import React, { useRef, useState, useEffect } from "react";
import classes from "../styles/projects.module.css";
import imageOne from "../assets/me.png"

const Projects = React.forwardRef (({ id }, ref) => {
    const [animate, setAnimate] = useState(false);
    const titleRef = useRef(null);
  
    useEffect(() => {
      function handleScroll() {
        const projectSection = titleRef.current;
        if (!projectSection) return;
  
        const rect = projectSection.getBoundingClientRect();
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
        <div  ref={ref} id={id} className={classes.pageCtn}>
            <div className={classes.projects}>
            <div className={classes.projectOne}>
                <span>LEGAL</span>
                    <img src={imageOne}></img>
            </div>
            <div className={classes.projectTwo}>
                <span>LEGAL</span>
                    <img src={imageOne}></img>
            </div>
            </div>
    
          </div>
         
      </>
    );
  });
  
  export default Projects;



/* import React, { useRef, useState, useEffect } from "react";
import classes from "../styles/projects.module.css";


const Projects = React.forwardRef ((props,ref) => {
    // State to manage animation
    const [animate, setAnimate] = useState(false);

    // Ref for the title element
    const titleRef = useRef(null);

    // Effect to add scroll event listener
    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            // Check if titleRef is not null
            if (titleRef.current) {
                // Get the bounding rectangle of the title element
                const titleRect = titleRef.current.getBoundingClientRect();

                // Check if the top of the title element is within the viewport
                if (titleRect.top < window.innerHeight && titleRect.bottom >= 0) {
                    // Set animate state to true to trigger animation
                    setAnimate(true);
                } else {
                    // Set animate state to false if title is not in viewport
                    setAnimate(false);
                }
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up function to remove scroll event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    

    return (
        <>
            <div ref={ref} className={classes.pageCtn}>
                <div className={`${classes.title} ${animate ? classes.animate : ""}`} ref={titleRef}>
                    PROJECTS 
                </div>
                <div className={classes.projectsBackground}></div> 
            </div>
        </>
    );
});

export default Projects; */
