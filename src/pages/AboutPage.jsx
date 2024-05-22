import React from "react";
import classes from "../styles/about.module.css"
import Connect from "../components/Connect.jsx";
import profilePic from "../assets/me.png"


const handleEmailClick = () => {
    window.location.href = "mailto:hgjorgieva@gmail.com";
   }


const AboutPage = () => {
    return ( 
        <div className={classes.aboutPageCtn}>

            <div className={classes.titleCtn}>
                <span>A LITTLE BIT</span>
                <h2>About Me</h2>
            </div>

            <div className={classes.aboutMeCtn}>
                <div className={classes.text}>  
                <p>Hey there! I’m Hristina, an experienced Digital Designer crafting beautiful, 
                    interactive experiences. My journey began in the world of architecture, 
                    where I learned to balance form and function in the physical environment. 
                    Now, I bring that same balance to the digital world, combining UX/UI design, web design, and frontend development.
                    </p>

                <p>
                    I see design as a synergy between creativity and functionality. 
                    It’s about making things both beautiful and useful. From crafting websites to designing intuitive app interfaces, 
                    I'm all about finding that sweet spot where innovation meets user needs.
                    </p>
                
                <p>
                My transition to digital design took an exciting turn when I joined Wandelbots, 
                an innovative robotics startup. There, I delved deep into human-machine interaction 
                and worked on some truly groundbreaking projects.
                Determined to bridge the gap between design and implementation, 
                I expanded my skills into frontend development. This holistic approach allows me to create seamless, 
                end-to-end digital experiences.
                </p>

                <p>
                When I'm not designing, you might find me exploring new tech, sketching out ideas, 
                or enjoying nature and longer bike rides.</p>

                <p> Let's connect and create something awesome together!</p>
                <button
                className={classes.button}
                onClick={handleEmailClick}>
                    hgjorgieva@gmail.com
                </button>
                </div>
                <img className={classes.imgCtn} src={profilePic} />
            </div>

            <div className={classes.workCtn}>
                <div className={classes.middleCtn}>
                <span>ON WHAT I WORKED</span>
                <h2>Journey</h2>
                <div className={classes.workTitle}>
                <span>15-17</span>
                <p>Architect | Skopje</p>
                </div>

                </div>

            </div>

            <Connect />

        </div>
     );
}
 
export default AboutPage;


