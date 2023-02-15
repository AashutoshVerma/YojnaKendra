import React from "react";
import "./getupdate.css";

const GetUpdate = () => {
  return (
    <div className="getUpdate">
      <h1>Get a Call</h1>
      <form action="">
        <input type="text" name="name" placeholder="Your Name" />
        <input
          type="text"
          name="scheme"
          id="schemeName"
          placeholder="Type Scheme Name"
        />
        <input
          type="number"
          name="number"

          placeholder="Enter your mobile number"
        />
        {/* <input type="calender" name="date" id="date" /> */}
        <input
          type="date"
          name="date"
          placeholder="Enter Date and Time"
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default GetUpdate;
