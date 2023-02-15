import React, { useRef } from "react";
import "./getnotification.css";
import emailjs from "@emailjs/browser";

const GetNotification = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i7efjos",
        "template_mfyj0yn",
        form.current,
        "zJ5l2qDpcA76-W443"
      )
      .then(
        (result) => {
          alert("Successfully Submited");
        },
        (error) => {
          alert("Sorry you have entered wrong details");
        }
      );
  };
  return (
    <div className="getNotification">
      <h1>Get Updates</h1>
      <div className="border"></div>
      <form action="" onSubmit={sendEmail} ref={form}>
        <input type="text" name="name" id="getName" placeholder="Your Name" />
        <input
          type="text"
          name="scheme"
          id="getSchemeName"
          placeholder="Type Scheme Name"
        />
        <input type="email" name="email" id="email" placeholder="Email" />
        <input type="submit" value="Send" id="send" />
      </form>
    </div>
  );
};

export default GetNotification;
