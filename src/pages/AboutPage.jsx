import React from "react";
import classes from "../styles/about.module.css"
import profilePic from "../assets/profilePic.png"
import Arrow from "../components/Arrow.jsx"
import Connect from "../components/Connect.jsx";
import Architecture from "../assets/architecture.jpg"
import Wandelbots from "../assets/wb.jpeg"

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
                <span>About me</span>
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
                    <span>Journey</span>
                </div>

                <div className={classes.architectCtn}>
                    <div className={classes.text}>
                    <div className={classes.yearTitle}>
                    <p>15-17</p>
                    <div className={classes.form}>
                    <span>Form & Function</span>
                    <p>Architect | Skopje</p>
                    </div>
                    </div>

                    <div className={classes.yearTitle}>
                    <p>17-21</p>
                    <div className={classes.form}>
                    <span>Form & Function</span>
                    <p>Architect | Berlin</p>
                    </div>
                    </div>
                    </div>
                    <img src={Architecture} />
                </div>

                <br/>
                <br/>
                <br/>
                
                <div className={classes.wandelbotsCtn}>
                    <div className={classes.text}>
                    <div className={classes.yearTitle}>
                    <p>22-23</p>
                    <div className={classes.form}>
                    <span>Form & Function & Scale</span>
                    <p>UX & UI Designer | Wandelbots Robotics </p>
                    </div>
                    </div>

                    </div>
                    <img src={Wandelbots} />
                </div>

               


              {  /* <div className={classes.experienceText}>
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
                </div> */}
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
                        <div className={classes.list}>
                            <li>User Research (Surveys & Interviews)</li>
                            <li>User Personas & User flows</li>
                            <li>Wireframing & Prototyping</li>
                            <li>User Testing</li>
                            <li>Visual & Interaction Design</li>
                            {/* <li>Design System</li> */}
                        </div>
                    </div>
                     <div className={classes.frontend}>
                        <span>Frontend Development</span>
                        <div className={classes.list}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React.js</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                        </div>
                    </div>
                    
                </div>

            </div>


        </div>

        <Connect />
        
        </>
     );
}
 
export default AboutPage;




/* <ul className={classes.list}>
<li>Design Thinking Methods</li>
<li>User Research (User Testing, Surveys & Interviews)</li>
<li>User Personas & User flows</li>
<li>Wireframing & Prototyping</li>
<li>Visual & Interaction Design</li>

</ul>


<ul className={classes.list}>
<li>HTML</li>
<li>CSS</li>
<li>React.js</li>
<li>JavaScript</li>
<li>Node.js</li>
</ul> */