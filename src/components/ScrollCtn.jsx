import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import styles from '../styles/scrollCtn.module.css'
import About from './About';
import Header from './Header';
import Navbar from './Navbar';
import HomePage from '../pages/HomePage';
import Projects from './Projects';
import Services from './Services';

const ScrollCtn = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
        });

        // Destroy the scroll instance when the component unmounts
        return () => {
            scroll.destroy();
        };
    }, []);

    return (
        <div data-scroll-container ref={scrollRef}>
          {  /*<Navbar/>
           <Header/> */}
           <Projects />
           <About />
           <Services />
        </div>
    );
};

export default ScrollCtn;
