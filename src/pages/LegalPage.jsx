import React from "react";
import classes from "../styles/legal.module.css"
import Research from "../assets/research.png"
/* import KeyInsights from "../assets/interviewInsights.png" */
import Wireframes from "../assets/wireframesNew.png"
import WireframesMobile from "../assets/wireframesMobile.png"


const LegalPage = () => {
    return ( 
        <>
        <div className={classes.pageCtn}>

            <div className={classes.titleLegal}>
                <h2>Legal</h2>
                <span>Digital Bridge between a lawyer and a citizen | UX & UI Case Study </span>
            </div>
            
        <div className={classes.theProject}>
            <div className={classes.column}>
            <span>About</span>
            <p>Legal is a project which I worked on during my intensive UX Design bootcamp at CareerFoundry. 
            The project covered user research, prototyping, testing, and design.</p>
        </div>

        <div className={classes.column}>
            <span>Problem</span>
            <p>How to enable anyone, anywhere to instantly chat with an expert in virtually any field.</p>
        </div>

        <div className={classes.column}>
            <span>Solution</span>
            <p>Enable instant expert consultations in specific fields, 
                such as labor and social law, resolving issues within 15 to 30 minutes. </p>
        </div>
        </div>

          <div className={classes.research}>
            <h2>User Research</h2>
         
            <span>Key insights from the User Surveys</span>

            <div className={classes.imageCtn}>
                <img src={Research} />
            </div>

            <span>Key insights from the User Interviews</span>

            <div className={classes.interview}>

            <div className={classes.columnInterview}>
                <div className={classes.textInterview}>
                    <span className={classes.number}>01</span>
                    <br/>
                    <span className={classes.title}>Rebecca, 30</span>
                    <p>‘’I think if finding experts was easier
                    I would do it more.’’</p>
                </div>
            </div>

            <div className={classes.columnInterview}>
                <div className={classes.textInterview02}>
                <span className={classes.number}>02</span>
                    <br/>
                <span className={classes.title}>Maxim, 24</span>
                    <p>‘’I think if finding experts was easier
                    I would do it more.’’</p>
                </div>
            </div>

            <div className={classes.columnInterview}>
                <div className={classes.textInterview}>
                <span className={classes.number}>03</span>
                    <br/>
                    <span className={classes.title}>Roman, 35</span>
                    <p>‘’I think if finding experts was easier
                    I would do it more.’’</p>
                </div>
            </div>

            </div>

           { /* <div className={classes.imageCtn}>
                <img src={KeyInsights} />
            </div> */}

            <div className={classes.pivotal}>
            <h2>Pivotal moment</h2>
            <span>A platform that tries to work for everyone 
            would be a platform that works for nobody! </span>
          
            <p>After the extensive user research, I reached out to a seasoned lawyer specializing in social and labor law. 
            Through our conversation, it became evident that many legal issues within this domain are recurring 
            and can be resolved quickly with expert guidance. 
            Thus, I pivoted the focus towards developing a specialized app tailored 
            to the needs of users seeking quick resolutions in labor and social law matters. </p>
            </div>

          </div>

          <div className={classes.wireframes}>
            <h2>Wireframes</h2>
            <br/>
            <span>Mid-fidelity Wireframes</span>
          <div className={classes.imageCtnDesctop}>
                <img src={Wireframes} />
            </div> 

            <div className={classes.imageCtnMobile}>
                <img src={WireframesMobile} />
            </div> 
          </div>

          <div>
            <h2>Hello</h2>
          </div>


        </div>
        </>
     );
}
 
export default LegalPage;