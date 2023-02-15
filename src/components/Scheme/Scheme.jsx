import React, { useState } from "react";
import "./scheme.css";
// import finalEnglishData from "../../data/SchemeEnglish.json";
// import finalGujaratiData from "../../data/SchemeGujarati.json";
// import finalHindiData from "../../data/SchemeHindi.json";
import axios from "axios";
// import finalhomeData from "../"
import { Link } from "react-router-dom";

// lode gujaratidata

const Scheme = ({
  Search,
  Submit,
  changeSchemeIndex,
  langauge,
  finalHomeData,
}) => {
  const [finalEnglishData, setfinalEnglishData] = useState([]);
  const [finalGujaratiData, setfinalGujaratiData] = useState([]);
  const [finalHindiData, setfinalHindiData] = useState([]);

  // const test =[]
  // console.log(test.length!==0,"  test")

  if (finalEnglishData.length === 0) {
    
    axios
      .get("http://localhost:5000/getEng")
      // axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setfinalEnglishData(res.data);
        // console.log(finalEnglishData);
      });
  }

  if (finalEnglishData.length === 0) {
    // lode english data
    axios
      .get("http://localhost:5000/getGuj")
      // axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setfinalGujaratiData(res.data);
      });
  }

  if (finalEnglishData.length === 0) {
    // lode Hindi data
    axios
      .get("http://localhost:5000/getHin")
      // axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setfinalHindiData(res.data);
      });
  }
  // console.log(Search)

  let finalDataArray = [];
  let finalData = [];
  let filterEducation = [];
  let filterWomen = [];
  let filterEconomy = [];
  let filterSports = [];
  let filterOther = [];
  let sortedEducation = [];
  let sortedWomen = [];
  let sortedEconomy = [];
  let sortedSports = [];
  let sortedOther = [];
  let Education = [];
  let Women = [];
  let Economy = [];
  let Sports = [];
  let Other = [];

  const [EducationIndex, setEducationIndex] = useState(0);
  const [WomenIndex, setWomenIndex] = useState(0);
  const [EconomyIndex, setEconomyIndex] = useState(0);
  const [SportsIndex, setSportsIndex] = useState(0);
  const [OtherIndex, setOtherIndex] = useState(0);

  // console.log(finalEnglishData.length!==0 && finalGujaratiData.length!==0 && finalGujaratiData.length!==0 , "   ok")
  // if(finalEnglishData!==[] && finalHindiData!==[] && finalGujaratiData!==[] ){
  if (
    finalEnglishData.length !== 0 &&
    finalGujaratiData.length !== 0 &&
    finalGujaratiData.length !== 0
  ) {
    // if( false){
    finalDataArray = [finalEnglishData, finalGujaratiData, finalHindiData];
    finalData = finalDataArray[langauge];
    // console.log(
    //   finalData[0].Keywords.toLowerCase().includes(Search.toLowerCase())
    // );

    // console.log(finalData);
    filterEducation = finalData.filter(
      (scheme) =>
        scheme.ID > 100 &&
        scheme.ID < 200 &&
        scheme.Keywords.toLowerCase().includes(Search.toLowerCase()) &&
        scheme.Gender.toLowerCase().includes(Submit.gender.toLowerCase()) &&
        scheme.Caste.toLowerCase().includes(Submit.caste.toLowerCase()) &&
        scheme.MaxAge >= parseInt(Submit.age) &&
        scheme.MaxIncome >= parseInt(Submit.income)
    );
    // console.log(Submit);
    filterWomen = finalData.filter(
      (scheme) =>
        scheme.ID > 200 &&
        scheme.ID < 300 &&
        scheme.Keywords.toLowerCase().includes(Search.toLowerCase()) &&
        scheme.Gender.toLowerCase().includes(Submit.gender.toLowerCase()) &&
        scheme.Caste.toLowerCase().includes(Submit.caste.toLowerCase()) &&
        scheme.MaxAge >= parseInt(Submit.age) &&
        scheme.MaxIncome >= parseInt(Submit.income)
    );

    filterEconomy = finalData.filter(
      (scheme) =>
        scheme.ID > 300 &&
        scheme.ID < 400 &&
        scheme.Keywords.toLowerCase().includes(Search.toLowerCase()) &&
        scheme.Gender.toLowerCase().includes(Submit.gender.toLowerCase()) &&
        scheme.Caste.toLowerCase().includes(Submit.caste.toLowerCase()) &&
        scheme.MaxAge >= parseInt(Submit.age) &&
        scheme.MaxIncome >= parseInt(Submit.income)
    );
    filterSports = finalData.filter(
      (scheme) =>
        scheme.ID > 400 &&
        scheme.ID < 500 &&
        scheme.Keywords.toLowerCase().includes(Search.toLowerCase()) &&
        scheme.Gender.toLowerCase().includes(Submit.gender.toLowerCase()) &&
        scheme.Caste.toLowerCase().includes(Submit.caste.toLowerCase()) &&
        scheme.MaxAge >= parseInt(Submit.age) &&
        scheme.MaxIncome >= parseInt(Submit.income)
    );

    filterOther = finalData.filter(
      (scheme) =>
        scheme.ID > 500 &&
        scheme.ID < 600 &&
        scheme.Keywords.toLowerCase().includes(Search.toLowerCase()) &&
        scheme.Gender.toLowerCase().includes(Submit.gender.toLowerCase()) &&
        scheme.Caste.toLowerCase().includes(Submit.caste.toLowerCase()) &&
        scheme.MaxAge >= parseInt(Submit.age) &&
        scheme.MaxIncome >= parseInt(Submit.income)
    );

    sortedEducation = filterEducation;
    sortedWomen = filterWomen;
    sortedEconomy = filterEconomy;
    sortedSports = filterSports;
    sortedOther = filterOther;

    Education = sortedEducation.slice(EducationIndex, EducationIndex + 4);
    Women = sortedWomen.slice(WomenIndex, WomenIndex + 4);
    Economy = sortedEconomy.slice(EconomyIndex, EconomyIndex + 4);
    Sports = sortedSports.slice(SportsIndex, SportsIndex + 4);
    Other = sortedOther.slice(OtherIndex, OtherIndex + 4);
  }

  let moveright = (scheme) => {
    if (scheme === "Education") {
      let indexNow = Math.min(
        EducationIndex,
        Math.max(Education.length - 1, 0)
      );
      setEducationIndex(indexNow + 1);
    } else if (scheme === "Women") {
      let indexNow = Math.min(WomenIndex, Math.max(Women.length - 1, 0));
      setWomenIndex(indexNow + 1);
    } else if (scheme === "Economy") {
      let indexNow = Math.min(EconomyIndex, Math.max(Economy.length - 1, 0));
      setEconomyIndex(indexNow + 1);
    } else if (scheme === "Sports") {
      let indexNow = Math.min(SportsIndex, Math.max(Sports.length - 1, 0));
      setSportsIndex(indexNow + 1);
    } else if (scheme === "Other") {
      let indexNow = Math.min(OtherIndex, Math.max(Other.length - 1, 0));
      setOtherIndex(indexNow + 1);
    }
  };

  let moveleft = (scheme) => {
    if (scheme === "Education") {
      let indexNow = Math.max(EducationIndex, 1);
      setEducationIndex(indexNow - 1);
    } else if (scheme === "Women") {
      let indexNow = Math.max(WomenIndex, 1);
      setWomenIndex(indexNow - 1);
    } else if (scheme === "Economy") {
      let indexNow = Math.max(EconomyIndex, 1);
      setEconomyIndex(indexNow - 1);
    } else if (scheme === "Sports") {
      let indexNow = Math.max(SportsIndex, 1);
      setSportsIndex(indexNow - 1);
    } else if (scheme === "Other") {
      let indexNow = Math.max(OtherIndex, 1);
      setOtherIndex(indexNow - 1);
    }
  };

  return (
    <div className="scheme" id="blur3">
      <div className="schemeHeading">{finalHomeData.SchemeHeading}</div>
      <div className="schemeType">
        {Education.length < 1 ? (
          ""
        ) : (
          <div className="mainBox">
            <h3 className="SchemeTypeHeading">
              {finalHomeData.SchemeTypeHeading[0]}
            </h3>
            <div className="schemeBox">
              <div className="leftSlider" onClick={() => moveleft("Education")}>
                &lt;
              </div>
              <div className="middle">
                {Education &&
                  Education.map((photo) => {
                    return (
                      <div className="imageBox" key={photo.ID}>
                        <img src={photo.ImagePath} alt="None" />
                        <div className="card-content opacity">
                          <h1>{photo.SchemeTitle}</h1>
                          <Link
                            to="/scheme"
                            onClick={() => {
                              changeSchemeIndex(photo.ID);
                              window.scroll({
                                top: 0,
                                behavior: "smooth",
                              });
                            }}
                          >
                            {finalHomeData.KnowMoreText}
                          </Link>
                          {/* <a href="/scheme">{finalHomeData.KnowMoreText}</a> */}
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div
                className="rightSlider"
                onClick={() => moveright("Education")}
              >
                &gt;
              </div>
            </div>
          </div>
        )}
        {Women.length < 1 ? (
          ""
        ) : (
          <div className="mainBox">
            <h3 className="SchemeTypeHeading">
              {finalHomeData.SchemeTypeHeading[1]}
            </h3>
            <div className="schemeBox">
              <div className="leftSlider" onClick={() => moveleft("Women")}>
                &lt;
              </div>
              <div className="middle">
                {Women &&
                  Women.map((photo) => {
                    return (
                      <div className="imageBox" key={photo.ID}>
                        <img src={photo.ImagePath} alt="None" />
                        <div className="card-content opacity">
                          <h1>{photo.SchemeTitle}</h1>
                          <Link
                            to="/scheme"
                            onClick={() => {
                              changeSchemeIndex(photo.ID);
                              window.scroll({
                                top: 0,
                                behavior: "smooth",
                              });
                            }}
                          >
                            {finalHomeData.KnowMoreText}
                          </Link>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="rightSlider" onClick={() => moveright("Women")}>
                &gt;
              </div>
            </div>
          </div>
        )}

        {Economy.length < 1 ? (
          ""
        ) : (
          <div className="mainBox">
            <h3 className="SchemeTypeHeading">
              {finalHomeData.SchemeTypeHeading[2]}
            </h3>
            <div className="schemeBox">
              <div className="leftSlider" onClick={() => moveleft("Economy")}>
                &lt;
              </div>
              <div className="middle">
                {Economy &&
                  Economy.map((photo) => {
                    return (
                      <div className="imageBox" key={photo.ID}>
                        <img src={photo.ImagePath} alt="None" />
                        <div className="card-content opacity">
                          <h1>{photo.SchemeTitle}</h1>
                          <Link
                            to="/scheme"
                            onClick={() => {
                              changeSchemeIndex(photo.ID);
                              window.scroll({
                                top: 0,
                                behavior: "smooth",
                              });
                            }}
                          >
                            {finalHomeData.KnowMoreText}
                          </Link>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="rightSlider" onClick={() => moveright("Economy")}>
                &gt;
              </div>
            </div>
          </div>
        )}

        {Sports.length < 1 ? (
          ""
        ) : (
          <div className="mainBox">
            <h3 className="SchemeTypeHeading">
              {finalHomeData.SchemeTypeHeading[3]}
            </h3>
            <div className="schemeBox">
              <div className="leftSlider" onClick={() => moveleft("Sports")}>
                &lt;
              </div>
              <div className="middle">
                {Sports &&
                  Sports.map((photo) => {
                    return (
                      <div className="imageBox" key={photo.ID}>
                        <img src={photo.ImagePath} alt="None" />
                        <div className="card-content opacity">
                          <h1>{photo.SchemeTitle}</h1>
                          <Link
                            to="/scheme"
                            onClick={() => {
                              changeSchemeIndex(photo.ID);
                              window.scroll({
                                top: 0,
                                behavior: "smooth",
                              });
                            }}
                          >
                            {finalHomeData.KnowMoreText}
                          </Link>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="rightSlider" onClick={() => moveright("Sports")}>
                &gt;
              </div>
            </div>
          </div>
        )}

        {Other.length < 1 ? (
          ""
        ) : (
          <div className="mainBox">
            <h3 className="SchemeTypeHeading">
              {finalHomeData.SchemeTypeHeading[4]}
            </h3>
            <div className="schemeBox">
              <div className="leftSlider" onClick={() => moveleft("Other")}>
                &lt;
              </div>
              <div className="middle">
                {Other &&
                  Other.map((photo) => {
                    return (
                      <div className="imageBox" key={photo.ID}>
                        <img src={photo.ImagePath} alt="None" />
                        <div className="card-content opacity">
                          <h1>{photo.SchemeTitle}</h1>
                          <Link
                            to="/scheme"
                            onClick={() => {
                              changeSchemeIndex(photo.ID);
                              window.scroll({
                                top: 0,
                                behavior: "smooth",
                              });
                            }}
                          >
                            {finalHomeData.KnowMoreText}
                          </Link>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="rightSlider" onClick={() => moveright("Other")}>
                &gt;
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scheme;
