import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnLabel, setBtnLabel] = useState("Login");

  const toggleButton = () => {
    if (btnLabel === "Login") setBtnLabel("Logout");
    else if (btnLabel === "Logout") setBtnLabel("Login");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Signup</li>
          <li>Cart</li>
          <li>
            <button className="login-btn" onClick={toggleButton}>
              {btnLabel}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
