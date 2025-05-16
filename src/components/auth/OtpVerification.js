import { useState } from "react";
import { FOOD_ICON } from "../../utils/constants";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { closeSidebar, setUser } from "../../redux/slices/authSlice";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../utils/firebase";

const OtpVerification = ({ data, confirmationResult, source }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp || otp.length < 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await confirmationResult.confirm(otp);
      const user = res.user;

      if (source === "register") {
        await updateProfile(user, {
          displayName: data.name,
          email: data.email,
        });

        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          phoneNumber: user.phoneNumber,
          name: data.name,
          email: data.email,
          created_at: serverTimestamp(),
        });
      }

      console.log("User signed in: ", user);
      setSuccess("User signed in successfully....");

      dispatch(closeSidebar());

      let filteredUserData = {
        uid: user.uid,
        phoneNumber: user.phoneNumber,
        displayName: user.displayName || "",
        email: user.email || "",
      };

      dispatch(setUser(filteredUserData));
    } catch (error) {
      console.error("OTP verification error:", error);
      setError(error.message || "Invalid OTP, please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white px-6">
      <div className="w-full max-w-md p-6">
        <div className="flex">
          <div>
            <h2 className="text-5xl font-semibold text-black">Enter OTP</h2>
            <p className="text-gray-600 mt-2">
              We've sent an OTP to your phone number.
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
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone number"
            value={data.phoneNumber}
            disabled
            className="w-full px-4 py-5 font-semibold text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="One time password"
            maxLength={6}
            className="w-full px-4 py-5 mt-4 font-semibold text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            className={`w-full text-white font-semibold py-3 rounded-md mt-4 transition ${
              loading ? "bg-gray-400" : "bg-orange-500 hover:bg-orange-600"
            }`}
            disabled={loading}
          >
            {loading ? "VERIFYING..." : "VERIFY OTP"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
