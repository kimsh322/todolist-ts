import { createSlice } from "@reduxjs/toolkit";

export const isSignInSlice = createSlice({
  name: "isSignin",
  initialState: false,
  reducers: {
    changeToSignIn: () => {
      return true;
    },
  },
});

export const { changeToSignIn } = isSignInSlice.actions;
