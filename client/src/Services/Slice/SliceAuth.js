/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable camelcase */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: localStorage.getItem("access_token"),
  refresh_token: localStorage.getItem("refresh_token"),
  isAuth: false,
  currentUser: null,
  name: null,
  city: null,
  avatar: null,
  email: null,
  id: null,
  phone: null,
  role: null,
  sells_from: null,
  surname: null,
  token_type: null,
};

const SliceAuth = createSlice({
  name: "SliceAuth",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      Object.entries(action.payload).map(([key, value]) =>
        localStorage.setItem(key, value)
      );

      Object.entries(action.payload.data).map(
        ([key, value]) => (state[key] = `${value}`)
      );
    },
    setCurrentUser(state, action) {
      Object.entries(action.payload.data).map(
        ([key, value]) => (state[key] = `${value}`)
      );
    },

    logout: (state = null) => {
      localStorage.clear();
      /* state = null; */
      return state;
    },
  },
});

export const { setAuthToken, setCurrentUser, logout } = SliceAuth.actions;
export default SliceAuth.reducer;
