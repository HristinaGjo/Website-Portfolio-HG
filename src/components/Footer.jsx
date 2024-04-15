import React from "react";
import  classes from "../styles/footer.module.css"
import { Link } from "react-router-dom";


const Footer = () => {
    return ( 
        <>
        <div className={classes.container}>
            <div className={classes.leftCtn}>
                <p>UX UI Design</p>
                <p>Interaction Design</p>
                <p>Front-End Development</p>
            </div>
            <div className={classes.middleCtn}>
            <a href="mailto:hgjorgieva@gmail.com">hgjorgieva@gmail.com</a>
                <p>Berlin, Germany</p>
            </div>
            <div className={classes.rightCtn}>
                <Link to='https://www.linkedin.com/in/gjorgieva/' target="_blank" rel="noreferrer">
                <p>LinkedIn</p>
                </Link>
                 <Link to='https://www.behance.net/gjorgieva' target="_blank" rel="noreferrer">
                <p>Behance</p> 
                </Link>
                <Link to='https://dribbble.com/gjorgieva' target="_blank" rel="noreferrer">
                <p>Dribbble</p>
                </Link>
                <Link to='https://github.com/HristinaGjo' target="_blank" rel="noreferrer">
                <p>GitHub</p>
                </Link>
            </div>
            <div>

            </div>

        </div>
        </>
     );
}
 
export default Footer;