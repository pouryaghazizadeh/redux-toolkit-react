// tools
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add(state, { payload }) {
      state.push(payload);
    },
    del(state, { payload }) {
      state = state.filter(({ id }) => id !== payload);

      // !== payload.id
    },
  },
});

export const { add, del } = todoSlice.actions;

// select todo
export const selectTodo = (state) => state.todo;
// or  use this short key
// export const selectTodo = ({ todo }) => todo;
export default todoSlice.reducer;
