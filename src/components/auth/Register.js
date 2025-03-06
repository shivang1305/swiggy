import React from "react";
import { FOOD_ICON } from "../../utils/constants";

const Register = ({ setAuthPage }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white px-6">
      <div className="w-full max-w-md p-6">
        <div className="flex">
          <div>
            <h2 className="text-5xl font-semibold text-black">Sign up</h2>
            <p className="text-gray-600 mt-2">
              or{" "}
              <span
                className="text-orange-500 font-medium cursor-pointer"
                onClick={() => setAuthPage("login")}
              >
                login to your account
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
          className="w-full px-4 py-5 font-semibold text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="text"
          placeholder="Name"
          onChange={() => {}}
          className="w-full px-4 mt-4 py-5 font-semibold text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="text"
          placeholder="Email"
          onChange={() => {}}
          className="w-full px-4 mt-4 py-5 font-semibold text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md mt-4 hover:bg-orange-600 transition">
          CONTINUE
        </button>
        <p className="text-gray-600 text-sm mt-4">
          By creating an account, I accept the{" "}
          <span className="font-bold">Terms & Conditions</span> &{" "}
          <span className="font-bold">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
