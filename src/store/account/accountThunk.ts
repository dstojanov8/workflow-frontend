import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = "http://127.0.0.1:8000";

interface RegistrationInfo {
  email: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
}

interface LoginInfo {
  usernameOrEmail: string;
  password: string;
}

export const registerUserAsync = createAsyncThunk(
  "account/registerUserAsync",
  async (
    { email, username, password, firstname, lastname }: RegistrationInfo,
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `${backendURL}/user/register`,
        { email, username, password, firstname, lastname },
        config
      );
    } catch (error) {
      const axiosError = error as AxiosError;
      // return custom error message from backend if present
      if (axiosError.response && axiosError.response.data) {
        return rejectWithValue(axiosError.response.data);
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
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
      const { data } = await axios.post(
        `${backendURL}/user/login`,
        { usernameOrEmail, password },
        config
      );
      localStorage.setItem("userToken", data.userToken);
      return data;
    } catch (error) {
      const axiosError = error as AxiosError;
      // return custom error message from API if any
      if (axiosError.response && axiosError.response.data) {
        return rejectWithValue(axiosError.response.data);
      } else {
        return rejectWithValue(axiosError.message);
      }
    }
  }
);
