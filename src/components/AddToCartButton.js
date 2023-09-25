import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const AddToCart = ({ menuItem }) => {
  const dispatch = useDispatch();

  const [itemCount, setItemCount] = useState(0);

  const addItemToCart = (item) => {
    setItemCount(itemCount + 1);
    dispatch(addItem(item));
  };

  const removeItemFromCart = (item) => {
    setItemCount(itemCount - 1);
    dispatch(removeItem(item));
  };

  return itemCount === 0 ? (
    <button
      className="bg-yellow-500 text-white text-base font-bold px-2 py-4 rounded cursor-pointer border-none hover:bg-yellow-600"
      onClick={() => addItemToCart(menuItem)}
      data-testid="add-btn"
    >
      Add to Cart
    </button>
  ) : (
    <div
      className="bg-yellow-500 w-28 justify-between flex text-white text-base font-bold px-2 py-4 rounded cursor-pointer border-none hover:bg-yellow-600"
      data-testid="add-btn"
    >
      <button onClick={() => removeItemFromCart(menuItem)}>-</button>
      <div>{itemCount}</div>
      <button onClick={() => addItemToCart(menuItem)}>+</button>
    </div>
  );
};

export default AddToCart;
