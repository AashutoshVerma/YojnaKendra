import React from "react";
import "./faq.css";

const FAQ = ({ finalData }) => {
  return (
    <div className="faqContainer" id="blur5">
      <div className="faqHeading">
        <h1>FAQ</h1>
      </div>
      <div className="faqInfo">
        <div className="firstCol">
          <h3 id="dd">{finalData.FAQQuestions[0]}</h3>
          <p>{finalData.FAQAnswers[0]}</p>
        </div>
        <div className="firstCol">
          <h3 id="dd">{finalData.FAQQuestions[1]}</h3>
          <p>{finalData.FAQAnswers[1]}</p>
        </div>
        <div className="firstCol">
          <h3 id="dd">{finalData.FAQQuestions[2]}</h3>
          <p>{finalData.FAQAnswers[2]}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
