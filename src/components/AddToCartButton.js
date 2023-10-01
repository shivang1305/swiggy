import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import ClearCartDialog from "./ClearCartDialog";

const AddToCartButton = ({ menuItem, restaurantName }) => {
  // adding the restaurant name field into the menu item obj
  menuItem.restaurantName = restaurantName;

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // to get the initial count of each item if it is already added into the cart
  const getInitialItemValue = () => {
    let intitialCount = 0;
    cartItems.map((cartItem) => {
      if (JSON.stringify(cartItem) === JSON.stringify(menuItem))
        intitialCount++;
    });

    return intitialCount;
  };

  // to verify that the current menu item is from same restaurant as other items in the cart
  const isRestaurantSame = () => {
    // if cart is empty ---> directly add the item to cart
    // if cart is not empty but the restaurant is same --> directly add to the cart
    if (
      cartItems.length == 0 ||
      (cartItems.length > 0 && cartItems[0].restaurantName === restaurantName)
    ) {
      return true;
    }
    return false;
  };

  const [itemCount, setItemCount] = useState(getInitialItemValue());
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const addItemToCart = (item) => {
    if (!isRestaurantSame()) {
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
