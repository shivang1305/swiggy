import { createSlice } from "@reduxjs/toolkit";

const restaurantMenuSlice = createSlice({
  name: "restaurantMenu",
  initialState: {
    menu: null,
  },
  reducers: {
    addMenuData: (state, action) => {
      state.menu = action.payload;
    },
  },
});

export const { addMenuData } = restaurantMenuSlice.actions;
export default restaurantMenuSlice.reducer;
