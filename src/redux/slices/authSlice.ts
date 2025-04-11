import { createSlice } from "@reduxjs/toolkit";

import AuthState from "../../interfaces/AuthState";
import { checkVerificationStatus } from "../thunks/authThunks";

const initialState: AuthState = {
  isVerified: false,
  userDetails: {
    avatar: "",
    userName: "",
    visitorId: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAvatar: (state, action) => {
      if (state.userDetails) state.userDetails.avatar = action.payload;
    },
    confirmVerification: (state, action) => {
      state.isVerified = true;
      state.userDetails = action.payload;
    },
    logout: (state) => {
      state.isVerified = false;
      state.userDetails = initialState.userDetails;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkVerificationStatus.fulfilled, (state, action) => {
      state.isVerified = true;
      state.userDetails = action.payload;
    });
    builder.addCase(checkVerificationStatus.rejected, (state) => {
      state.isVerified = false;
      state.userDetails = initialState.userDetails;
    });
  },
});

export const { setAvatar, confirmVerification, logout } = authSlice.actions;
export default authSlice.reducer;
