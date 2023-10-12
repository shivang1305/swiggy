export const toggleFilter = (isFilterClicked, setIsFilterClicked) => {
  if (isFilterClicked) setIsFilterClicked(false);
  else setIsFilterClicked(true);
};

export const getNumberOfCartItems = (cartItems) => {
  let numberOfItems = 0;

  cartItems.map((cartItem) => {
    numberOfItems += cartItem.quantity;
  });

  return numberOfItems;
};

// to get the initial count of each item if it is already added into the cart
export const getInitialItemValue = (cartItems, menuItem) => {
  let intitialCount = 0;
  cartItems.map((cartItem) => {
    if (cartItem?.card?.info?.id === menuItem?.card?.info?.id)
      intitialCount = cartItem.quantity;
  });

  return intitialCount;
};

// to verify that the current menu item is from same restaurant as other items in the cart
export const isRestaurantSame = (cartItems, menuItem) => {
  // if cart is empty ---> directly add the item to cart
  // if cart is not empty but the restaurant is same --> directly add to the cart
  if (
    cartItems.length == 0 ||
    (cartItems.length > 0 && cartItems[0].restaurant === menuItem.restaurant)
  ) {
    return true;
  }
  return false;
};

export const calcTotalAmount = (cartItems) => {
  let sum = 0;
  cartItems.map((item) => {
    sum += (item.card.info.price / 100) * item.quantity;
  });
  return sum;
};
