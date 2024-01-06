import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ALLPOSTS } from "../Services/ApiPost";
/*
import postsSlice from "./Slice/Slice";
import UserDataSlice from "./Slice/UserSlice"; */

export const store = configureStore({
  reducer: {
    [ALLPOSTS.reducerPath]: ALLPOSTS.reducer,
    /*     handleTrackState: postsSlice,
    userDataState: UserDataSlice, */
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ALLPOSTS.middleware),
});

setupListeners(store.dispatch);
