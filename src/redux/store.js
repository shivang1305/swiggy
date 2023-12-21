const { configureStore } = require("@reduxjs/toolkit");
import locationSlice from "./slices/locationSlice";
import restaurantsSlice from "./slices/restaurantsSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurants: restaurantsSlice,
    location: locationSlice,
  },
});

export default store;
