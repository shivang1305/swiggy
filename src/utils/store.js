const { configureStore } = require("@reduxjs/toolkit");
import cartSlice from "./cartSlice";
import locationSlice from "./locationSlice";
import restaurantsSlice from "./restaurantsSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurants: restaurantsSlice,
    location: locationSlice,
  },
});

export default store;
