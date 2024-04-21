import React from "react";

const About = ({ scrollRef }) => {
  return ( 
    <div ref={scrollRef}>
      <div className={classes.pageCtn}>
        <h3 data-scroll data-scroll-speed="2" >ABOUT</h3>
        <p data-scroll data-scroll-speed="2" >
          jsajknsjsnajksnaksnaksakaksasnskasnkanskska
          sansanskanklanskanaksnnasknansnaksnkasnkansksas
          snfjnkfjdiojfdkfmklmdkmnsjdijdeksodksöldsekoo
          dskdnksldnksdnskdnksndnsdnks
        </p>
      </div>
    </div>
  );
}
 
export default About;



// <h3 data-scroll-class={`${classes.scroll}`} data-scroll-speed="2" className={classes.customH3}>ABOUT</h3>




/* import React from "react";
import classes from '../styles/about.module.css'

const About = () => {
  return ( 
    <>

    <div data-scroll-container className={classes.pageCtn}>
      <section data-scroll-container clas className={classes.leftCtn}>
        <h3>ABOUT</h3>
      </section>
      <section data-scroll-container clas className={classes.rightCtn}>
        <p>jsajknsjsnajksnaksnaksakaksasnskasnkanskska
          sansanskanklanskanaksnnasknansnaksnkasnkansksas
          snfjnkfjdiojfdkfmklmdkmnsjdijdeksodksöldsekoo
          dskdnksldnksdnskdnksndnsdnks
        </p>
      </section>

    </div>
    </>
   );
}
 
export default About; */