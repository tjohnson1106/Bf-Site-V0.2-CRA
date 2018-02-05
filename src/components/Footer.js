import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a href="https://twitter.com/BracketFactory" className="icon alt fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/bracketfactory/" className="icon alt fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/bracketfactory/" className="icon alt fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/damianesteban" className="icon alt fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/bracket-factory/"
                className="icon alt fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>Bracket Factory</li>
            <li>
              <a href="#">Code as Art Art as Code</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
