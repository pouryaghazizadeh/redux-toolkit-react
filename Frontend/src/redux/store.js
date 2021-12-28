import { configureStore } from "@reduxjs/toolkit";
// get reducer from slice folder
import homeReducer from "./slice/homeSlice";
import todoReducer from "./slice/todoSlice"
import registerSlice from "./slice/registerSlice";



// store
export const store = configureStore({
  reducer: {
    home: homeReducer,
    todo: todoReducer,
    register: registerSlice,
  },
});
