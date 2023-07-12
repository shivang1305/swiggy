import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // addItem is the name of the action which is in turn assigned to a reducer function
    // addItem will trigger this reducer function

    // state is same as initialState
    // action.payload is the data that we are getting from the component
    addItemToCart: (state, action) => {
      // logic of modifying the state
      state.items.push(action.payload);
    },
    removeItemFromCart: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// this is how we need to export actions and reducer explicitally
export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
