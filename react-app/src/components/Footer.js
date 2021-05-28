import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__names--container">
        <div className="footer__name">
          Marshall Diffey
          <div className="footer__icons">
            <a href="">
              <i className="fab fa-github" />
            </a>
            <a href="">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
        <div className="footer__name">
          Chuks Ota
          <div className="footer__icons">
            <a href="">
              <i className="fab fa-github" />
            </a>
            <a href="">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
        <div className="footer__name">
          Josh Steinberg
          <div className="footer__icons">
            <a href="https://github/jps725">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/josh-steinberg-21618846">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
        <div className="footer__name">
          Ben Stetzer
          <div className="footer__icons">
            <a href="">
              <i className="fab fa-github" />
            </a>
            <a href="">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
