// tools
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// fetch datahome 
export const getDataHome = createAsyncThunk("home/getDataHome", async () => {
  try {
    const { data } = await axios.get("http://localhost:6600/");
    return data;
  } catch (err) {
    console.log(err);
  }
});
// home slice
const homeSlices = createSlice({
  name: "home",
  initialState: {
    data: [],
    status: null,
  },
  extraReducers: {
    [getDataHome.pending]: (state, action) => {
      state.status = "loading";
    },
    [getDataHome.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    [getDataHome.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default homeSlices.reducer;
