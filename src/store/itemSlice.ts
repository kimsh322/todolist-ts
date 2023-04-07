import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

interface TodayList {
  key: string;
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
      let newObj: TodayList = {
        key: uuid(),
        value: action.payload,
        done: false,
      };
      state.push(newObj);
    },
    removeTodayList: (state, action: PayloadAction<number>) => {
      // 새로운 state 값을 만들면 return 해줘야한다.
      return state.filter((el, idx) => {
        if (idx === action.payload) return false;
        return true;
      });
    },
    updateTodayList: (state, action: PayloadAction<TodayList>) => {
      return state.map((el) => {
        if (el.key === action.payload.key) return action.payload;
        else return el;
      });
    },
  },
});

export const { setTodayList, removeTodayList, updateTodayList } = todayListSlice.actions;
