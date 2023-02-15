import React from "react";
import "./about.css";
import Typewriter from "typewriter-effect";

const About = ({ finalData }) => {
  return (
    <div className="about" id="blur2">
      <div className="container">
        <div className="leftContainer">
          <div className="aboutBox">
            <h1>
              {finalData.AboutHeading}&nbsp;
              <strong>
                <Typewriter
                  className="tw"
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    strings: [
                      "Yojana Kendra",
                      "Yojana Portal",
                      "All in One Yojana",
                    ],
                  }}
                />
              </strong>
            </h1>
            <h2>{finalData.AboutSubHeading}</h2>
            <p>{finalData.AboutText}</p>
            <div className="buttonContainer">
              <button
                id="explore"
                onClick={function () {
                  window.scroll({ top: 700, behavior: "smooth" });
                }}
              >
                {finalData.ExploreButton}
              </button>
              <button
                id="contactUsButton2"
                onClick={function () {
                  document
                    .getElementById("contactUsButton2")
                    .addEventListener("click", function () {
                      document.querySelector(".contactUs").style.display =
                        "block";
                    });
                }}
              >
                {finalData.QueryButton}
              </button>
            </div>
          </div>
        </div>
        <div className="rightContainer">
          <div className="box1">
            <div className="box1Heading">
              <h1>{finalData.RUheading}</h1>
            </div>
          </div>

          <div className="box2">
            <div className="updateContainer">
              <div className="updates">
                <ol className="updateList">
                  <li>{[finalData.RUList[0]]}</li>
                  <li>{[finalData.RUList[1]]}</li>
                  <li>{[finalData.RUList[2]]}</li>
                  <li>{[finalData.RUList[3]]}</li>
                  {/* <li>{[finalData.RUList[4]]}</li> */}
                  <li>{[finalData.RUList[3]]}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
