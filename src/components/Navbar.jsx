import React, { useRef } from "react";
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
      </div>
    </div>
  );
};

export default Navbar;
