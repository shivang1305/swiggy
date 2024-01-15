import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menuItems: [],
    backupItems: [],
  },
  reducers: {
    fillMenuItems: (state, action) => {
      state.menuItems = action.payload;
    },
    fillBackupItems: (state, action) => {
      state.backupItems = action.payload;
    },
    backupItems: (state) => {
      state.menuItems = state.backupItems;
    },
  },
});

export const { fillMenuItems, fillBackupItems, backupItems } =
  menuSlice.actions;
export default menuSlice.reducer;
