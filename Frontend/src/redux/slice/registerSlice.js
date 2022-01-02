// tools
import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: [{ isLogin: false, user: null }],
  reducers: {
    register: (state, { payload }) => {
      return {
        state: (state = payload),
      };
    },
  },
});

// export const { } = registerSlice.actions;

export const selectTodo = (state) => state.todo;

export default registerSlice.reducer;
