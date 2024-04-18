import React from "react";
import classes from "../styles/footer.module.css"
import { Link } from "react-router-dom";


const Footer = () => {
    return ( 
    <>
    <div className={classes.pageCtn}>
        <div className={classes.leftCtn}>
            <Link to='https://www.linkedin.com/in/gjorgieva/' target="_blank" rel="noreferrer">LinkedIn</Link>
            <Link to='https://www.behance.net/gjorgieva' target="_blank" rel="noreferrer">Behance</Link>
            <Link to='https://dribbble.com/gjorgieva' target="_blank" rel="noreferrer">Dribbble</Link>
            <Link to='https://github.com/HristinaGjo?tab=repositories' target="_blank" rel="noreferrer">Github</Link>
        </div>
        <div className={classes.rightCtn}>
    <span> &copy; Hristina Gjorgieva </span>
         </div>

    </div>

    </> 
    );
}
 
export default Footer;