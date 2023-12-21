import { createSlice } from "@reduxjs/toolkit";
import {
  getLocationDetails,
  updateLocalStorageLocation,
} from "../../utils/helperFunctions";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    isMenuOpen: false,
    location: getLocationDetails(),
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
      updateLocalStorageLocation(state.location);
    },
  },
});

export const { openMenu, closeMenu, setLocation } = locationSlice.actions;
export default locationSlice.reducer;
