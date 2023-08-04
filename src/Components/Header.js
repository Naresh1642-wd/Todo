import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <main className="Header">
      <div className="logo" href="/">
        Nresh
      </div>

      <div className="nav_bar">
        <li className="nav-links">
          <Link to="/">AddBlog</Link>
        </li>
        <li className="nav-links">
          <Link to="/BlogList"> Contents </Link>
        </li>
      </div>
    </main>
  );
};

export default Header;
