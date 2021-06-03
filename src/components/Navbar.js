import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="nav">
      <div className="left-div">
        <Link to="/">
          <img
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
            alt="logo"
          />
        </Link>
      </div>

      <div className="search-container">
        <img
          className="search-icon"
          src="https://image.flaticon.com/icons/svg/483/483356.svg"
          alt="search-icon"
        />

        <input placeholder="Search" />

        <div className="search-results">
          <ul>
            <li className="search-results-row">
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-dp"
              />
              <span>Iron Man</span>
            </li>

            <li className="search-results-row">
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-dp"
              />
              <span>Thor</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="right-nav">
        <div className="user">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
            id="user-dp"
          />
          <span>Captian America</span>
        </div>

        <div className="nav-links">
          <ul>
            <Link to="/login">
              <li>Log In</li>
            </Link>
            <Link to="/logout">
              <li>Log Out</li>
            </Link>
            <Link to="/signup">
              <li>Register</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
