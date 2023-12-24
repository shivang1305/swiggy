import React from "react";
import AddToCartButton from "./AddToCartButton";
import { MENU_ITEM_IMAGE_URL } from "../../utils/constants";

const MenuItem = ({ menuItem, name }) => {
  menuItem.restaurant = name;
  return (
    <div className="bg-slate-100 rounded-lg p-4 flex shadow" data-testid="menu">
      <img
        className="h-52 w-60 object-cover rounded-lg cursor-pointer"
        src={MENU_ITEM_IMAGE_URL + menuItem.card.info.imageId}
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
