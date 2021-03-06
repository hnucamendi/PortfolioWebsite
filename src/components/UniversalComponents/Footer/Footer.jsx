import React, { useState } from "react";
import Axios from "axios";

const Footer = ({ catData }) => {
  const [fName, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    if (email.includes("@")) {
      Axios.post("http://www.oldjimmy.com:8000/form", {
        userName: fName,
        userEmail: email,
        userMessage: message,
      })
        .then(() => {
          alert("success");
        })
        .catch((err) => {
          throw err;
        });
    } else {
      alert("Enter Proper Email Address");
      return;
    }
  };

  return (
    <>
      <div className="parallax parallax-links_img"></div>
      <section className="links-content" id="links">
        <h2>Lets talk to eachother</h2>
        <div className="link-section">
          <a
            href="https://github.com/ArriolaHarold2001"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/harold-arriola-nucamendi-b6586017b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="form-container">
          <form className="contact-form">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="form-01"
              onChange={(e) => {
                setFName(e.target.value);
              }}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="form-02"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <textarea
              className="form-03"
              placeholder="Message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>

            <button className="submit-btn" onClick={handleForm}>
              Submit
            </button>
          </form>
          <div
            className="form-img"
            style={{
              backgroundImage: `url(${catData[0].url})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Footer;
