import { /*createAsyncThunk,*/ createSlice } from "@reduxjs/toolkit";
import { loginUserAsync, registerUserAsync } from "./accountThunk";

interface AccountInfo {
  id: number;
  email: string;
  username: string;
  firstname: string;
  lastname: string;
}

interface AccountState {
  accountInfo: AccountInfo | null;
  loading: boolean;
  userToken: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  success: boolean;
}

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
