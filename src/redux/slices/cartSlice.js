import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      let flag = false;

      state.items.map((item) => {
        if (item?.card?.info?.id == action?.payload?.card?.info?.id) {
          item.quantity++;
          flag = true;
        }
      });

      if (!flag) {
        action.payload.quantity = 1;
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items.map((item, index) => {
        if (item?.card?.info?.id === action?.payload?.card?.info?.id) {
          if (item.quantity > 1) item.quantity--;
          else if (item.quantity == 1) state.items.splice(index, 1);
        }
      });
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
