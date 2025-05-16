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

// to calculate the total price of all the items user has placed in the cart
export const calcTotalAmount = (cartItems) => {
  let sum = 0;
  cartItems.map((item) => {
    sum += (item.card.info.price / 100) * item.quantity;
  });
  return sum.toFixed(2);
};

// to get the current location of the user
export let getLocationPromise = new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;

      resolve({ latitude: lat, longitude: long });
    });
  } else {
    reject("your browser doesn't support geolocation API");
  }
});

// to update the location details of the user in the local storage
export const updateLocalStorageLocation = ({ name, lat, lng }) => {
  localStorage.clear();
  localStorage.setItem("location_name", name);
  localStorage.setItem("location_lat", lat);
  localStorage.setItem("location_lng", lng);
};

// to get the location details from the local storage and set it in the redux store
export const getLocationDetails = () => {
  const locationDetails = {
    name: localStorage.getItem("location_name") || "Gurugram, Haryana, India",
    lat: localStorage.getItem("location_lat") || 28.4594965,
    lng: localStorage.getItem("location_lng") || 77.0266383,
  };
  return locationDetails;
};

// to filter the data coming from the location API (Indian location only)
export const filterLocationAPIData = (locations) => {
  locations = locations.filter(
    (location) => location?.address?.country === "India"
  );

  return locations;
};

// to get all the categories from the backend API
export const getAllCategories = (categoriesArray) => {
  return categoriesArray.filter(
    (category) =>
      category?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
};

// to get all the veg menu items from a restaurant
export const getVegMenuItems = (menuArray) => {
  const vegMenuItems = menuArray.filter(
    (menuItem) => menuItem.card.info.isVeg === 1
  );
  return vegMenuItems;
};

// to get the discount heading on restaurant card
export const getDiscountHeading = (aggregatedDiscountInfoV3) => {
  const { header, subHeader } = aggregatedDiscountInfoV3;
  let discountHeading;

  if (subHeader) discountHeading = `${header} ${subHeader}`;
  else discountHeading = header;

  return discountHeading;
};

// to get the trucated firstname only to show in header
export const getUserName = (name) => {
  if (!name) return;
  let firstname = name.split(" ")[0];

  if (firstname.length > 8) firstname = firstname.slice(0, 7);

  return firstname;
};
