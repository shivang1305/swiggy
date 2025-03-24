import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../../redux/slices/authSlice";
import Login from "../auth/Login";
import Register from "../auth/Register";

const AuthSidebar = () => {
  const [authPage, setAuthPage] = useState("login");
  const isSidebarOpen = useSelector(
    (store) => store.authentication.isSidebarOpen
  );

  const dispatch = useDispatch();

  const sidebarClasses = isSidebarOpen
    ? "fixed z-50 h-full w-1/3 bg-white top-0 right-0 shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out"
    : "fixed z-50 h-full w-1/3 bg-white top-0 right-0 shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out";

  return (
    <div className={sidebarClasses}>
      <div className="p-4 border-b border-gray-300">
        <button
          onClick={() => {
            dispatch(closeSidebar());
            setAuthPage("login");
          }}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2.293 4.293a1 1 0 011.414 0L10 10.586l6.293-6.293a1 1 0 111.414 1.414L11.414 12l6.293 6.293a1 1 0 01-1.414 1.414L10 13.414 3.707 19.707a1 1 0 01-1.414-1.414L8.586 12 2.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {authPage === "login" ? (
        <Login setAuthPage={setAuthPage} />
      ) : (
        <Register setAuthPage={setAuthPage} />
      )}
    </div>
  );
};

export default AuthSidebar;
