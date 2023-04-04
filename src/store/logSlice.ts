import { createSlice } from "@reduxjs/toolkit";
// 로그인 했는지
export const isSignInSlice = createSlice({
  name: "isSignin",
  initialState: false,
  reducers: {
    changeToSignIn: () => {
      return true;
    },
    changeToSignOut: () => {
      return false;
    },
  },
});

export const { changeToSignIn, changeToSignOut } = isSignInSlice.actions;

// 로그인정보
export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {},
  reducers: {
    setUserInfo: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;
