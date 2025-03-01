import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../redux/slices/authSlice";
import documentReducer from "../redux/slices/documentSlice";

const appStore = configureStore({
  reducer: { auth: authReducer, document: documentReducer },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export default appStore;
