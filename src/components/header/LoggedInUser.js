import React, { useState, useRef, useEffect } from "react";
import { getUserName } from "../../utils/helperFunctions";
import { FaRegUser } from "react-icons/fa";

const LoggedInUser = ({ user, onProfile, onLogout }) => {
  const displayName = getUserName(user?.displayName);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    // Add click outside listener when dropdown is open
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative mx-4" ref={dropdownRef}>
      <div
        className="flex hover:cursor-pointer mx-4 hover:text-orange-500"
        onClick={toggleDropdown}
      >
        <FaRegUser className="mt-5 ml-4" />
        <button className="py-5 h-12 w-16 font-semibold text-xl ml-2">
          {displayName}
        </button>
      </div>
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <button
            onClick={onProfile}
            className="block w-full px-6 py-3 text-left font-medium text-base hover:bg-orange-100 hover:text-orange-600 transition-colors border-b border-gray-100"
          >
            Profile
          </button>
          <button
            onClick={onLogout}
            className="block w-full px-6 py-3 text-left font-medium text-base hover:bg-orange-100 hover:text-orange-600 transition-colors"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default LoggedInUser;
