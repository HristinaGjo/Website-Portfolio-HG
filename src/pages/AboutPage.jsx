import React, { useEffect } from "react";
import classes from "../styles/about.module.css"
import Connect from "../components/Connect.jsx";
import profilePic from "../assets/me.png"
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
                <p>Hey there! I’m Hristina, a Digital Designer crafting intuitive, user-friendly and  
                    interactive experiences. My journey began in architecture, where I learned and practiced
                    design that focus on human behavior and user-centric environments.
                    Now, I bring that expertise to the digital world, combining UX/UI Design, Web Design and Frontend Development.
                    </p>

                <p>
                    For me design is a synergy between creativity and functionality. 
                    It’s about making things both beautiful and useful, making complexity comprehensible and inclusive.
                    </p>

                <p>
                When I'm not designing, you might find me enjoying life, nature and longer bike rides.
                    </p>

                <p> Let's connect and create something awesome together!</p>
                <button
                className={classes.button}
                onClick={handleEmailClick}>
                    hgjorgieva@gmail.com
                </button>
                </div>
                <img className={classes.imgCtn} src={profilePic} />
            </div>

            <div className={classes.journeyCtn}>
               
                <span>MY</span>
                <h2>Journey</h2>

                <div className={classes.workCtn}>

                <div className={classes.experienceCtn}>
                    <h3 className={classes.gradientText}>Work</h3>

                <div className={classes.workTitle}>
                <span>15- 16</span>
                <p>Architect | Skopje</p>
                </div>

                <div className={classes.workTitle}>
                <span>17- 21</span>
                <p>Architect | Berlin</p>
                </div>

                <div className={classes.workTitle}>
                <span>22-23</span>
                <p>UX & UI Designer | Wandelbots Robotics</p>
                </div>

                </div>

                <div className={classes.educationCtn}>
                <h3 className={classes.gradientText}>Education</h3>
                    <div className={classes.workTitle}>
                    <span>23-24</span>
                <p>Web Development | Ironhack Berlin</p>
                    </div>

                    <div className={classes.workTitle}>
                    <span>22-22</span>
                <p>UX & UI Design | CareerFoundry Berlin </p>
                    </div>

                    <div className={classes.workTitle}>
                    <span>13- 15</span>
                <p>MA of Architecture | Skopje </p>
                    </div>

                    <div className={classes.workTitle}>
                    <span>09-13</span>
                <p>BA of Architecture | Skopje </p>
                    </div>


                </div>
                </div>



            </div>

            <Connect />

        </div>
     );
}
 
export default AboutPage;


