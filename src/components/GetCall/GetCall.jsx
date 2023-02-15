import React from "react";
import { Link } from "react-router-dom";
import "./getcall.css";
const GetCall = () => {
  return (
    <div id="getCall">
      <Link
        to="/call"
        onClick={function () {
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <i className="fa fa-phone" aria-hidden="true"></i>
      </Link>
    </div>
  );
};

export default GetCall;
