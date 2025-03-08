import React from "react";
import { FOOD_ICON } from "../../utils/constants";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = ({ setAuthPage }) => {
  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: { phoneNumber: "" },
    validationSchema,
    onSubmit: (values) => {
      console.log("Login form submitted...", values);
    },
  });

  return (
    <div className="flex flex-col min-h-screen bg-white px-6">
      <div className="w-full max-w-md p-6">
        <div className="flex">
          <div>
            <h2 className="text-5xl font-semibold text-black">Login</h2>
            <p className="text-gray-600 mt-2">
              or{" "}
              <span
                className="text-orange-500 font-medium cursor-pointer"
                onClick={() => setAuthPage("register")}
              >
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
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md mt-4 hover:bg-orange-600 transition"
          >
            LOGIN
          </button>
        </form>
        <p className="text-gray-600 text-sm mt-4">
          By clicking on Login, I accept the{" "}
          <span className="font-bold">Terms & Conditions</span> &{" "}
          <span className="font-bold">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
