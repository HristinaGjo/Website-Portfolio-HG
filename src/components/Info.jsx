import React, { useState } from "react";
import classes from "../styles/info.module.css";
import { Link } from "react-router-dom";
import Arrow from "./Arrow";
import MinusButton from "./MinusButton";
import PlusButton from "./PlusButton";

const Info = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const aboutPageClick = () => {
    navigate("/about");
  };

  return (
    <>
      <div className={classes.pageCtn}>
        <div className={classes.titleInfo}>
          <h2>Info</h2>
          <hr />
        </div>

        <div className={classes.aboutCtn}>
          <div className={classes.arrowTitle}>
            <Arrow />
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
              <button
                className={classes.buttonAbout}
                onClick={aboutPageClick}
              >
                See more
              </button>
            </div>
          </div>
        </div>

        <div className={classes.servicesCtn}>
          <div className={classes.arrowTitle}>
            <Arrow />
            <span>Services</span>
          </div>

          <div className={classes.uxDesign}>
            <div className={classes.title}>
              <span> 01. UX & UI Design</span>
              <button
                className={classes.toggleButton}
                onClick={toggleDetails}
              >
                {showDetails ? <MinusButton /> : <PlusButton />}
              </button>
            </div>

            {showDetails && (
              <div className={classes.showText}>
                <p className={classes.openingLine}>
                  Crafting user-centric, intuitive and engaging digital
                  experiences.
                </p>
                <div className={classes.process}>
                  <span>Process</span>
                  <p>User Research & Discovery</p>
                  <p>UX Strategy</p>
                  <p>Wireframing & Prototyping</p>
                  <p>User Testing & Design Iteration</p>
                  <p>UI Design</p>
                </div>
              </div>
            )}
         
          <div className={classes.webDesign}>

          <div className={classes.title}>
              <span> 02. Web Design</span>
              <button
                className={classes.toggleButton}
                onClick={toggleDetails}
              >
                {showDetails ? <MinusButton /> : <PlusButton />}
              </button>
            </div>

            {showDetails && (
              <div className={classes.showText}>
                <p className={classes.openingLine}>
                A comprehensive design that lays the foundation for web implementation.
                </p>
                <div className={classes.process}>
                  <span>Process</span>
                  <p>Planing & Strategy</p>
                  <p>Wireframing</p>
                  <p>Website Design Mockups</p>
                  <p>Responsive & mobile</p>
                </div>
              </div>
            )}

          </div>

          <div className={classes.frontEnd}>
          <div className={classes.titleLast}>
              <span> 03. Frontend Development</span>
              <button
                className={classes.toggleButton}
                onClick={toggleDetails}
              >
                {showDetails ? <MinusButton /> : <PlusButton />}
              </button>
            </div>

            {showDetails && (
              <div className={classes.showText}>
                <p className={classes.openingLine}>
                Bringing visuals to life through developing highly functional web solutions.
                </p>
                <div className={classes.process}>
                  <span>Process</span>
                  <p>Frontend Development</p>
                  <p>Responsive Design</p>
                  <p>Testing</p>
                  <p>Deplyoment</p>
                </div>
              </div>
            )}
          </div>
            
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Info;




     {/* <p>{'→'}</p> */}
