
import React, { useEffect } from "react";
import classes from "../styles/legal.module.css"
import solutionOne from "../assets/step01.png"
import solutionTwo from "../assets/step02.png"
import solutionThree from "../assets/step03.png"
import solutionFour from "../assets/step04.png"
import solutionFive from "../assets/step05.png"
import Connect from "../components/Connect.jsx"
import videoWireframes from "../assets/videoLegal.mp4"
import pointOne from "../assets/pointOne.png"
import pointTwo from "../assets/pointTwo.png"
import { useLocation } from "react-router-dom";



/* const solutions = [
    {id:1, text:"Get Expert Advices in Specific Fields", imgSrc:solutionOne},
    {id:2, text:"Share Your Legal Concerns", imgSrc:solutionTwo},
    {id:3, text:"Share & Upload Relevant Documents", imgSrc:solutionOne},
    {id:4, text:"Expert Advice At Your Fingertips", imgSrc:solutionFour},
];*/

const solutions = [
    {id: 1, title: "Labour and Social Law", text: "01 - Expert Advices in Specific Fields", imgSrc: solutionOne},
    {id: 2, title: "Legal Issues", text: "02 - Share Your Legal Concerns", imgSrc: solutionTwo},
    {id: 3, title: "Documentation", text: "03 - Share Relevant Documents", imgSrc: solutionThree},
    {id: 4, title: "Match", text: "04 - Find Your Perfect Match", imgSrc: solutionFour},
    {id: 5, title: "Connect", text: "05 - Expert Advice At Your Fingertips", imgSrc: solutionFive},
];




