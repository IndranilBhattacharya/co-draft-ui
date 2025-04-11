import { createAsyncThunk } from "@reduxjs/toolkit";

import UserDetail from "../../interfaces/UserDetail";
import { authService } from "../../services/authService";

export const checkVerificationStatus = createAsyncThunk(
  "auth/checkVerificationStatus",
  async (_, { rejectWithValue }) => {
    try {
      const data = await authService.verifyDevice();
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user: UserDetail, { rejectWithValue }) => {
    try {
      const { data } = await authService.register(user);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
