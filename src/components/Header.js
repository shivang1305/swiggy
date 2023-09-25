import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnline from "../utils/useOnline";
import OnlineSection from "./OnlineSection";
import OfflineSection from "./OfflineSection";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnLabel, setBtnLabel] = useState("Login");
  const isOnline = useOnline();

  const toggleButton = () => {
    if (btnLabel === "Login") setBtnLabel("Logout");
    else if (btnLabel === "Logout") setBtnLabel("Login");
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      {!isOnline && <OfflineSection />}
      {isOnline && <OnlineSection />}
      <div className="flex justify-between shadow-md border border-gray-200">
        <div className="flex">
          <div className="logo-container m-6 ml-8 h-12 w-12  hover:cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            <Link to="/">
              <img data-testid="logo" className="w-52" src={LOGO_URL} />
            </Link>
          </div>
          <div className="location-container justify-center my-12 font-semibold">
            Gurugram, Haryana, India
          </div>
        </div>
        <div className="py-5">
          <ul className="text-2xl flex list-none">
            <li className="p-5 font-semibold text-xl">
              <Link to="/about">Search</Link>
            </li>
            <li className="p-5 font-semibold text-xl">
              <Link to="/contact">Offers</Link>
            </li>
            <li className="p-5 font-semibold text-xl">
              <Link to="/instamart">Help</Link>
            </li>
            <li>
              <button
                className="p-5 h-12 w-24 font-semibold text-xl"
                onClick={toggleButton}
              >
                {btnLabel}
              </button>
            </li>
            <li className="p-5 font-semibold text-xl">
              <Link to="/cart" data-testid="cart">
                {"Cart "}
                {cartItems.length}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
