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
    removeTodayList: (state, action: PayloadAction<number>) => {
      // 새로운 state 값을 만들면 return 해줘야한다.
      return state.filter((el, idx) => {
        if (idx === action.payload) return false;
        return true;
      });
    },
  },
});

export const { setTodayList, removeTodayList } = todayListSlice.actions;
