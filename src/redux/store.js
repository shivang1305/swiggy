const { configureStore } = require("@reduxjs/toolkit");
import locationSlice from "./slices/locationSlice";
import restaurantsSlice from "./slices/restaurantsSlice";
import cartSlice from "./slices/cartSlice";
import menuSlice from "./slices/menuSlice";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurants: restaurantsSlice,
    menu: menuSlice,
    location: locationSlice,
    authentication: authSlice,
  },
});

export default store;
