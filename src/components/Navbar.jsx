import React, { useRef } from "react";
import { Link } from "react-router-dom";
import classes from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navCtn}>
      <div className={classes.leftCtn}>
        <Link to="/">
        <p>Hristina Gjorgieva</p>
        </Link>
      </div>
      <div className={classes.rightCtn}>
        <Link to="/about">
        <p>About</p>
        </Link>
       {/* <p onClick={() => scrollToRef("projectsRef")}>Projects</p> */}
       {/* <p onClick={() => scrollToRef("projectsRef")}>Connect</p> */}
      </div>
    </div>
  );
};

export default Navbar;


// before Link to , navigate to section when i had components 
/* import React, { useRef } from "react";
import { Link } from "react-router-dom";
import classes from "../styles/navbar.module.css";

const Navbar = ({ scrollToRef }) => {
  return (
    <div className={classes.navCtn}>
      <div className={classes.leftCtn}>
        <p onClick={() => scrollToRef("headerRef")}>Hristina Gjorgieva</p>
      </div>
      <div className={classes.rightCtn}>
        <p onClick={() => scrollToRef("aboutRef")}>About</p>
        <p onClick={() => scrollToRef("projectsRef")}>Work</p>
      <p onClick={() => scrollToRef("projectsRef")}>Connect</p> 
      </div>
    </div>
  );
};

export default Navbar; */





