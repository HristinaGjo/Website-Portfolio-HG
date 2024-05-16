
import React from "react";
import classes from "../styles/legal.module.css"
import solutionOne from "../assets/solution1.png"
import solutionTwo from "../assets/solution2.png"
import solutionFour from "../assets/solution4.png"



const solutions = [
    {id:1, text:"Get Expert Advices in Specific Fields", imgSrc:solutionOne},
    {id:2, text:"Share Your Legal Concerns", imgSrc:solutionTwo},
    {id:3, text:"Easily Share & Upload Relevant Documents", imgSrc:solutionOne},
    {id:4, text:"Expert Advice At Your Fingertips", imgSrc:solutionFour},
];



const LegalPage = () => {
    return ( 
        <>
        <div className={classes.legalPageCtn}>
            
            <div className={classes.legalHeroCtn}>
                <span>DIGITAL BRIDGE BETWEEN A LAWYER AND A CITIZEN</span>
                <h1>Legal app</h1>
            </div>

            <div className={classes.overviewText}>
                <div className={classes.textCtn}>
                <span>ABOUT</span>
                <p>Legal is a project which I worked on during my intensive UX & UI Design bootcamp
                     at CareerFoundry in 2022. The project covered user & market research, ideation, 
                     prototyping & wireframing, user testing and UI design.</p>
                </div>

                <div className={classes.textCtn}>
                <span>PROBLEM</span>
                <p>How to enable anyone, anywhere to instantly chat with an expert in virtually any field.</p>
                </div>

                <div className={classes.textCtn}>
                <span>ROLE</span>
                <p>User Research <br/> Information Architecture <br/> UX Design<br/> UI Design</p>
                </div>

            </div>

        </div>
  
        </>
     );
}
 
export default LegalPage;