import React from "react";
import "./Footer.css";
// import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              erickim.tech
              <i className="fab fa-typo3" />
            </Link>
          </div>
          {/* <small className="website-rights">Made by Eric Kim</small> */}
          <div className="social-icons">
            <a
              className="social-icon-link github"
              href="https://github.com/yekime"
              target="_blank"
            >
              <i className="fab fa-github" />
            </a>
            <a
              className="social-icon-link linkedin"
              href="https://linkedin.com/in/yekime"
              target="_blank"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
