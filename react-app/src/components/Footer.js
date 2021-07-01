import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__names--container">
        <div className="footer__name">
          <a href="https://marshall-diffey.github.io/" className="portfolioLink">Marshall Diffey</a>
          <div className="footer__icons">
            <a href="https://github.com/Marshall-Diffey">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/marshall-diffey-561192213/">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
        <div className="footer__name">
          <a href="https://chuksota.github.io/" className="portfolioLink">Chuks Ota</a>
          <div className="footer__icons">
            <a href="https://github.com/chuksota">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/chuks-ota-818248127/">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
        <div className="footer__name">
          <a href="https://jps725.github.io/" className="portfolioLink">Josh Steinberg</a>
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
          <a href="https://github.com/bstetzer32" className="portfolioLink">Ben Stetzer</a>
          <div className="footer__icons">
            <a href="https://github.com/bstetzer32">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/ben-stetzer-9334881ba/">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
