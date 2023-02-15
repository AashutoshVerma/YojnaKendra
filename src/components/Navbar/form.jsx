import React from "react";
import "./form.css";

const form = () => {
  return (
    <div className="contactUs">
      <div className="left">
        <i
          className="fa fa-times close2"
          aria-hidden="true"
          onClick={function () {
            document.querySelector(".contactUs").style.display = "none";
          }}
        ></i>

        <h1>Submit Your Feedback</h1>
        <div className="inputField">
          <form action="index.php" method="post">
            <input type="text" name="name" id="name" placeholder="Your Name" />
            <input
              type="text"
              name="number"
              id="number"
              placeholder="Number or Email"
            />
            <textarea
              name="comment"
              id="comment"
              cols="30"
              rows="10"
              placeholder="Submit Your Feedback"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default form;
