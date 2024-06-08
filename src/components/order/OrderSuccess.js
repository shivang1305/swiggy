import Lottie from "react-lottie";
import orderSuccessAnimation from "./order-sucess-animation.json";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/slices/cartSlice";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: orderSuccessAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleGoToHome = () => {
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-64 h-64">
        <Lottie options={defaultOptions} height={256} width={256} />
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mt-4">
        Order Placed Successfully!
      </h1>
      <p className="text-gray-600 mt-2">
        Thank you for your order. Your delicious food is on its way!
      </p>
      <button
        onClick={handleGoToHome}
        className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition duration-200"
      >
        Go to Home
      </button>
    </div>
  );
};

export default OrderSuccess;
