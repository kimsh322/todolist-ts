import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TodayList {
  value: string[];
}
const initialState: TodayList = { value: [] };

export const todayListSlice = createSlice({
  name: "todaylist",
  initialState,
  reducers: {
    setTodayList: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
  },
});

export const { setTodayList } = todayListSlice.actions;
