import React from "react";
import AddToCartButton from "./AddToCartButton";
import { CDN_URL, NON_VEG_ICON_URL, VEG_ICON_URL } from "../../utils/constants";

const MenuItem = ({ menuItem, restaurantName }) => {
  const { name, imageId, description, price, isVeg, ribbon, defaultPrice } =
    menuItem?.card?.info;

  const totalPrice = price || defaultPrice;

  menuItem.restaurant = restaurantName;
  return (
    <div className="rounded-lg p-4 flex shadow" data-testid="menu">
      <img
        className="h-52 w-72 object-cover rounded-lg cursor-pointer"
        src={CDN_URL + imageId}
        alt={name}
      />
      <div className="mt-4 ml-6">
        <h3 className="text-base font-bold mb-2 flex">
          {name}
          {isVeg ? (
            <img className="h-5 w-5 ml-2" src={VEG_ICON_URL} alt="veg-icon" />
          ) : (
            <img
              className="h-5 w-5 ml-2"
              src={NON_VEG_ICON_URL}
              alt="veg-icon"
            />
          )}{" "}
          <span className="text-sm ml-2 text-yellow-500">{ribbon?.text}</span>
        </h3>
        <p className="text-sm text-gray-500 mb-2">{description}</p>
        <p className="text-base font-bold mb-2">₹{totalPrice / 100}</p>
        <AddToCartButton menuItem={menuItem} />
      </div>
    </div>
  );
};

export default MenuItem;
