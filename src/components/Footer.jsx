import React from "react";
import classes from "../styles/footer.module.css"
import { Link } from "react-router-dom";


const Footer = () => {
    return ( 
    <>
    <div className={classes.pageCtn}>
        <div className={classes.leftCtn}>
            <Link to='https://www.linkedin.com/in/gjorgieva/' target="_blank" rel="noreferrer">
                <span>LinkedIn</span>
            </Link>
            <Link to='https://www.behance.net/gjorgieva' target="_blank" rel="noreferrer">
                <span>Behance</span>
            </Link>
            <Link to='https://dribbble.com/gjorgieva' target="_blank" rel="noreferrer">
                <span>Dribbble</span>
            </Link>
            <Link to='https://github.com/HristinaGjo?tab=repositories' target="_blank" rel="noreferrer">
                <span>Github</span>
            </Link>
        </div>
        <div className={classes.rightCtn}>
    <span> &copy; Hristina Gjorgieva 2024 </span>
         </div>

    </div>

    </> 
    );
}
 
export default Footer;