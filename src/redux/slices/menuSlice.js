import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menuItems: null,
  },
  reducers: {
    fillMenuItems: (state, action) => {
      state.menuItems = action.payload;
    },
  },
});

export const { fillMenuItems } = menuSlice.actions;
export default menuSlice.reducer;
