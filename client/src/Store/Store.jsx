import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AllPosts } from "../Services/ApiPost";
/*
import postsSlice from "./Slice/Slice";
import UserDataSlice from "./Slice/UserSlice"; */

export const store = configureStore({
  reducer: {
    [AllPosts.reducerPath]: AllPosts.reducer,
    /*     handleTrackState: postsSlice,
    userDataState: UserDataSlice, */
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AllPosts.middleware),
});

setupListeners(store.dispatch);
