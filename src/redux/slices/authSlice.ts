import { createSlice } from "@reduxjs/toolkit";

import AuthState from "../../interfaces/AuthState";

const initialState: AuthState = {
  isVerified: false,
  userDetails: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    verifySuccess: (state, action) => {
      state.isVerified = true;
      state.userDetails = action.payload;
    },
    logout: (state) => {
      state.isVerified = false;
      state.userDetails = null;
    },
  },
});

export const { verifySuccess, logout } = authSlice.actions;
export default authSlice.reducer;