const LegalPage = () => {

    const location=useLocation();

    useEffect (() =>{
        window.scrollTo(0,0);
    }, [location])


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
                <div className={classes.title}>
                <span>SOLUTION APPROACH</span>
                <h2 className={classes.gradientText}>Expert advice in Labour and Social Law</h2>
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
      
            </div>
            <div>
            </div>

            <div className={classes.researchCtn}>
                <div className={classes.keyFindings}>
                    <div className={classes.titleResearch}>
                <span>USER RESEARCH</span>
                <h2>Key findings</h2>
                </div>
                    <p>In order to develop an effective solution for connecting users with experts, 
                        comprehensive research was conducted to gain insights into user behaviors and preferences, 
                        as well as to understand the existing market landscape. This involved a combination of qualitative (user interviews) and 
                        quantitative (user surveys) research methods.
                        </p>

                        <div className={classes.survays}>
                            <h3>User Survays</h3>
                           {/* <p>21 people took the survey</p>
                            <p>13 questions were asked</p> */}
                            <div className={classes.findingsCtn}>

                                <div className={classes.dataCtn}>
                            <p className={classes.gradientText}>90%</p>
                            <p>respondents are first looking for help online</p>
                                </div>

                            <div className={classes.dataCtn}>
                            <p className={classes.gradientText}>57% </p>
                            <p>respondents will use an app to find an expert</p>
                            </div>

                            <div className={classes.dataCtn}>
                            <p className={classes.gradientText}>53%</p>
                            <p>respondents used expert help within the last 6 months</p>
                            </div>
                            </div>
                        
                        </div>

                        <h3>User Interviews</h3>
                        <div className={classes.findingsCtn}>
                            <div className={classes.dataCtn}>
                            <p className={classes.gradientText}>Rebecca, 30</p>
                            <p>If finidng an expert was easier I would do it more often</p>
                            </div>

                             <div className={classes.dataCtn}>
                            <p className={classes.gradientText}>Maxim, 24</p>
                            <p>I often need a specific and quick advice</p>
                            </div>

                            <div className={classes.dataCtn}>
                            <p className={classes.gradientText}>Roman, 34</p>
                            <p>I want to find my expert advisor quick</p>
                            </div>

                        </div>

                        <h3>Revealing insight</h3> 
                            <p className={classes.lawyers}>
                                When asked to classify experts across various professions
                                 86% of the respondents identified
                                <span className={classes.gradientText}>Lawyers</span> 
                                as the quintessential experts.
                            </p>
                </div>
            </div>

            <div className={classes.researchCtn}>
                <div className={classes.keyFindings}>
                    <div className={classes.titleResearch}>
                        <span>SOLUTION SHAPING</span>
                <h2>Pivotal Moment</h2>
                </div>
                    <p>The revealing insight prompted me to reach out to a seasoned lawyer specializing 
                        in social and labor law for further insights.
                        </p>

                        <div className={classes.survays}>
                            <h3>Lawyer Interview</h3>

                            <div className={classes.findingsCtn}>

                                <div className={classes.dataCtnLawyer}>
                            <p className={classes.gradientText}>Maximillian, 35</p>
                            <p>Many legal issues within the domain of Labour and Social Law 
                                are recurring and can be resolved swiftly with expert guidance. 
                            </p>
                                </div>
                            </div>
                            <h3 className={classes.gradientText}>A one-size-fits-all platform often fits no one effectively!</h3>
                            <p>
                            Driven by the insights gleaned from both user research and the conversation with the seasoned lawyer, 
                            I made the decision to pivot the focus of the platform. Instead of pursuing a broad approach, 
                            I decided to develop a specialized app tailored to the unique needs of users navigating Labor and Social Law matters.
                            </p>
                        
                        </div>
                </div>
            </div>

            <div className={classes.prototypeCtn}>

            <div className={classes.titlePrototype}>
                <span>PROTOTYPING</span>
                <h2>Mid-High fidelity wireframes</h2>
                </div>

                <div className={classes.videoCtn}>
                    <video autoPlay loop muted playsInline>
                        <source src={videoWireframes}  type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>


                </div>

            </div>

            <div className={classes.testingCtn}>
                <div className={classes.title}>
                <span>WHAT WAS MISSING?</span>
                <h2>User Testing</h2>
                </div>
              

                <div className={classes.testing}>
                    <div className={classes.pointOne}>
                        <div className={classes.pointText}>
                        <span>01 - PAIN POINT</span>
                        <p>Terms of service and handling the data privacy of the users.</p>
                        <span>SOLUTION</span>
                        <p>2 additional screens where the user has to read and accept the 
                            terms of service & data policy of Legal before continuing with the service.</p>
                        </div>
                        <img className={classes.imgCtn} src={pointOne} />
                    </div>

                    <div className={classes.pointTwo}>
                    <div className={classes.pointText}>
                        <span>02 - PAIN POINT</span>
                        <p>Unclear on services provided by matched lawyer.</p>
                        <span>SOLUTION</span>
                        <p>Add a step between booking and payment to clarify services offered by the lawyer. 
                        Include a checkbox for users to opt-in for receiving an invoice.</p>
                        </div>
                        <img className={classes.imgCtn} src={pointTwo} />
                    </div>
            </div>
            </div>

            <div className={classes.uiColorsCtn}>
                <div className={classes.title}>
                <span>BRINGING IT TO LIFE</span>
                <h2>Colors</h2>
                </div>
                
                <div className={classes.colorsCtn}>
                    <div className={classes.colorsItem}>
                    <span>PRIMARY</span>
                    <span>#F4F4F4</span>
                    <div className={classes.primarySquare}></div>
                    </div>

                    <div className={classes.colorsItem}>
                    <span>SECONDARY</span>
                    <span>#602C5D</span>
                    <div className={classes.secondarySquare}></div>
                    </div>

                    <div className={classes.colorsItem}>
                    <span>ACCENT</span>
                    <span>#8F578A</span>
                    <div className={classes.accentSquareOne}></div>
                    </div>

                    <div className={classes.colorsItem}>
                    <span>ACCENT</span>
                    <span>#F3E5F1</span>
                    <div className={classes.accentSquareTwo}></div>
                    </div>

                </div>

            </div>

            <div className={classes.uiTypoCtn}>

            <div className={classes.titleTypo}>
                <h2>Typography</h2>
            </div>
            <div className={classes.colorsCtn}>
                    <div className={classes.typoItem}>
                    <span>HEADLINE</span>
                    <span>Medium 24px</span>
                    <span className={classes.spanTypo}>Playfair Display</span>
                    </div>
          
                    <div className={classes.typoItem}>
                    <span>BODY</span>
                    <span>Regular 16px</span>
                    <span className={classes.spanTypoBody}>Open Sans</span>
                    </div>
            </div>
            </div>

        </div>

        <Connect/>
  
        </>
     );
}
 
export default LegalPage;




/* The project covered user & market research, ideation, 
                     prototyping & wireframing, user testing and UI design */

                     /*  A platform that tries to work for everyone would be a platform that works for nobody!*/