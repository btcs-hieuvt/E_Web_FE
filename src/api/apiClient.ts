import axios from "axios";

export const baseUrlApi = "http://localhost:5000";

const apiBase = axios.create({
  baseURL: `${baseUrlApi}/api/v1/`,
  headers: {
    "Content-Type": "application/json",
  },
});


export default apiBase;
