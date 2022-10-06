import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav">
      <span className="navButton" id="homeNav">
        <NavLink to="/">Home</NavLink>
      </span>

      <span className="navButton" id="startNav">
        <NavLink to={{ pathname: "/breed-app" }}>Breed List</NavLink>
      </span>

      <span className="navButton" id="startNav">
        <NavLink to="/search-app">Search Breed</NavLink>
      </span>
    </div>
  );
};

export default withRouter(Nav);
