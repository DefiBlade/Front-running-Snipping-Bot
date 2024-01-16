import { toast } from "react-toastify";
import axios from "axios";

export const API_URL = "http://127.0.0.1:8080";

export const client = axios.create({
  baseURL: API_URL,
  headers: { 
      // "Content-Type": "application/x-www-form-urlencoded",
      "Content-type": "application/json"
  }
});

export const createNotification = (type, message) => {
  toast.configure({
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
  switch (type) {
    case "success":
      toast.success(message);
      return;
    case "warn":
      toast.warn(message);
      return;
    case "error":
      toast.error(message);
      return;
    case "info":
      toast.info(message);
      return;
    default:
      toast(message);
  }
};

export function errorMessage(err) {
  if (!err.response) return err.message;
  if (err.response.data) {
    return err.response.data;
  }
  return err.message;
}
