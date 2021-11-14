import React from "react";
import "./NavBar.css";
import logo from "../assets/logo.png";
import user from "../assets/user.png";

const NavBar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          {/* <a href="#"><img src={logo} alt="" className="image" /></a> */}
          <h1>Logo</h1>
        </div>
        <ul className="navlinks">
          <li className="link">
            <a href="#">Domains</a>
          </li>
          <li className="link">
            <a href="#">Hosting</a>
          </li>
          <li className="link">
            <a href="#">Security</a>
          </li>
          <li className="link">
            <a href="#">More</a>
          </li>
          <li className="link">
            <a href="#">
              <img src={user} alt="" className="dashboard" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
