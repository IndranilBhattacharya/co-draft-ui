import { createAsyncThunk } from "@reduxjs/toolkit";

export const authThunks = createAsyncThunk(
  "auth/checkVerificationStatus",
  async (_, { rejectWithValue }) => {
    try {
      // const response = await authService.checkAuth()
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
