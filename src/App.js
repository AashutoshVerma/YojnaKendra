import "./App.css";
import React, { useState } from "react";
import PopUp from "./components/PopUp/PopUp";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Scheme from "./components/Scheme/Scheme";
import Form from "./components/Navbar/form";
import finalEnglishData from "./data/SchemeEnglish.json";
import finalGujaratiData from "./data/SchemeGujarati.json";
import finalHindiData from "./data/SchemeHindi.json";
import finalEnglishHomeData from "./data/HomePageEnglish.json";
import finalGujaratiHomeData from "./data/HomePageGujarati.json";
import finalHindiHomeData from "./data/HomePageHindi.json";
import OpenScheme from "./components/Scheme/OpenScheme/OpenScheme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FAQ from "./components/FAQ/FAQ";
import Extra from "./components/Extra/Extra";
import GetCall from "./components/GetCall/GetCall";
import GetUpdate from "./components/GetCall/GetUpdate";
import GetNotification from "./components/Scheme/OpenScheme/GetNotification/GetNotification";
import GetDocs from "./components/Scheme/OpenScheme/GetDocuments/GetDocs";
import Admin from "./admin/Admin";
import ChatBox from './components/ChatBox/ChatBox';
const App = () => {
  const [Search, setSearch] = useState("");
  let changeSearch = (search) => {
    setSearch(search);
  };

  const [Submit, setSubmit] = useState({
    gender: "",
    income: 0,
    caste: "",
    age: 0,
  });

  const [schemeIndex, setSchemeIndex] = useState(101);
  const [langauge, setlangauge] = useState(0);

  let finalDataArray = [finalEnglishData, finalGujaratiData, finalHindiData];
  let finalData = finalDataArray[langauge];

  let finalHomeDataArray = [
    finalEnglishHomeData[0],
    finalGujaratiHomeData[0],
    finalHindiHomeData[0],
  ];
  let finalHomeData = finalHomeDataArray[langauge];
  // console.log(finalHomeData.AboutHeading);

  // let chateBot = () => {
  //   // console.log(botFlage);
  //   if (botFlage) {
  //     setBotFlage(false);
  //     return;
  //   }
  //   return <ChatBox Search={Search} />;
  // };

  let changeLang = (index) => {
    setlangauge(index);
  };

  let changeSchemeIndex = (index) => {
    setSchemeIndex(index);
  };

  let onSubmit = (Submit) => {
    setSubmit(Submit);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Form />
                <PopUp onSubmit={onSubmit} />
                <Navbar
                  searchText={finalHomeData.NavbarSearch}
                  changeSearch={changeSearch}
                  changeLang={changeLang}
                  langaugeText={finalHomeData.Language}
                  schemeText={finalHomeData.Scheme}
                  feedbackText={finalHomeData.Feedback}
                  schemeList={finalHomeData.SchemeTypeHeading}
                />
                <About finalData={finalHomeData} />
                <Scheme
                  Search={Search}
                  Submit={Submit}
                  changeSchemeIndex={changeSchemeIndex}
                  langauge={langauge}
                  finalHomeData={finalHomeData}
                />
              </>
            }
          />
          <Route
            path="/scheme"
            element={
              <>
                <Form />
                <Navbar
                  searchText={finalHomeData.NavbarSearch}
                  changeSearch={changeSearch}
                  changeLang={changeLang}
                  langaugeText={finalHomeData.Language}
                  schemeText={finalHomeData.Scheme}
                  feedbackText={finalHomeData.Feedback}
                  schemeList={finalHomeData.SchemeTypeHeading}
                />
                <OpenScheme
                  scheme={
                    finalData.filter((scheme) => scheme.ID === schemeIndex)[0]
                  }
                  finalData={finalHomeData}
                />
              </>
            }
          />
          <Route
            path="/call"
            element={
              <>
                <Form />
                <Navbar
                  searchText={finalHomeData.NavbarSearch}
                  changeSearch={changeSearch}
                  changeLang={changeLang}
                  langaugeText={finalHomeData.Language}
                  schemeText={finalHomeData.Scheme}
                  feedbackText={finalHomeData.Feedback}
                  schemeList={finalHomeData.SchemeTypeHeading}
                />
                <GetUpdate />
              </>
            }
          />
          <Route
            path="/getupdate"
            element={
              <>
                <Form />
                <Navbar
                  searchText={finalHomeData.NavbarSearch}
                  changeSearch={changeSearch}
                  changeLang={changeLang}
                  langaugeText={finalHomeData.Language}
                  schemeText={finalHomeData.Scheme}
                  feedbackText={finalHomeData.Feedback}
                  schemeList={finalHomeData.SchemeTypeHeading}
                />
                <GetNotification />
              </>
            }
          />
          <Route
            path="/getDocs"
            element={
              <>
                <Form />
                <Navbar
                  searchText={finalHomeData.NavbarSearch}
                  changeSearch={changeSearch}
                  changeLang={changeLang}
                  langaugeText={finalHomeData.Language}
                  schemeText={finalHomeData.Scheme}
                  feedbackText={finalHomeData.Feedback}
                  schemeList={finalHomeData.SchemeTypeHeading}
                />
                <GetDocs />
              </>
            }
          />
          <Route
            path="/admin"
            element={
              <>
                <Admin />
              </>
            }
          />
        </Routes>
        <GetCall />
      </Router>
      <FAQ finalData={finalHomeData} />
      <Extra />
      <Footer />
      {/* <ChatBox /> */}
    </div>
  );
};

export default App;

{
  /*
   */
}
