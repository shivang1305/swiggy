import React, { useState } from "react";
import { FOOD_ICON } from "../../utils/constants";

const Register = ({ setAuthPage }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  const validateRegisterForm = () => {
    let newErrors = {};

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }

    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateRegisterForm()) {
      console.log("Form submitted successfully:", { phoneNumber, name, email });
      // Proceed with API call or next step
    }
  };

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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            className="w-full px-4 py-5 font-semibold text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 mt-1">{errors.phoneNumber}</p>
          )}

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="w-full px-4 mt-4 py-5 font-semibold text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.email);
            }}
            className="w-full px-4 mt-4 py-5 font-semibold text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}

          <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md mt-4 hover:bg-orange-600 transition">
            CONTINUE
          </button>
        </form>
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
