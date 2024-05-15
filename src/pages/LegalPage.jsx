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

                    <div className={classes.problem}>
                        <span className={classes.overviewSpan}>Problem</span>
                        <p>How to enable anyone, anywhere to instantly chat with an expert in virtually any field.</p>
                    </div>

                    <div className={classes.role}>
                        <span className={classes.overviewSpan}>Role</span>
                        <p>User Research <br/> User Design <br/> Information Architecture <br/> UI Design</p>
                    </div>
                </div>

            </div>

            <div className={classes.solutionCtn}>
                <h2 className={classes.headline}>Solution Approach</h2>

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
            
            <div className={classes.processCtn}>
                <h2>Design Process</h2>
                <div className={classes.userResearch}>
                    <div className={classes.userResearchOpening}>
                <span className={classes.overviewSpan}>User & Market Research</span>
                <p className={classes.description}>In order to develop an effective solution for connecting users with experts, 
                    comprehensive research was conducted to gain insights into user behaviors and preferences, 
                    as well as to understand the existing market landscape. 
                    This involved a combination of qualitative and quantitative research methods.</p>
                    </div>

                    <div className={classes.userResearchOpening}>
                    <span className={classes.overviewSpan}>Quantitative Research: Surveys</span>
                <p className={classes.description}>Surveys were employed to gather quantitative data on a larger scale and
                aimed to understand the prevalence of seeking expert help, the methods people use to find experts, and any trends or patterns in user behavior. 
                Key metrics such as the percentage of respondents who had sought expert assistance within a specific time frame and their preferences 
                for finding experts were collected and analyzed.</p>
                </div>

                <div className={classes.keyFindingsSurvey}>
                    <span className={classes.overviewSpan}> Key Findings from Surveys</span>

                    <div className={classes.surveyDataCtn}>
                    <div className={classes.surveyResultCtn}>
                        <div className={classes.upCtn}>
                            <span className={classes.statisticCtn}> 21 </span>
                            <p>respondents took the survey</p>
                        </div>

                        <div className={classes.downCtn}>
                            <span className={classes.statisticCtn}> 13 </span>
                            <p>questions were asked</p>
                        </div>
                    </div>

                    <div className={classes.surveyResultCtn}>
                        <div className={classes.upCtn}>
                            <span className={classes.statisticCtn}> 90% </span>
                            <p>respondents look for help online</p>
                        </div>

                        <div className={classes.downCtn}>
                            <span className={classes.statisticCtn}> 57% </span>
                            <p>will use an app to find an expert</p>
                        </div>
                    </div>

                    <div className={classes.surveyResultCtn}>
                        <div className={classes.upCtn}>
                            <span className={classes.statisticCtn}> 53% </span>
                            <p>used expert help in the last 6 months</p>
                        </div>

                        <div className={classes.downCtn}>
                            <span className={classes.statisticCtn}> 47% </span>
                            <p>didn't use expert help in the last 6 months</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className={classes.userResearchOpening}>
                    <span className={classes.overviewSpan}>Qualitative Research: User Interviews</span>
                <p className={classes.description}>User interviews were conducted to delve into the nuances of how individuals seek help 
                and identify experts in various fields. Key questions were crafted to explore topics such as the criteria 
                users use to define expertise, their past experiences with seeking expert assistance, and any barriers they encounter in the process. 
                Through these interviews, valuable insights were gathered to inform the design process.</p>
                </div>

                <div className={classes.keyFindingsSurvey}>
                    <span className={classes.overviewSpan}> Key Findings from User Interviews</span>

                    <div className={classes.surveyDataCtn}>

                    <div className={classes.surveyResultCtn}>
                        <div className={classes.upCtn}>
                            <span className={classes.statisticCtn}> Rebecca, 30 </span>
                        </div>

                        <div className={classes.downCtn}>
                            <p>I think if finding experts was easier
                            I would do it more often.</p>
                        </div>
                    </div>

                    <div className={classes.surveyResultCtn}>
                        <div className={classes.upCtn}>
                            <span className={classes.statisticCtn}> Maxim, 24 </span>
                        </div>

                        <div className={classes.downCtn}>
                            <p>I need specific advice
                                <br/>
                            I need my question
                            answered ASAP</p>
                        </div>
                    </div>

                    <div className={classes.surveyResultCtn}>
                        <div className={classes.upCtn}>
                            <span className={classes.statisticCtn}> Roman, 34 </span>
                        </div>

                        <div className={classes.downCtn}>
                            <p>I want to find my match
                            very quick</p>
                        </div>
                    </div>

                    </div>
                </div>
            </div>


            <div className={classes.pivotCtn}>
                    <h2 className={classes.headline}>Pivotal Moment</h2>
                    <div className={classes.pivotText}>
                        <div className={classes.leftText}>
                            <span className={classes.pivotSpan}>A platform that tries to work for everyone 
                                would be a platform that works for nobody!</span>
                                <p className={classes.descriptionPivot}>After the extensive user research, I reached out to a seasoned lawyer specializing in social and labor law. 
                                    Through our conversation, it became evident that many legal issues within this domain are recurring and 
                                    can be resolved quickly with expert guidance. Thus, I pivoted the focus towards developing a specialized app 
                                    tailored to the needs of users seeking quick resolutions in labor and social law matters. </p>
                        </div>


                    </div>

            </div>


        </div>
        </>
     );
}
 
export default LegalPage;