import React from "react";
import AddToCartButton from "./AddToCartButton";
import { CDN_URL } from "../../utils/constants";

const MenuItem = ({ menuItem, name }) => {
  menuItem.restaurant = name;
  return (
    <div className="rounded-lg p-4 flex shadow" data-testid="menu">
      <img
        className="h-52 w-72 object-cover rounded-lg cursor-pointer"
        src={CDN_URL + menuItem.card.info.imageId}
        alt={menuItem.card.info.name}
      />
      <div className="mt-4 ml-6">
        <h3 className="text-base font-bold mb-2">{menuItem.card.info.name}</h3>
        <p className="text-sm text-gray-500 mb-2">
          {menuItem.card.info.description}
        </p>
        <p className="text-base font-bold mb-2">
          ₹{menuItem.card.info.price / 100}
        </p>
        <AddToCartButton menuItem={menuItem} />
      </div>
    </div>
  );
};

export default MenuItem;
