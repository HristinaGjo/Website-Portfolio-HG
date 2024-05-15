import React from "react";
import classes from "../styles/about.module.css"
import profilePic from "../assets/profilePic.png"
import Arrow from "../components/Arrow.jsx"
import Connect from "../components/Connect.jsx";
import Architecture from "../assets/architecture2.jpg"
import Wandelbots from "../assets/wb.jpeg"

const AboutPage = () => {
    return ( 
        <>
        <div className={classes.pageCtn}>

            <div className={classes.titleCtn}>
                <div className={classes.aboutTitle}>
                {/* <h2>About</h2> */}
                <div className={classes.imageCtn}>
                <img src={profilePic}/>
                </div>
                </div>
         

         {/* <hr/> */}

            <div className={classes.aboutMeCtn}>
                <div className={classes.arrowCtn}>
                {/* <Arrow /> */}
                <div className={classes.textBlack}>
                <span>About me</span>
                </div> 
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
            </div>

            {/* <hr/> */}

            <div className={classes.experienceCtn}>

                <div className={classes.arrowCtn}>
                    {/* <Arrow/> */}
                    <div className={classes.text}>
                    <span>Journey</span>
                    </div>
                </div>

                <div className={classes.architectCtn}>
                    <div className={classes.text}>
                    <div className={classes.yearTitle}>
                    <p>15-17</p>
                    <div className={classes.form}>
                    <p>Form & Function </p>
                    {/* <p>Physical environment</p> */}
                    <p>Architect | Skopje</p>
                    </div>
                    </div>

                    <div className={classes.yearTitle}>
                    <p>17-21</p>
                    <div className={classes.form}>
                    <p>Form & Function</p>
                    {/* <p>Physical environment</p> */}
                    <p>Architect | Berlin</p>
                    </div>
                    </div>
                    </div>
                    <img src={Wandelbots} />
                </div>

                <br/>
                <br/>
                <br/>
                
                <div className={classes.wandelbotsCtn}>
                    <div className={classes.text}>
                    <div className={classes.yearTitle}>
                    <p>22-23</p>
                    <div className={classes.form}>
                    <p>Form & Function & Scale</p>
                    {/* <p>Digital environment</p> */}
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

            
            <div className={classes.skillsCtn}>

                <div className={classes.arrowCtn}>
                   {/* <Arrow /> */}
                   <div className={classes.textBlack}>
                    <span>Skills</span>
                    </div>
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

   

                <div className={classes.arrowCtn}>
                   {/* <Arrow /> */}
                   <div className={classes.textBlack}>
                    <span>Education</span>
                    </div>
                </div>

                <div className={classes.skillsText}>
                    <div className={classes.educationList}>
                        <div className={classes.education}>
                        <span>Web Development | Ironhack Berlin | 23-24</span>
                        </div>

                        <div className={classes.education}>
                        <span>UX & UI Design | CareerFoundry Berlin | 22</span>
                        </div>

                        <div className={classes.education}>
                        <span>MA of Architecture | Skopje N. Macedonia | 13-15</span>
                        </div>

                        <div className={classes.education}>
                        <span>BA of Architecture | Skopje N. Macedonia | 09-13</span>
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