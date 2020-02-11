import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="light-blue lighten-1" role="navigation">
      <div className="nav-wrapper container">
        <h1 id="logo-container" className="brand-logo">
          <Link to="/">Lyrical</Link>
        </h1>
      </div>
    </nav>
  );
};

export default NavBar;
