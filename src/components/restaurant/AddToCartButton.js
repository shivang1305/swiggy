import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/slices/cartSlice";
import ClearCartDialog from "./ClearCartDialog";
import {
  getInitialItemValue,
  isRestaurantSame,
} from "../../utils/helperFunctions";

const AddToCartButton = ({ menuItem }) => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const [itemCount, setItemCount] = useState(
    getInitialItemValue(cartItems, menuItem)
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const addItemToCart = (item) => {
    if (!isRestaurantSame(cartItems, menuItem)) {
      setIsDialogOpen(true);
    } else {
      setItemCount(itemCount + 1);
      dispatch(addItem(item));
    }
  };

  const removeItemFromCart = (item) => {
    setItemCount(itemCount - 1);
    dispatch(removeItem(item));
  };

  return itemCount === 0 ? (
    <>
      <button
        className="bg-yellow-500 text-white text-base font-bold px-2 py-4 rounded cursor-pointer border-none hover:bg-yellow-600"
        onClick={() => addItemToCart(menuItem)}
        data-testid="add-btn"
      >
        Add to Cart
      </button>
      <ClearCartDialog
        isOpen={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false);
        }}
        setItemCount={setItemCount}
        menuItem={menuItem}
      />
    </>
  ) : (
    <div
      className="bg-yellow-500 w-28 justify-between flex text-white text-base font-bold px-2 py-4 rounded cursor-pointer border-none hover:bg-yellow-600"
      data-testid="add-btn"
    >
      <button onClick={() => removeItemFromCart(menuItem)}>-</button>
      <div>{itemCount}</div>
      <button onClick={() => addItemToCart(menuItem)}>+</button>
      <ClearCartDialog
        isOpen={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false);
        }}
        setItemCount={setItemCount}
        menuItem={menuItem}
      />
    </div>
  );
};

export default AddToCartButton;
