import React, { useState,  } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Navbar = ({
  changeSearch,
  changeLang,
  searchText,
  langaugeText,
  schemeText,
  feedbackText,
  schemeList,
}) => {
  const {
    transcript,
    
  } = useSpeechRecognition();

  const [changeScript, setChangeScript] = useState(transcript);
  let onchangeSearch = (e) => {
    // console.log(transcript);
    setChangeScript( e.target.value);
    changeSearch(e.target.value);
    window.scroll({ top: 750, behavior: "smooth" });
  };
  
  

  return (
    <div className="navbar" id="blur">
      <div className="navbarContainer">
        <div className="logoContainer">
          {/* <a href="/index.html" className="logo">
            Logo
          </a> */}
          <Link to="/">
            <img src="images/logo2.png" alt="logo" className="logo" />
          </Link>
        </div>
        <div className="utilityContainer">
          <div className="search">
            <input
              type="text"
              name="search"
              id="search"
              value={changeScript}
              placeholder={transcript===""?searchText:transcript}
              onChange={onchangeSearch}
              // x-webkit-speech={"true"}
            />
            <i className="fa fa-search" id="searchBar"></i>
            {/* <input type="text" name="" id=""  onBlur={SpeechRecognition.resetTranscript} onCompositionEnd={changevoicetext}/> */}
            <button
              // onDoubleClick={changevoicetext}
              onClick={()=>{
                if(transcript!==""){
                  setChangeScript( transcript);
    changeSearch(transcript);
                }
                SpeechRecognition.startListening();
                window.scroll({ top: 850, behavior: "smooth" });
              }
              
              }
              id="voice"
            >
              <i className="fa fa-microphone"></i>
            </button>
          </div>
        </div>
        <div className="listContainer">
          <ul className="ulContainer">
            <li className="listItem" id="scheme">
              <i className="fa fa-caret-down ddm" aria-hidden="true"></i>
              <Link to="/" className="listItemTag">
                {schemeText}
              </Link>
              <div className="schemeCat">
                <ul>
                  <li
                    onClick={function () {
                      window.scroll({ top: 750, behavior: "smooth" });
                    }}
                  >
                    {schemeList[0]}
                  </li>
                  <li
                    onClick={function () {
                      window.scroll({ top: 1130, behavior: "smooth" });
                    }}
                  >
                    {schemeList[1]}
                  </li>
                  <li
                    onClick={function () {
                      window.scroll({ top: 1470, behavior: "smooth" });
                    }}
                  >
                    {schemeList[2]}
                  </li>
                  <li
                    onClick={function () {
                      window.scroll({ top: 1800, behavior: "smooth" });
                    }}
                  >
                    {schemeList[3]}
                  </li>
                  <li
                    onClick={function () {
                      window.scroll({ top: 2700, behavior: "smooth" });
                    }}
                  >
                    {schemeList[4]}
                  </li>
                </ul>
              </div>
            </li>
            <li
              id="faq"
              onClick={function () {
                window.scroll({ top: 2500, behavior: "smooth" });
              }}
            >
              FAQ
            </li>
            <li className="listItem">
              <button
                className="cont"
                onClick={function () {
                  document
                    .getElementById("contactUsButton")
                    .addEventListener("click", function () {
                      document.querySelector(".contactUs").style.display =
                        "block";
                    });
                }}
                id="contactUsButton"
              >
                {feedbackText}
              </button>
            </li>
          </ul>
          <div className="langaugeButton">
            {langaugeText}
            <div className="langaugeBox">
              <button
                className="langauge"
                onClick={() => {
                  changeLang(0);
                }}
              >
                English
              </button>
              <button
                className="langauge"
                onClick={() => {
                  changeLang(1);
                }}
              >
                ગુજરાતી
              </button>
              <button
                className="langauge"
                onClick={() => {
                  changeLang(2);
                }}
              >
                हिन्दी
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
