import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const selectNameFilter   = (state) => state.filters.name;

const slice = createSlice({
  name: "filters",
  initialState: {
    filters: {
      name: "",
    },
  },
  reducers: {
    changeFilter: (state, action) => {state.name = action.payload},
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;

