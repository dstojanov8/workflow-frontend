import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { AccountInfo, LoginInfo, RegistrationInfo } from "../../types";
import {
  loginAccount,
  registerAccount,
  updateAccount,
} from "../../services/api";

export const registerUserAsync = createAsyncThunk(
  "account/registerUserAsync",
  async (
    { email, username, password, firstname, lastname }: RegistrationInfo,
    { rejectWithValue }
  ) => {
    try {
      await registerAccount({ email, username, password, firstname, lastname });
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response && axiosError.response.data) {
        const errorData = axiosError.response.data as { message: string };
        return rejectWithValue(errorData.message);
      } else {
        return rejectWithValue(axiosError.message);
      }
    }
  }
);

export const loginUserAsync = createAsyncThunk(
  "account/login",
  async ({ usernameOrEmail, password }: LoginInfo, { rejectWithValue }) => {
    try {
      const { data } = await loginAccount({ usernameOrEmail, password });
      localStorage.setItem("userToken", data.userToken);
      return data;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response && axiosError.response.data) {
        const errorData = axiosError.response.data as { message: string };
        return rejectWithValue(errorData.message);
      } else {
        return rejectWithValue(axiosError.message);
      }
    }
  }
);

export const updateUserAsync = createAsyncThunk(
  "account/update",
  async (
    { id, firstname, lastname, username, email }: AccountInfo,
    { rejectWithValue }
  ) => {
    try {
      const response = await updateAccount({
        id,
        firstname,
        lastname,
        username,
        email,
      });
      return response?.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response && axiosError.response.data) {
        const errorData = axiosError.response.data as { message: string };
        return rejectWithValue(errorData.message);
      } else {
        return rejectWithValue(axiosError.message);
      }
    }
  }
);
