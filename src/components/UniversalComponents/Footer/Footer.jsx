import React from "react";

const Footer = () => {
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
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="form-02"
              required
            />
            <textarea className="form-03" placeholder="Message"></textarea>

            <button className="submit-btn">Submit</button>
          </form>
          <div
            className="form-img"
            style={{
              backgroundImage: `url("./img/cat/Cat.jpeg")`,
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
