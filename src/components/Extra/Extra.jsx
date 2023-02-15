import React from "react";
import "./extra.css";
const Extra = () => {
  return (
    <div className="extra" id="blur6">
      <div className="leftExtra">
        <div className="extraLogo">
          <img src="images/footer_logo.png" alt="None" />
        </div>
      </div>
      <div className="rightExtra">
        <div className="extraText">
          <p id="sssv">
            “ સૌનો <span>સાથ </span>, સૌનો <span>વિકાસ </span>”
          </p>
        </div>
        <div className="extraLink">
          <div className="extraLinkOpen">
            <a
              href="https://www.instagram.com/cmogujarat/?hl=en----insta"
              target="__blank"
            >
              CMO Instagram
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.facebook.com/gujaratinformation.official/---facebook"
              target="__blank"
            >
              CMO Facebook
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="https://mobile.twitter.com/cmoguj" target="__blank">
              CMO Twitter
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </div>
          <div className="extraLinkOpen2">
            <h1>Official Website</h1>
            <div className="officialWebsite">
              <a
                href="https://cmogujarat.gov.in/en/important-website-links-gujarat/"
                target="__blank"
              >
                CMO Official Website
              </a>
              <a href="http://www.gujaratindia.com/" target="__blank">
                Gujarat State Portal
              </a>
              <a href="https://atma.gujarat.gov.in/" target="__blank">
                Agriculture and Co-Operation Department
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
