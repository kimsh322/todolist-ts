import { configureStore } from "@reduxjs/toolkit";
import { todayListSlice } from "./itemSlice";
import { isSignInSlice } from "./logSlice";

export const store = configureStore({
  reducer: {
    todayList: todayListSlice.reducer,
    isSignIn: isSignInSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
