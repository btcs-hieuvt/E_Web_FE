import axios from "axios";

export const baseUrlApi = process.env.NEXT_PUBLIC_API_URL;

const apiBase = axios.create({
  baseURL: `${baseUrlApi}/api/v1/`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiBase;
