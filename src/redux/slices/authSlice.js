import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    isSidebarOpen: false,
    user: null,
  },
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { openSidebar, closeSidebar, setUser } = authSlice.actions;
export default authSlice.reducer;
