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
        <div className={classes.pageCtn}>

            <div className={classes.overviewCtn}>

                <div className={classes.titleCtn}>
                <h2>Legal app</h2>
                <span>Digital bridge between a citizen and a lawyer</span>
                </div>

                <div className={classes.overviewText}>
                    <div className={classes.overview}>
                        <span className={classes.overviewSpan}>Overview</span>
                        <p>Legal is a project which I worked on during my intensive UX & UI Design bootcamp at CareerFoundry in 2022. 
                        The project covered user & market research, ideation, prototyping & wireframing, user testing and UI design.
                        </p>
                    </div>

                    <div className={classes.role}>
                        <span className={classes.overviewSpan}>Role</span>
                        <p>User Research <br/> User Design <br/> Information Architecture <br/> UI Design</p>
                    </div>

                    <div className={classes.problem}>
                        <span className={classes.overviewSpan}>Problem</span>
                        <p>How to enable anyone, anywhere to instantly chat with an expert in virtually any field.</p>
                    </div>
                </div>

            </div>

            <div className={classes.solutionCtn}>
                <h2 className={classes.headline}>Solution</h2>

                <div className={classes.carousel}>
                    {solutions.map(solution =>(
                          <div className={classes.item} key={solution.id}>
                          <div className={classes.item1}>
                              <span className={classes.itemSpan}>{solution.text}</span>
                              <img className={classes.imageCtn} src={solution.imgSrc} alt={`Solution ${solution.id}`} />
                          </div>
                      </div>
                    ))}
                </div>

            </div>

        </div>
        </>
     );
}
 
export default LegalPage;