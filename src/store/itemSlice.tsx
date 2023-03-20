import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TodayList {
  value: string;
  done: boolean;
}
type TodayListArr = TodayList[];
const initialState: TodayListArr = [];

export const todayListSlice = createSlice({
  name: "todaylist",
  initialState,
  reducers: {
    setTodayList: (state, action: PayloadAction<string>) => {
      let newObj: TodayList = { value: action.payload, done: false };
      state.push(newObj);
    },
  },
});

export const { setTodayList } = todayListSlice.actions;
