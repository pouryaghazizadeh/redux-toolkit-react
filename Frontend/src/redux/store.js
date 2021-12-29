import { configureStore } from "@reduxjs/toolkit";
// get reducer from slice folder
import homeReducer from "./slice/homeSlice";
import registerSlice from "./slice/registerSlice";
import todoReducer from "./slice/todoSlice";

// store
export const store = configureStore({
  reducer: {
    home: homeReducer,
    todo: todoReducer,
    register: registerSlice,
  },
});
