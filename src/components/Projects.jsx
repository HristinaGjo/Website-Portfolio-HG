import React, { useRef, useState, useEffect } from "react";
import classes from "../styles/projects.module.css";


const Projects = () => {
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
            <div className={classes.pageCtn}>
                <div className={`${classes.title} ${animate ? classes.animate : ""}`} ref={titleRef}>
                    PROJECTS * PROJECTS * PROJECTS
                </div>
                <div className={classes.projectsBackground}></div> 
            </div>
        </>
    );
};

export default Projects;
