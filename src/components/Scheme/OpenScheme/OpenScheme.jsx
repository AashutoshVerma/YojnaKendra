import React from "react";
import "./openScheme.css";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const OpenScheme = ({ scheme, finalData }) => {
  window.scroll({ top: 0, behavior: "smooth" });
  console.log(scheme);
  return (
    <div className="containerScheme">
      <div className="leftSide">
        <div className="imgContainerScheme">
          <img src={scheme.ImagePath} alt="None" className="ipri" />
        </div>
        <div className="videoContainerScheme">
          <ReactPlayer
            url="https://youtu.be/IiErdT0O3wI"
            controls
            playbackRate={2}
            width="620px"
            height="400px"
            className="videoPlayer"
          />
        </div>
      </div>
      <div className="rightSide">
        <div className="schemeHeadingOpen">
          <h1>{scheme.SchemeTitle}</h1>
          {/* <h1>Aashu ka jadu</h1> */}
        </div>
        <div className="schemeInfoOpen">
          <h1 className="bene">{finalData.Benefits}</h1>
          <p>{scheme.SchemeInfo}</p>
        </div>
        <div className="eligibility">
          <h1>{finalData.ElibilityHeading}</h1>
          <p className="text">{scheme.EligiblityText}</p>
          <ul>
            <li>
              {finalData.MaxAge} : {scheme.MaxAge}
            </li>
            <li>
              {finalData.MaxIncome} : {scheme.MaxIncome}
            </li>
            <li>
              {finalData.Caste} : {scheme.Caste}
            </li>
            <li>
              {finalData.Gender} : {scheme.TextGender}
            </li>
            <li>
              Required Documents : PAN, Ration Card
            </li>
            <li>
              Start Date : 01 April 2023
            </li>
            <li>
              End Date : 31 March 2024
            </li>
            <div className="buttonContainer">
              <Link to="/">
                <button id="goBack">Go Back</button>
              </Link>
              <a href={scheme.SchemeLink} target="__blank" id="apply">
                {finalData.ApplyHere}
              </a>
              <a href="pdf/yognas_doc.pdf" id="download" download>
                {finalData.Download}
              </a>
              <Link to="/getupdate">
              
                  <div id="updates">Get Updates</div>
               
              </Link>
              <Link to="/getDocs">
        
                  <div id="docs">Required Documents</div>
            
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OpenScheme;
