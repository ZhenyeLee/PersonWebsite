import React, { Component } from "react";
import $ from "jquery";

class Navbar extends Component {
  toggleNav() {
    $("#toggleNavBar").toggleClass("").toggleClass("open");
    if (document.getElementById("navbar")) {
      document.getElementById("navbar").id = "navbar-open";
    } else {
      document.getElementById("navbar-open").id = "navbar";
    }
  }
  render() {
    return (
      <div id="navbar">
        <div className="row">
          <button
            className="navbar-toggler second-button"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent23"
            aria-controls="navbarSupportedContent23"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div
              id="toggleNavBar"
              className="animated-icon2"
              onClick={() => this.toggleNav()}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <h1
            className="col-lg-3"
            animate={this.props.isOpen ? "open" : "closed"}
          >
            <a href="#about" style={{ textDecoration: "none" }}>
              About
            </a>
          </h1>
          <h1 className="col-lg-3">
            <a href="#portfolio" style={{ textDecoration: "none" }}>
              Projects
            </a>
          </h1>
          <h1 className="col-lg-3">
            <a href="#skills" style={{ textDecoration: "none" }}>
              Skills
            </a>
          </h1>
          <h1 className="col-lg-3">
            <a href="#resume" style={{ textDecoration: "none" }}>
              Experience
            </a>
          </h1>
        </div>
      </div>
    );
  }
}
export default Navbar;
