/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: localStorage.getItem("access_token"),
  refreshToken: localStorage.getItem("refresh_token"),
  isAuth: !!localStorage.getItem("access_token"),
};

export const postsSlice = createSlice({
  name: "setAuth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.accessToken = action.payload;
    },
  },
});

export const { setToken } = postsSlice.actions;
export default postsSlice.reducer;
