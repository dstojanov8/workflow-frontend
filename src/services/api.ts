import axios from "axios";
import { getApiWrapper, updateApiWrapper } from "./apiWrapper";

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

export const addPerson = () => {
  updateApiWrapper(
    axiosInstance.post("/person", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    "User added"
  );
};
