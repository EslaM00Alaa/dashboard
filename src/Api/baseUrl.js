import axios from 'axios';

const baseURL = axios.create({
  baseURL: "https://readx.up.railway.app",
  withCredentials: true, // Ensure credentials are included in requests
  headers: {
    "Content-Type": "application/json",
  },
});
export default baseURL;
