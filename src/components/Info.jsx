import React, { useState } from "react";
import classes from "../styles/info.module.css";
import { Link } from "react-router-dom";
import Arrow from "./Arrow";
import MinusButton from "./MinusButton";
import PlusButton from "./PlusButton";
import ArrowMobile from "./ArrowMobile";

const Info = () => {
  const [showDetails, setShowDetails] = useState({
    uxDesign: false,
    webDesign: false,
    frontEnd: false
  });

  const toggleDetails = (service) => {
    setShowDetails({
      ...showDetails,
      [service]: !showDetails[service]
    });
  };

  const aboutPageClick = () => {
    navigate("/about");
  };

  return (
    <>
      <div className={classes.pageCtn}>
        <div className={classes.titleInfo}>
          <h2>Info</h2>
          <hr className={classes.customHr} />
        </div>

        <div className={classes.aboutCtn}>
          <div className={classes.arrowTitle}>
            <Arrow />
            <span>About</span>
          </div>
          <div className={classes.arrowTitleMobile}>
            <ArrowMobile />
            <span>About</span>
          </div>
          <div className={classes.aboutText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tempor, orci id commodo rhoncus, odio neque
              pellentesque augue, eget convallis ante sem id est. Cras facilisis
              porttitor enim ac maximus. Curabitur feugiat est metus, eget
              posuere est euismod elementum. Mauris auctor nulla mauris, ac
              malesuada est pretium sed. Mauris venenatis nibh vehicula
              tincidunt imperdiet. Morbi id suscipit leo. Donec vestibulum
              viverra turpis, nec blandit nibh mattis sed.
            </p>
            <div>
                <Link to="/about">
              <button
                className={classes.buttonAbout}
                onClick={aboutPageClick}
              >
                See more
              </button>
              </Link>
            </div>
          </div>
         
        </div>
        <hr className={classes.customHr} />

        <div className={classes.servicesCtn}>
          <div className={classes.arrowTitle}>
            <Arrow />
            <span>Services</span>
          </div>
          <div className={classes.arrowTitleMobile}>
            <ArrowMobile />
            <span>Services</span>
          </div>

          <div className={classes.servicesContainer}>
            <div className={classes.service}>
              <div className={classes.title}>
                <span> 01. UX & UI Design</span>
                <button
                  className={classes.toggleButton}
                  onClick={() => toggleDetails("uxDesign")}
                >
                  {showDetails.uxDesign ? <MinusButton /> : <PlusButton />}
                </button>
              </div>
              <div
                className={`${classes.serviceContent} ${
                  showDetails.uxDesign ? classes.open : ""
                }`}
              >
                <p className={classes.openingLine}>
                  Crafting user-centric, intuitive and engaging digital
                  experiences.
                </p>
                <div className={classes.process}>
                  <span>Process</span>
                  </div>
                  <p>User Research & Discovery</p>
                  <p>UX Strategy</p>
                  <p>Wireframing & Prototyping</p>
                  <p>User Testing & Design Iteration</p>
                  <p>UI Design</p>
              
              </div>
            </div>

            <div className={classes.service}>
              <div className={classes.title}>
                <span> 02. Web Design</span>
                <button
                  className={classes.toggleButton}
                  onClick={() => toggleDetails("webDesign")}
                >
                  {showDetails.webDesign ? <MinusButton /> : <PlusButton />}
                </button>
              </div>
              <div
                className={`${classes.serviceContent} ${
                  showDetails.webDesign ? classes.open : ""
                }`}
              >
                <p className={classes.openingLine}>
                  A comprehensive design that lays the foundation for web
                  implementation.
                </p>
                <div className={classes.process}>
                  <span>Process</span>
                  </div>
                  <p>Planing & Strategy</p>
                  <p>Wireframing</p>
                  <p>Website Design Mockups</p>
                  <p>Responsive & mobile</p>
           
              </div>
            </div>

            <div className={classes.service}>
              <div className={classes.title}>
                
                <span> 03. Frontend Development</span>
                <button
                  className={classes.toggleButton}
                  onClick={() => toggleDetails("frontEnd")}
                >
                  {showDetails.frontEnd ? <MinusButton /> : <PlusButton />}
                </button>
              </div>
              <div
                className={`${classes.serviceContent} ${
                  showDetails.frontEnd ? classes.open : ""
                }`}
              >
                <p className={classes.openingLine}>
                  Bringing visuals to life through developing highly functional
                  web solutions.
                </p>
                <div className={classes.process}>
                  <span>Process</span>
                  </div>
               
                  <p>Frontend Development</p>
                  <p>Responsive Design</p>
                  <p>Testing</p>
                  <p>Deplyoment</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
