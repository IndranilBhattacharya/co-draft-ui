import { createAsyncThunk } from "@reduxjs/toolkit";

import { authService } from "../../services/authService";

export const checkVerificationStatus = createAsyncThunk(
  "auth/checkVerificationStatus",
  async (_, { rejectWithValue }) => {
    try {
      const response = await authService.checkAuth();
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
