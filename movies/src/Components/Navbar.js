import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          <h2
            className="common"
            style={{
              marginLeft: "0.5rem",
              marginTop: "1rem",
              padding: "0.6rem",
              borderRadius: "2rem",
              boxShadow: "0.2rem 0.2rem 0.5rem black",
            }}
          >
            MOVFLIX
          </h2>
        </Link>

        <Link to="/favourites" style={{ textDecoration: "none" }}>
          <h5
            className="common"
            style={{
              marginLeft: "2rem",
              marginTop: "1rem",
              padding: "1rem",
              borderRadius: "2rem",
              boxShadow: "0.2rem 0.2rem 0.5rem black",
            }}
          >
            FAVOURITES
          </h5>
        </Link>
      </div>
    );
  }
}
