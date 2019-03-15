import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header id="header" className="alt">
        <a href="/" className="logo">
          <strong>Bracket</strong> <span>Factory</span>
        </a>
        <nav>
          <Link to="/menu">Create an Experience (Do Not Press)</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
