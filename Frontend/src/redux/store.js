import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slice/homeSlice";
export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
