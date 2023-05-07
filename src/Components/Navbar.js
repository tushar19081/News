import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div>
      <div className="page-wrapper">
        <div className="nav-wrapper">
          <nav className="navbar">
            <img src="news-logo.svg" alt="/" width="75px" height="46px" />
            <div className="menu-toggle" id="mobile-menu">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className="nav no-search">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link to="/general">General</Link>
              </li>
              <li className="nav-item">
                <Link to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link to="/technology">Technology</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
