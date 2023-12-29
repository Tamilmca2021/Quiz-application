/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { cleanNotifications, showNotification } from "@mantine/notifications";

// Create an instance of axios for making API requests with the specified base URL
export const API_URL = axios.create({
  baseURL: "http://192.168.16.201:3000/api/",
});

// Interceptor to modify request configuration before sending
API_URL.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("token");
    config.headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//Interceptor to handle response and error cases
API_URL.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    // Check if response status indicates authentication or authorization issue
    if (error.response.status === 401 || error.response.status === 403) {
      // Clear local storage and clean notifications
      localStorage.clear();
      cleanNotifications();

      // Show session expired notification
      const message =
        "Your current session expired. Login Again to start your new session.";
      showNotification({
        color: "red",
        title: "Session Expired",
        message: message,
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 10);
    }
    return Promise.reject(error);
  }
);

export default API_URL;
