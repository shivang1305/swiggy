import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    isMenuOpen: false,
    location: {
      name: localStorage.getItem("location_name"),
      lat: localStorage.getItem("location_lat"),
      lng: localStorage.getItem("location_lng"),
    },
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

      localStorage.clear();
      localStorage.setItem("location_name", state.location.name);
      localStorage.setItem("location_lat", state.location.lat);
      localStorage.setItem("location_lng", state.location.lng);
    },
  },
});

export const { openMenu, closeMenu, setLocation } = locationSlice.actions;
export default locationSlice.reducer;
