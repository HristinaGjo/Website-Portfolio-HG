// SectionContainer.js
import React from "react";
import classes from "../styles/sectionContainer.module.css";

const SectionContainer = ({ children }) => {
  return <div className={classes.sectionContainer}>{children}</div>;
};

export default SectionContainer;
