import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AllPosts } from "../Services/ApiPost";
import { apiUser } from "../Services/ApiUser";
import SliceAuth from "../Services/Slice/SliceAuth";
/*
import postsSlice from "./Slice/Slice";
import UserDataSlice from "./Slice/UserSlice"; */

export const store = configureStore({
  reducer: {
    [AllPosts.reducerPath]: AllPosts.reducer,
    [apiUser.reducerPath]: apiUser.reducer,
    SliceAuth,
    /*     handleTrackState: postsSlice,
    userDataState: UserDataSlice, */
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AllPosts.middleware, apiUser.middleware),
});

setupListeners(store.dispatch);
