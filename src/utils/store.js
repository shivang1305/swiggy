const { configureStore } = require("@reduxjs/toolkit");
import cartSlice from "./cartSlice";
import restaurantsSlice from "./restaurantsSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurants: restaurantsSlice,
  },
});

export default store;
