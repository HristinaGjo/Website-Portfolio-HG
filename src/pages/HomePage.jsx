import React, { useRef, useState, useEffect } from "react";
import classes from '../styles/homePage.module.css';
import { motion, useScroll, useSpring } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import Header from "../components/Header";
import Projects from "../components/Projects";
import About from "../components/About";
import Services from "../components/Services";

const HomePage = () => {
  return ( 
    <>
    
    <Header />
    <Projects />
    <About />
   <Services />

    </>
   );
}
 
export default HomePage;

