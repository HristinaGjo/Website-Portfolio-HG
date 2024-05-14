import React from "react";
import classes from "../styles/about.module.css"
import profilePic from "../assets/profilePic.png"
import Arrow from "../components/Arrow.jsx"
import Connect from "../components/Connect.jsx";

const AboutPage = () => {
    return ( 
        <>
        <div className={classes.pageCtn}>

            <div className={classes.titleCtn}>
                <h2>About</h2>
                <div className={classes.imageCtn}>
                <img src={profilePic}/>
                </div>
            </div>

            <hr />

            <div className={classes.aboutMeCtn}>
                <div className={classes.arrowCtn}>
                <Arrow />
                <span>Overview</span>
                </div>
            
            <div className={classes.aboutText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tempor, orci id commodo rhoncus, odio neque
              pellentesque augue, eget convallis ante sem id est. Cras facilisis
              porttitor enim ac maximus. Curabitur feugiat est metus, eget
              posuere est euismod elementum. Mauris auctor nulla mauris, ac
              malesuada est pretium sed. Mauris venenatis nibh vehicula
              tincidunt imperdiet. Morbi id suscipit leo. Donec vestibulum
              viverra turpis, nec blandit nibh mattis sed.
            </p>

            <br/>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tempor, orci id commodo rhoncus, odio neque
              pellentesque augue, eget convallis ante sem id est. Cras facilisis
              porttitor enim ac maximus. Curabitur feugiat est metus, eget
              posuere est euismod elementum. Mauris auctor nulla mauris, ac
              malesuada est pretium sed. Mauris venenatis nibh vehicula
              tincidunt imperdiet. Morbi id suscipit leo. Donec vestibulum
              viverra turpis, nec blandit nibh mattis sed.
            </p>
            </div> 
            </div>

            <hr/>

            <div className={classes.experienceCtn}>
                <div className={classes.arrowCtn}>
                    <Arrow/>
                    <span>Experience</span>
                </div>
                <div className={classes.experienceText}>
                    <div className={classes.wandelbots}>
                        <span>Oct 2022 - Sept 2023</span>
                    <span>UX & UI Designer</span>
                    <span>Wandelbots Software Solutions</span>
                    </div>

                    <div className={classes.architect}>
                        <span> Jan 2017 - Nov 2021</span>
                        <span> Architect</span>
                        <span> Berlin </span>
                    </div>
                </div>
            </div>

            <hr/>
            
            <div className={classes.skillsCtn}>

                <div className={classes.arrowCtn}>
                    <Arrow />
                    <span>Skills</span>
                </div>

                <div className={classes.skillsText}>
                    <div className={classes.designStrategy}>
                        <span>Design & Strategy</span>
                        <ul className={classes.list}>
                            <li>Design Thinking Methods</li>
                            <li>User Research (User Testing, Surveys & Interviews)</li>
                            <li>User Personas & User flows</li>
                            <li>Wireframing & Prototyping</li>
                            <li>Visual & Interaction Design</li>
                            {/* <li>Design System</li> */}
                        </ul>
                    </div>
                     <div className={classes.frontend}>
                        <span>Frontend Development</span>
                        <ul className={classes.list}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React.js</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                    
                </div>

            </div>


        </div>

        <Connect />
        
        </>
     );
}
 
export default AboutPage;