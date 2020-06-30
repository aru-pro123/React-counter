import React, { Component } from "react";
import logo from "../logo.svg";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-secondary ">
        <a
          className="navbar-brand"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginLeft: "80px",
            color: "white",
          }}
        >
          React Counter
          <span
            className="badge badge-pill badge-success"
            style={{ padding: "10px", marginLeft: "10px" }}
          >
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
