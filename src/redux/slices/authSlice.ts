import { createSlice } from "@reduxjs/toolkit";

import AuthState from "../../interfaces/AuthState";
import { checkVerificationStatus } from "../thunks/authThunks";

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
  extraReducers: (builder) => {
    builder.addCase(checkVerificationStatus.fulfilled, (state, action) => {
      state.isVerified = true;
      state.userDetails = action.payload;
    });
  },
});

export const { verifySuccess, logout } = authSlice.actions;
export default authSlice.reducer;
