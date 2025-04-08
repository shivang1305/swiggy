import React from "react";
import { getUserName } from "../../utils/helperFunctions";
import { FaRegUser } from "react-icons/fa";

const LoggedInUser = ({ user }) => {
  const displayName = getUserName(user?.displayName);
  return (
    <div
      className="flex hover:cursor-pointer mx-4 hover:text-orange-500"
      onClick={() => {}}
    >
      <FaRegUser className="mt-5 ml-4" />
      <button className="py-5 h-12 w-16 font-semibold text-xl ml-2">
        {displayName}
      </button>
    </div>
  );
};

export default LoggedInUser;
