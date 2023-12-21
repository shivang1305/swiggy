import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurantItems: [],
    backupItems: [],
    carouselItems: [],
  },
  reducers: {
    fillAllRestaurants: (state, action) => {
      state.restaurantItems = action.payload;
    },
    fillBackupRestaurants: (state, action) => {
      state.backupItems = action.payload;
    },
    backupRestaurants: (state) => {
      state.restaurantItems = state.backupItems;
    },
    putCarouselItems: (state, action) => {
      state.carouselItems = action.payload;
    },
  },
});

export const {
  fillAllRestaurants,
  fillBackupRestaurants,
  backupRestaurants,
  putCarouselItems,
} = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
