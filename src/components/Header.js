import LOGO_URL from "../utils/constants";
import { useState } from "react";

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
          <li>Home</li>
          <li>About</li>
          <li>Login</li>
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
