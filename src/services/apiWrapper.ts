import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

export const getApiWrapper = (
  apiFn: Promise<AxiosResponse>,
  errorMessage?: string
) => {
  return apiFn
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (errorMessage) {
        toast.error(errorMessage, {
          position: "top-center",
        });
      } else {
        const axiosError = error as AxiosError;
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
      throw new Error(error);
    });
};

export const updateApiWrapper = (
  apiFn: Promise<AxiosResponse>,
  successMessage: string,
  errorMessage?: string
) => {
  return apiFn
    .then((response) => {
      toast.success(successMessage, {
        position: "top-center",
      });
      return response;
    })
    .catch((error) => {
      if (errorMessage) {
        toast.error(errorMessage, {
          position: "top-center",
        });
      } else {
        const axiosError = error as AxiosError;
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
      throw new Error(error);
    });
};
