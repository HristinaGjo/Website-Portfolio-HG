import React, { useEffect } from "react";
import classes from "../styles/about.module.css"
import Connect from "../components/Connect.jsx";
import profilePic from "../assets/profile3.png"
/* import profilePic from "../assets/profile0201.png" */
import videoOne from "../assets/video1Low.mp4"
import videoTwo from "../assets/video2Low.mp4"
import videoThree from "../assets/video3Low.mp4"

/*import videoThree from "../assets/video3Low.mp4"*/


/*import videoThree from "../assets/lunar.mp4" */

import videoFour from "../assets/video4.mp4"

/* import profilePic from "../assets/profilePhoto.png"*/
import { useLocation } from "react-router-dom";





const handleEmailClick = () => {
    window.location.href = "mailto:hgjorgieva@gmail.com";
   }


const AboutPage = () => {
    const location=useLocation();

    useEffect (() =>{
        window.scrollTo(0,0);
    }, [location])
    return ( 
        <div className={classes.aboutPageCtn}>

            <div className={classes.titleCtn}>
                <span>A LITTLE BIT</span>
                <h2>About Me</h2>
            </div>

            <div className={classes.aboutMeCtn}>
                <div className={classes.text}>  
                <p>Hey there! I’m Hristina Gjorgieva. Berlin based Digital Designer crafting intuitive and  
                    interactive experiences. My journey began in architecture, where I learned and practiced
                    design that focus on human behavior and user-centric environments.
                    However, I eventually found myself drawn to the digital realm due to its speed, scalability, 
                    and the exciting potential for constant product improvement.
                    Switching from architecture to digital design, I merged my expertise in UX & UI Design, 
                    Web Design, and Frontend Development, bringing a fresh perspective to my work.
                    </p>

                <p>
                    For me design is a synergy between creativity and functionality. 
                    It’s about making things both beautiful and useful, transforming complexity into something comprehensible and inclusive.
                    </p>

                <p> Reach out to connect and create something cool!
                    <br/>
                    I'm always open to new projects and connections.
                </p>
                <button
                className={classes.button}
                onClick={handleEmailClick}>
                    <span>hgjorgieva@gmail.com</span>
                </button>
                </div>
                <img className={classes.imgCtn} src={profilePic} />
            </div>

            <div className={classes.journeyCtn}>
               <div className={classes.titleExperience}>
                <span>MY</span>
                <h2>Experience</h2>
                <hr/>
                </div>


                <div className={classes.experienceCtn}>

                <div className={classes.experienceRow}>
                        <div className={classes.experience}>
                            <span>Company</span>
                            <p>Freelance</p>
                        </div>

                        <div className={classes.experience}>
                            <span>Position</span>
                            <p>Digital Designer</p>
                        </div>

                        <div className={classes.experience}>
                            <span>Period</span>
                            <p>2024 - NOW</p>
                        </div>
                    </div>

                    <div className={classes.experienceRow}>
                        <div className={classes.experience}>
                            <span>Company</span>
                            <p>Wandelbots Robotics</p>
                        </div>

                        <div className={classes.experience}>
                            <span>Position</span>
                            <p>UX & UI Designer</p>
                        </div>

                        <div className={classes.experience}>
                            <span>Period</span>
                            <p>2022 - 2023</p>
                        </div>
                    </div>


                    <div className={classes.experienceRow}>
                        <div className={classes.experience}>
                            <span>Company</span>
                            <p>TVA Berlin</p>
                        </div>

                        <div className={classes.experience}>
                            <span>Position</span>
                            <p>Architect</p>
                        </div>

                        <div className={classes.experience}>
                            <span>Period</span>
                            <p>2019 - 2021</p>
                        </div>
                    </div>

                    <div className={classes.experienceRow}>
                        <div className={classes.experience}>
                            <span>Company</span>
                            <p>GPlant Berlin</p>
                        </div>

                        <div className={classes.experience}>
                            <span>Position</span>
                            <p>Architect</p>
                        </div>

                        <div className={classes.experience}>
                            <span>Period</span>
                            <p>2017 - 2019</p>
                        </div>
                    </div>

                </div>


             
               <div className={classes.titleExperience}>
                <span>MY</span>
                <h2>Education</h2>
                <hr/>
                </div>
            
               
                <div className={classes.experienceCtn}>

                <div className={classes.experienceRow}>
                        <div className={classes.experience}>
                            <span>School</span>
                            <p>Ironhack Berlin</p>
                        </div>

                        <div className={classes.experience}>
                            <span>Degree</span>
                            <p>Web Development</p>
                        </div>

                        <div className={classes.experience}>
                            <span>Period</span>
                            <p>2023 - 2024</p>
                        </div>
                    </div>

                    <div className={classes.experienceRow}>
                        <div className={classes.experience}>
                            <span>School</span>
                            <p>CareerFoundry Berlin</p>
                        </div>

                        <div className={classes.experience}>
                            <span>Degree</span>
                            <p>UX & UI Design</p>
                        </div>

                        <div className={classes.experience}>
                            <span>Period</span>
                            <p>2022 - 2022</p>
                        </div>
                    </div>

                    <div className={classes.experienceRow}>
                        <div className={classes.experience}>
                            <span>School</span>
                            <p>Uni. of Arcitecture, Skopje</p>
                        </div>

                        <div className={classes.experience}>
                            <span>Degree</span>
                            <p>MA of Architecture</p>
                        </div>

                        <div className={classes.experience}>
                            <span>Period</span>
                            <p>2013 - 2015</p>
                        </div>
                    </div>

                    <div className={classes.experienceRow}>
                        <div className={classes.experience}>
                            <span>School</span>
                            <p>Uni. of Arcitecture, Skopje</p>
                        </div>

                        <div className={classes.experience}>
                            <span>Degree</span>
                            <p>BA of Architecture</p>
                        </div>

                        <div className={classes.experience}>
                            <span>Period</span>
                            <p>2009 - 2013</p>
                        </div>
                </div>

            </div>
            </div>

            <div className={classes.personalCtn}>
                <div className={classes.title}>
                <span>WHAT I DO</span>
                <h2>OFF SCREEN</h2>
                </div>

                <div className={classes.personalText}>
                    <p>I love soaking up life’s simple pleasures. 
                        <br />
                        You’ll often find me on long bike rides, exploring nature, and chasing sunsets. 
                        <br/>
                        I thrive in the warmth of spring and summer, enjoying every moment outdoors. </p>
                </div>


            </div>

            <div className={classes.videoSection}>
                    
                       <video className={classes.video} autoPlay loop muted playsInline>
                        <source src={videoOne} type="video/mp4"/>
                        Your browser does not support the video tag.
                       </video>
                

                   
                       <video className={classes.video} autoPlay loop muted playsInline>
                        <source src={videoTwo} type="video/mp4"/>
                        Your browser does not support the video tag.
                       </video>
                

   
                       <video className={classes.video} autoPlay loop muted playsInline>
                        <source src={videoThree} type="video/mp4"/>
                        Your browser does not support the video tag.
                       </video>
                   

                </div>
            <Connect />

     
        </div>
     );
}
 
export default AboutPage;



/* <p>When I'm not designing, you might find me enjoying life, nature and longer bike rides.</p> */
