// tools
import { createSlice } from "@reduxjs/toolkit";


const registerSlice = createSlice({
  name: "register",
  initialState: [{ isLogin: false, user: null }],
  reducers: {},
});

export const {} = registerSlice.actions;


export const selectTodo = (state) => state.todo;

export default registerSlice.reducer;
