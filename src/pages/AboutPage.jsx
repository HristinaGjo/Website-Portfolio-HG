import React, { useEffect } from "react";
import classes from "../styles/about.module.css"
import Connect from "../components/Connect.jsx";
import profilePic from "../assets/me.png"
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
                <p>Hey there! I’m Hristina, Berlin based Digital Designer crafting intuitive and  
                    interactive experiences. My journey began in architecture, where I learned and practiced
                    design that focus on human behavior and user-centric environments.
                    Now, I bring that expertise to the digital world, combining UX & UI Design, Web Design and Frontend Development.
                    </p>

                <p>
                    For me design is a synergy between creativity and functionality. 
                    It’s about making things both beautiful and useful, transforming complexity into something comprehensible and inclusive.
                    </p>

                <p> Let's connect and create something awesome together!
                    <br/>
                Reach out to start your next project with a touch of creativity and expertise.
                </p>
                <button
                className={classes.button}
                onClick={handleEmailClick}>
                    hgjorgieva@gmail.com
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
                            <span>Company name</span>
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
                            <span>Company name</span>
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
                            <span>Company name</span>
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
                            <span>Company name</span>
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
            <Connect />

     
        </div>
     );
}
 
export default AboutPage;

