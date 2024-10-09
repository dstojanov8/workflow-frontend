import { toast } from "react-toastify";
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
      toast.success("Registration successful", {
        position: "top-center",
      });
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log("axiosError", axiosError);
      // return custom error message from API if any
      if (axiosError.response && axiosError.response.data) {
        const errorData = axiosError.response.data as { message: string };
        toast.error(errorData.message || "An error occurred", {
          position: "top-center",
        });
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
      toast.success("Login successful", {
        position: "top-center",
      });
      return data;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log("axiosError", axiosError);
      // return custom error message from API if any
      if (axiosError.response && axiosError.response.data) {
        const errorData = axiosError.response.data as { message: string };
        toast.error(errorData.message || "An error occurred", {
          position: "top-center",
        });
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
      toast.success("User updated", {
        position: "top-center",
      });
      return data;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log("axiosError", axiosError);
      // return custom error message from API if any
      if (axiosError.response && axiosError.response.data) {
        const errorData = axiosError.response.data as { message: string };
        toast.error(errorData.message || "An error occurred", {
          position: "top-center",
        });
        return rejectWithValue(errorData.message);
      } else {
        return rejectWithValue(axiosError.message);
      }
    }
  }
);
