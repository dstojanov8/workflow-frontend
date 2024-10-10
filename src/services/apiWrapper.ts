import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

export const getApiWrapper = async (
  apiFn: Promise<AxiosResponse>,
  errorMessage?: string
) => {
  try {
    const response = await apiFn;
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    handleError(axiosError, errorMessage);
    //* We can throw error here for some error state in component
    //TODO Test all situations
    throw new Error(axiosError.message || String(error));
  }
};

export const updateApiWrapper = async (
  apiFn: Promise<AxiosResponse>,
  successMessage: string,
  errorMessage?: string
) => {
  try {
    const response = await apiFn;
    toast.success(successMessage, { position: "top-center" });
    return response;
  } catch (error) {
    const axiosError = error as AxiosError;
    handleError(axiosError, errorMessage);
    //* We can throw error here for some error state in component
    //TODO Test all situations
    throw new Error(axiosError.message || String(error));
  }
};

const handleError = (axiosError: AxiosError, errorMessage?: string) => {
  if (errorMessage) {
    toast.error(errorMessage, { position: "top-center" });
  } else {
    if (axiosError.response && axiosError.response.data) {
      const errorData = axiosError.response.data as { message: string };
      toast.error(errorData.message || "An error occurred", {
        position: "top-center",
      });
    } else {
      toast.error(axiosError.message || "An error occurred", {
        position: "top-center",
      });
    }
  }
};
