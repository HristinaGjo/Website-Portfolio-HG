
import React from "react";
import classes from "../styles/legal.module.css"
import solutionOne from "../assets/step01.png"
import solutionTwo from "../assets/step02.png"
import solutionThree from "../assets/step03.png"
import solutionFour from "../assets/step04.png"
import solutionFive from "../assets/step05.png"



/* const solutions = [
    {id:1, text:"Get Expert Advices in Specific Fields", imgSrc:solutionOne},
    {id:2, text:"Share Your Legal Concerns", imgSrc:solutionTwo},
    {id:3, text:"Share & Upload Relevant Documents", imgSrc:solutionOne},
    {id:4, text:"Expert Advice At Your Fingertips", imgSrc:solutionFour},
];*/

const solutions = [
    {id: 1, title: "Labour and Social Law", text: "01 - Get Expert Advices in Specific Fields", imgSrc: solutionOne},
    {id: 2, title: "Legal Issues", text: "02 - Share Your Legal Concerns", imgSrc: solutionTwo},
    {id: 3, title: "Documentation", text: "03 - Share & Upload Relevant Documents", imgSrc: solutionThree},
    {id: 4, title: "Match", text: "04 - Find Your Perfect Match", imgSrc: solutionFour},
    {id: 5, title: "Expert Advice", text: "05 - Expert Advice At Your Fingertips", imgSrc: solutionFive},
];



const LegalPage = () => {
    return ( 
        <>
        <div className={classes.legalPageCtn}>
            
            <div className={classes.legalHeroCtn}>
                <span>UX & UI CASE STUDY</span>
                <h1>Legal app</h1>
                <span>DIGITAL BRIDGE BETWEEN A LAWYER AND A CITIZEN</span>
            </div>

            <div className={classes.overviewText}>
                <div className={classes.textCtn}>
                <span>ABOUT</span>
                <p>Legal is a project which I worked on during my intensive UX & UI Design bootcamp
                at CareerFoundry in 2022.</p>
                </div>

                <div className={classes.textCtn}>
                <span>PROBLEM</span>
                <p>How to enable anyone, anywhere to instantly chat with an expert in virtually any field.</p>
                </div>

                <div className={classes.textCtn}>
                <span>ROLE</span>
                <p>User Research <br/> Information Architecture <br/> UX & UI Design</p>
                </div>
            </div>

            <div className={classes.solutionCtn}>
                <div className={classes.solutionTitle}>
                <span>SOLUTION APPROACH</span>
                <h2 className={classes.gradientText}>Expert advice is  labour and social law</h2>
                </div>
                <div className={classes.carousel}>
                    {solutions.map (solution=> (
                <div className={classes.item} key={solution.id}>
                    <div className={classes.itemCtn} style={{backgroundColor:solution.color}}>
                    <span className={classes.itemSpam}>{solution.text}</span>
                        <h3 className={classes.itemH2}>{solution.title}</h3>
                        <img className={classes.imageCtn} src={solution.imgSrc}/>
                    </div>
                    </div>
                    ))}
                </div>
                <div className={classes.solutionTitle}></div>
            </div>

            <div>
                
            </div>

        </div>
  
        </>
     );
}
 
export default LegalPage;




/* The project covered user & market research, ideation, 
                     prototyping & wireframing, user testing and UI design */