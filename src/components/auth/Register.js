import React, { useEffect, useState } from "react";
import { FOOD_ICON } from "../../utils/constants";
import * as Yup from "yup";
import { useFormik } from "formik";
import OtpVerification from "./OtpVerification";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../utils/firebase";

const Register = ({ setAuthPage }) => {
  const [isOtpSend, setOtpSend] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: () => {
          console.log("Recaptcha verified");
        },
        "expired-callback": () => {
          console.warn("reCAPTCHA expired. Please retry.");
        },
      }
    );
  }, []);

  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: { phoneNumber: "", name: "", email: "" },
    validationSchema,
    onSubmit: async (values) => {
      const phoneNum = `+91${values.phoneNumber}`;
      try {
        const confirmation = await signInWithPhoneNumber(
          auth,
          phoneNum,
          window.recaptchaVerifier
        );
        setConfirmationResult(confirmation);
        setOtpSend(true);
      } catch (error) {
        console.log("Error sending otp", error);
      }
    },
  });

  if (isOtpSend)
    return (
      <OtpVerification
        data={formik.values}
        confirmationResult={confirmationResult}
        source="register"
      />
    );

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

        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-4 py-5 font-semibold text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div className="text-red-500 mt-1">{formik.errors.phoneNumber}</div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-4 mt-4 py-5 font-semibold text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 mt-1">{formik.errors.name}</div>
          )}

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-4 mt-4 py-5 font-semibold text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 mt-1">{formik.errors.email}</div>
          )}

          <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md mt-4 hover:bg-orange-600 transition">
            CONTINUE
          </button>
        </form>

        <div id="recaptcha-container"></div>

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
