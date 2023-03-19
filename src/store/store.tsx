import { configureStore } from "@reduxjs/toolkit";
import { todayListSlice } from "./itemSlice";
// ...

export const store = configureStore({
  reducer: {
    todayList: todayListSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
