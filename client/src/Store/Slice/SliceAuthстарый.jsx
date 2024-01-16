/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: localStorage.getItem("access_token"),
  refreshToken: localStorage.getItem("refresh_token"),
  isAuth: !!localStorage.getItem("access_token"),
  currentUser: null,
};

export const postsSlice = createSlice({
  name: "setAuth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.accessToken = action.payload;
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const { setToken, setCurrentUser } = postsSlice.actions;
export default postsSlice.reducer;
