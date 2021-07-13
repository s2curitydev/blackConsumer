import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Hi-Penticton.com
      </Link>
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <NavLink
              className="nav-link"
              to="/Features"
              activeClassName="active"
            >
              Features
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link disable"
              to="Pricing"
              activeClassName="active"
            >
              Pricing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="About" activeClassName="active">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
