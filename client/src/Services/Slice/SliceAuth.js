/* eslint-disable no-return-assign */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  /*   accessToken: localStorage.getItem("access_token"),
  refreshToken: localStorage.getItem("refresh_token"), */
  /* !!localStorage.getItem("access_token") */
  /*   isAuth: false ,
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
  token_type: null, */
};

const SliceAuth = createSlice({
  name: "SliceAuth",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      const { access_token, refresh_token, isAuth } = action.payload;
      /*      Object.entries(action.payload).map(([key, value]) =>
        localStorage.setItem(key, value)
      ); */
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      state.accessToken = access_token;
      state.refreshToken = refresh_token;
      state.isAuth = isAuth;
    },
    setCurrentUser(state, action) {
      /*     const {
        access_token,
        avatar,
        city,
        email,
        id,
        isAuth,
        name,
        phone,
        refresh_token,
        role,
        sells_from,
        surname,
        token_type,
      } = action.payload; */

      /*  state.currentUser = [
        {
          access_token,
          avatar,
          city,
          email,
          id,
          isAuth,
          name,
          phone,
          refresh_token,
          role,
          sells_from,
          surname,
          token_type,
        },
      ]; */
      /*    Object.entries(action.payload.data).map(
        ([key, value]) => ({...key, [state[key] = `${value}`],})
      ); 
      
 */
      /*  Object.fromEntries( */
      // преобразовать в массив, затем map, затем fromEntries обратно объект
      Object.entries(action.payload.data).map(
        ([key, value]) => (state[key] = `${value}`)
      );
      return state;
      /* return state; */
      /*  ); */
      /*      const chartData = action.payload.data.map(data => ({
        ...data,
        latestMetric: data.latestMetric === null ? dummyLatestMetric : data.latestMetric,
      }); */
      /*      Object.entries(action.payload.data).map(
        ([key, value]) => (state[key] = `${value}`)
      );  */
    },

    logout: (state, action = false) => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      state.accessToken = null;
      state.refreshToken = null;
      state.logoutisAuth = action.payload;
    },
  },
});

export const { setAuthToken, setCurrentUser, logout } = SliceAuth.actions;
export default SliceAuth.reducer;
