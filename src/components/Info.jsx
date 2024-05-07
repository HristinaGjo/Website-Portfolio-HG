import React from "react";
import classes from "../styles/info.module.css"
import { Link } from "react-router-dom";


const Info = () => {


    const aboutPageClick = () => {
        navigate ('/about');
      } 

    return ( 
    <>
    <div className={classes.pageCtn}>

        <div className={classes.aboutCtn}>
            <h2>About</h2>
            <hr />
            <div className={classes.textAbout}>
                <p>{/* empty space for the left side of the grid, so the text can be on the right side*/}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vestibulum tempor, orci id commodo rhoncus, odio neque pellentesque augue, 
            eget convallis ante sem id est. Cras facilisis porttitor enim ac maximus. 
            Curabitur feugiat est metus, eget posuere est euismod elementum. Mauris auctor nulla mauris, 
            ac malesuada est pretium sed. Mauris venenatis nibh vehicula tincidunt imperdiet. Morbi id suscipit leo. 
            Donec vestibulum viverra turpis, nec blandit nibh mattis sed.
            <br />
            <br />
            <Link to="/about">
                <button className={classes.buttonAbout} onClick={aboutPageClick}>Read More</button>
                </Link>
                </p>
            </div>
        </div>

        <div className={classes.services}>
            <h2>Services</h2>
            <hr />
            <div className={classes.textServices}>
                <div className={classes.column}>
                    <div className={classes.text}>
                <span className={classes.number}>01</span>
                <br/>
                <span className={classes.title}>UX & UI Design</span>
                <br/>
                <p>Crafting user-centric, intuitive and engaging digital experiences.</p>
                <br/>
                <br/>
                <br/>
                <span className={classes.title}>Process</span>
                <br/>
                <p>User Research & Discovery</p>
                {/* <span>User Persona Development</span> */}
                <p>UX Strategy</p>
                <p>Wireframing & Prototyping</p>
                <p>User Testing</p>
                <p>UI Design</p>
                    </div>
                </div>

                <div className={classes.column}>
                    <div className={classes.text}>
                <span className={classes.number}>02</span>
                <br/>
                <span className={classes.title}>Web Design</span>
                <br/>
                <p>A comprehensive design that lays the foundation for web implementation.</p>
                <br />
                <br/>
                <br/>
                <span className={classes.title}>Process</span>
                <br/>
                <p>Planing & Strategy</p>
                <p>Wireframing</p>
                <p>Website Design Mockups</p>
                <p>Responsive & mobile</p>
                </div>
                </div>

                <div className={classes.column}>
                    <div className={classes.text}>
                <span className={classes.number}>03</span>
                <br/>
                <span className={classes.title}>Web Development</span>
                <br/>
                <p>Bringing visuals to life through developing highly functional web solutions.</p>
                <br />
                <br/>
                <br/>
                <span className={classes.title}>Process</span>
                <br/>
                <p>Frontend Development</p>
                <p>Responsive Design</p>
                <p>Testing</p>
                <p>Deployment</p>
                </div>
                </div>
              
            </div>
        </div>

    </div>
    </> 
    );
}
 
export default Info;