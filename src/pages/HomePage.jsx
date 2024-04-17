import React from "react";
import classes from '../styles/homePage.module.css';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import Header from "../components/Header";
import Projects from "../components/Projects";
import About from "../components/About";
import Services from "../components/Services";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return ( 
    <>
    <Header />
    <Projects />
    <About />
   {/* <Services /> */}
   <Footer />

    </>
   );
}
 
export default HomePage;

/*ixed='top' z-index='1000'*/