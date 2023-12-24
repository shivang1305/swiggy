import React from "react";
import { EMPTY_CART_IMAGE_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="text-center">
      <img
        src={EMPTY_CART_IMAGE_URL}
        alt="Empty Cart"
        className="w-1/3 mx-auto mb-4"
      />
      <p className="text-xl font-semibold text-gray-600 mb-4">
        Your cart is empty.
      </p>
      <Link to="/">
        <button className="bg-yellow-500 text-white text-base font-bold px-2 py-4 rounded cursor-pointer border-none hover:bg-yellow-600">
          Browse Restaurants Near You
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
