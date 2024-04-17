import React from "react";
import classes from "../styles/header.module.css"
import image from "../assets/me.png"

const Header = () => {
    return ( 
    <>
     <div className={classes.headerCtn}>
        <div className={classes.leftCtn}>
        <img src={image} alt="picture"/>
        </div>
      { /* <div className={classes.imageCtn}> */}
      <div className={classes.rightCtn}>
      <div className={classes.line1}>CREATIVE</div>
      <div className={classes.line2}>DESIGNER &</div>
      <div className={classes.line3}>FRONT END </div>
      <div className={classes.line4}>DEVELOPER</div>
      </div>
    </div>
    <div className={classes.bottomCtn}>
        <p className={classes.leftP}> Based in Berlin</p>
        <p className={classes.rightP}> hgjorgieva@gmail.com</p>
      </div>
    </> 
    );
}
 
export default Header;