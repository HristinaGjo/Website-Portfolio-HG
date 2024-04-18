import React from "react";
import classes from "../styles/navbar.module.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
    <>
    <div className={classes.navCtn}>
        <div className={classes.leftCtn}>
        <Link to='/'>Hristina Gjorgieva</Link>
        </div>
        <div className={classes.rightCtn}>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Work</Link>
            </div> 
    </div>
    </> 
    );
}
 
export default Navbar;