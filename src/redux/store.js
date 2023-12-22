const { configureStore } = require("@reduxjs/toolkit");
import locationSlice from "./slices/locationSlice";
import restaurantsSlice from "./slices/restaurantsSlice";
import cartSlice from "./slices/cartSlice";
import restaurantMenuSlice from "./slices/restaurantMenuSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurants: restaurantsSlice,
    restaurantMenu: restaurantMenuSlice,
    location: locationSlice,
  },
});

export default store;
