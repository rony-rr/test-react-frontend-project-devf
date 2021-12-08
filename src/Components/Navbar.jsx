import React from "react";
import { Link } from "react-router-dom";

/** Import CSS */
import "../Sass/_navbar.scss";

const Navbar = (props) => {
  return (
    <div className="root-navbar">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
