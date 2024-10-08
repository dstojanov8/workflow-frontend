import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AccountInfo } from "./accountSlice";

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

const token = localStorage.getItem("userToken");

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

export const updateUserAsync = createAsyncThunk(
  "account/update",
  async (
    { id, firstname, lastname, username, email }: AccountInfo,
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Replace with your actual token
        },
        withCredentials: true,
      };
      const { data } = await axios.put(
        `${backendURL}/user/${id}`,
        { firstname, lastname, username, email },
        config
      );
      console.log(data);
      return data;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log("axiosError", axiosError);
      // return custom error message from API if any
      if (axiosError.response && axiosError.response.data) {
        alert(axiosError.response.data.message);
        return rejectWithValue(axiosError.response.data);
      } else {
        return rejectWithValue(axiosError.message);
      }
    }
  }
);
