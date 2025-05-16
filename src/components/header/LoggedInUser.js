import React from "react";
import { getUserName } from "../../utils/helperFunctions";
import { FaRegUser } from "react-icons/fa";

const LoggedInUser = ({ user, onProfile, onLogout }) => {
  const displayName = getUserName(user?.displayName);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
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
        <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg z-50">
          <button
            onClick={onProfile}
            className="block w-full px-4 py-2 text-left text-sm hover:bg-orange-100"
          >
            Profile
          </button>
          <button
            onClick={onLogout}
            className="block w-full px-4 py-2 text-left text-sm hover:bg-orange-100"
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default LoggedInUser;
