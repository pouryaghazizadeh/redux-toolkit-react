// tools
import { createSlice } from "@reduxjs/toolkit";

// note
// add reducer add a new task
// del delete a task
// upd  update a task
const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add(state, { payload }) {
      state.push(payload);
    },
    del(state, { payload }) {
      return (state = state.filter(({ id }) => id !== payload));
    },
    upd(state, { payload }) {
      state = state.map((state) => {
        if (state.id === payload.id) {
          return {
            ...state,
            text: (state.text = payload.text),
          };
        }
      });
    },
    delAll(state, action) {
      state = state=[]
    },
  },
});

export const { add, del, upd, delAll } = todoSlice.actions;

// select todo
export const selectTodo = (state) => state.todo;
// or  use this short key
// export const selectTodo = ({ todo }) => todo;
export default todoSlice.reducer;
