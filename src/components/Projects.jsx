import React from "react";
import classes from "../styles/projects.module.css"
import Legal from "../assets/plainLegal.png"
import { Link } from "react-router-dom";


const Projects = () => {
  return ( 
    <>
    <div className={classes.pageCtn}>
      <div className={classes.title}>
      <span>SELECTED</span>
        <h1>Projects</h1>
        </div>

      <div className={classes.projectsCtn}>
        <Link to="/legal">
         <div className={classes.imgCtnLegal}>
          <img src={Legal} />
          </div>
          <span>Legal app | UX & UI Design</span>
          </Link>

        <Link to="/legal">
          <div className={classes.imgCtnLegal}>
          <img src={Legal} />
          </div>
          <span>Legal app | UX & UI Design</span>
        </Link>
      </div>

    </div>
    </>
   );
}
 
export default Projects;