import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg pt-0 pb-0 navbar-light  bg-color">
      <div className="container">
        <div className="collapse navbar-collapse py-3" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link active text-white ps-0"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active text-white"
                to="/servicesData"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active text-white" to="aboutus">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active text-white" to="contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
          <button className="btn-style btn px-3 ms-auto">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
