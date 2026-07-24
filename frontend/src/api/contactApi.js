import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendContactMessage = async (data) => {
  const response = await API.post("/contact", data);
  return response.data;
};