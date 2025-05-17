import { useEffect, useState } from "react";
import { auth } from "../../utils/firebase";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FOOD_ICON } from "../../utils/constants";
import OtpVerification from "./OtpVerification";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const Login = ({ setAuthPage }) => {
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isOtpScreen, setOtpScreen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Clear any existing reCAPTCHA to avoid duplicates
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
    }

    // Create a new reCAPTCHA verifier
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
          setError("reCAPTCHA expired. Please try again.");
          setLoading(false);
        },
      }
    );

    // Cleanup function to clear reCAPTCHA when component unmounts
    return () => {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
      }
    };
  }, []);

  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: { phoneNumber: "" },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setError(null);
        setLoading(true);

        // Ensure reCAPTCHA is ready
        if (!window.recaptchaVerifier) {
          throw new Error("reCAPTCHA not initialized properly");
        }

        const phoneNum = `+91${values.phoneNumber}`;
        console.log("Sending OTP to:", phoneNum);

        const confirmation = await signInWithPhoneNumber(
          auth,
          phoneNum,
          window.recaptchaVerifier
        );

        setConfirmationResult(confirmation);
        setOtpScreen(true);
        setLoading(false);
      } catch (err) {
        console.error("Firebase authentication error:", err);
        setError(err.message || "Failed to send OTP. Please try again.");
        setLoading(false);

        // Reset reCAPTCHA on error
        if (window.recaptchaVerifier) {
          window.recaptchaVerifier.clear();

          // Re-initialize reCAPTCHA
          window.recaptchaVerifier = new RecaptchaVerifier(
            auth,
            "recaptcha-container",
            {
              size: "invisible",
              callback: () => {
                console.log("Recaptcha re-verified");
              },
            }
          );
        }
      }
    },
  });

  // Handler for phone number input to allow only numbers
  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    // Only update if input is empty or consists of only numbers
    if (value === "" || /^[0-9]+$/.test(value)) {
      formik.handleChange(e);
    }
  };

  if (isOtpScreen)
    return (
      <OtpVerification
        data={formik.values}
        confirmationResult={confirmationResult}
        source="login"
      />
    );

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
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={formik.handleSubmit}>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone number"
            value={formik.values.phoneNumber}
            onChange={handlePhoneNumberChange}
            onBlur={formik.handleBlur}
            maxLength={10}
            pattern="[0-9]*"
            inputMode="numeric"
            className="w-full px-4 py-5 font-semibold text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div className="text-red-500 mt-1">{formik.errors.phoneNumber}</div>
          )}
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white font-semibold py-3 rounded-md mt-4 transition ${
              loading ? "bg-gray-400" : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            {loading ? "SENDING OTP..." : "LOGIN"}
          </button>
        </form>
        <div id="recaptcha-container" className="mt-4"></div>
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
