import React from "react";
import classes from "../styles/header.module.css";
import image from "../assets/me.png";

const Header = React.forwardRef((props, ref) => {
  return (
   /*  <div ref={ref}  className={classes.pageCtn}> */
   <div data-scroll-container className={classes.pageCtn}>

    <div className={classes.headerCtn}>
    
        <h2> 
          JBdsbdjsndnsjdnkdkdmskdskdsmkdmskdms
          njncjcnkckxmcxkcmkcmxkcmcmxxc cmxnmc
          cbxbcxjcnjnxnjncx
        </h2>
    
      </div>
    </div>

  );
});

export default Header;


// before gradient effect on the header section//

/* import React from "react";
import classes from "../styles/header.module.css";
import image from "../assets/me.png";

const Header = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}  className={classes.pageCtn}>
    <div className={classes.headerCtn}>
      <div className={classes.leftCtn}>
        <img src={image} alt="picture" />
      </div>
      <div className={classes.rightCtn}>
        <div className={classes.line1}>CREATIVE</div>
        <div className={classes.line2}>DESIGNER &</div>
        <div className={classes.line3}>FRONT END </div>
        <div className={classes.line4}>DEVELOPER</div>
      </div>
    </div>
    </div>
  );
});

export default Header; */
