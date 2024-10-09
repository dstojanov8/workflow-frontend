import { createSlice } from "@reduxjs/toolkit";

import {
  loginUserAsync,
  registerUserAsync,
  updateUserAsync,
} from "./accountThunk";
import { AccountState } from "../../types";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState: AccountState = {
  accountInfo: null,
  loading: false,
  userToken,
  error: null,
  success: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    //* Logout can also be in thunk as we might want to end a session
    logoutUser: () => {
      localStorage.removeItem("userToken");
      return initialState;
    },
  },
  //* Implement Async reducer for login
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.accountInfo = payload.user;
        state.userToken = payload.userToken;
      })
      .addCase(loginUserAsync.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.accountInfo = payload.user;
      })
      .addCase(updateUserAsync.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(registerUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUserAsync.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUserAsync.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { logoutUser } = accountSlice.actions;

export default accountSlice.reducer;
