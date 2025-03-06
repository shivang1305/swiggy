import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../../redux/slices/authSlice";
import { FOOD_ICON } from "../../utils/constants";

const AuthSidebar = () => {
  const isSidebarOpen = useSelector(
    (store) => store.authentication.isSidebarOpen
  );

  const dispatch = useDispatch();

  const sidebarClasses = isSidebarOpen
    ? "absolute z-10 h-full w-1/3 bg-white top-0 right-0 shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out"
    : "absolute z-10 h-full w-1/3 bg-white top-0 right-0 shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out";

  return (
    <div className={sidebarClasses}>
      <div className="p-4 border-b border-gray-300">
        <button
          onClick={() => {
            dispatch(closeSidebar());
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
      <div className="flex flex-col min-h-screen bg-white px-6">
        <div className="w-full max-w-md p-6">
          <div className="flex">
            <div>
              <h2 className="text-5xl font-semibold text-black">Login</h2>
              <p className="text-gray-600">
                or{" "}
                <span className="text-orange-500 font-medium cursor-pointer">
                  create an account
                </span>
              </p>
            </div>
            <div className="w-20 h-20 mx-auto mt-4">
              <img
                src={FOOD_ICON}
                alt="Food Logo"
                className="w-full h-full rounded-full"
              />
            </div>
          </div>

          <hr className="border-t-2 border-black w-10 my-4 mx-auto" />
          <input
            type="text"
            placeholder="Phone number"
            onChange={() => {}}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md mt-4 hover:bg-orange-600 transition">
            LOGIN
          </button>
          <p className="text-gray-600 text-sm mt-4">
            By clicking on Login, I accept the{" "}
            <span className="font-bold">Terms & Conditions</span> &{" "}
            <span className="font-bold">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthSidebar;
