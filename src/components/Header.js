import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnline from "../utils/useOnline";
import OnlineSection from "./OnlineSection";
import OfflineSection from "./OfflineSection";

const Header = () => {
  const [btnLabel, setBtnLabel] = useState("Login");
  const isOnline = useOnline();

  const toggleButton = () => {
    if (btnLabel === "Login") setBtnLabel("Logout");
    else if (btnLabel === "Logout") setBtnLabel("Login");
  };

  return (
    <div>
      {!isOnline && <OfflineSection />}
      {isOnline && <OnlineSection />}
      <div className="flex justify-between border-2 border-black">
        <div className="logo-container">
          <img className="w-52" src={LOGO_URL} />
        </div>
        <div className="py-5">
          <ul className="text-2xl flex list-none">
            <li className="p-5">
              <Link to="/">Home</Link>
            </li>
            <li className="p-5">
              <Link to="/about">About</Link>
            </li>
            <li className="p-5">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="p-5">Signup</li>
            <li className="p-5">Cart</li>
            <li>
              <button className="p-5 mr-3 h-12 w-24" onClick={toggleButton}>
                {btnLabel}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
