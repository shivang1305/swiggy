import React from "react";
import { useDispatch } from "react-redux";
import { openSidebar } from "../../redux/slices/authSlice";
import { FaRegUser } from "react-icons/fa";

const LoginHeader = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="flex hover:cursor-pointer mx-4 hover:text-orange-500"
      onClick={() => {
        dispatch(openSidebar());
      }}
    >
      <FaRegUser className="mt-5 ml-4" />
      <button className="py-5 h-12 w-16 font-semibold text-xl ml-2">
        Login
      </button>
    </div>
  );
};

export default LoginHeader;
