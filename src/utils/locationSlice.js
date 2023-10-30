import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    isMenuOpen: false,
    location: "Gurugram, Haryana, India",
  },
  reducers: {
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { openMenu, closeMenu, setLocation } = locationSlice.actions;
export default locationSlice.reducer;
