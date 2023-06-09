import axios from "axios";

// const baseURL = "https://invoice-app-server-ogo2.onrender.com/";
const baseURL = "http://localhost:4500/";

export const axiosPublic = axios.create({
  baseURL: `${baseURL}api/public`,
  headers: { "Content-Type": "application/json" },
});

export const axiosPrivate = axios.create({
  baseURL: `${baseURL}api/private`,
  withCredentials: true,
});
