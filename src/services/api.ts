import axios from "axios";
import { getApiWrapper, updateApiWrapper } from "./apiWrapper";
import {
  AccountInfo,
  AddPersonInfo,
  LoginInfo,
  RegistrationInfo,
} from "../types";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000", // Set the base URL for all requests
  withCredentials: true, // Send cookies with requests
  headers: {
    "Content-Type": "application/json",
  },
});

const token = localStorage.getItem("userToken");

export const getAllPeople = () =>
  getApiWrapper(
    axiosInstance.get("/person", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );

export const getPerson = (id?: string) =>
  getApiWrapper(
    axiosInstance.get(`/person/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    "User not fount"
  );

export const addPerson = (person: AddPersonInfo) =>
  updateApiWrapper(
    axiosInstance.post("/person", person, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    "User added"
  );

export const updatePerson = (person: AddPersonInfo, id?: string) =>
  updateApiWrapper(
    axiosInstance.put(`/person/${id}`, person, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    "User updated"
  );

export const deletePerson = (id: number) =>
  updateApiWrapper(
    axiosInstance.delete(`/person/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    "User deleted"
  );

export const registerAccount = (registrationInfo: RegistrationInfo) =>
  updateApiWrapper(
    axiosInstance.post("/user/register", registrationInfo),
    "Registration successful"
  );

export const loginAccount = (loginInfo: LoginInfo) =>
  updateApiWrapper(
    axiosInstance.post("/user/login", loginInfo),
    "Login successful"
  );

export const updateAccount = (person: AccountInfo) =>
  updateApiWrapper(
    axiosInstance.put(`/user/${person.id}`, person, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    "Account update successful"
  );
