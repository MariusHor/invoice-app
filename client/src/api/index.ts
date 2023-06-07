import axios from "axios";
import { Invoice, LoginValues } from "types";

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

export const postRegister = async ({ username, password }: LoginValues) => {
  await axiosPublic.post(
    "/auth/register",
    JSON.stringify({ username, password }),
    {
      withCredentials: true,
    }
  );
};

export const postLogin = async ({ username, password }: LoginValues) => {
  const response = await axiosPublic.post(
    "/auth/login",
    JSON.stringify({ username, password }),
    {
      withCredentials: true,
    }
  );

  const accessToken = response?.data?.accessToken;
  return { accessToken };
};

export const getSignout = async () =>
  await axiosPublic.get("/auth/signout", {
    withCredentials: true,
  });

export const getRefreshToken = async () =>
  await axiosPublic.get("/auth/refresh", {
    withCredentials: true,
  });

export const getInvoices = async () => {
  const response = await axiosPrivate.get("/user/invoices");
  return response.data;
};

export const postInvoice = async (invoice: Invoice) => {
  await axiosPrivate.post("/user/invoices", invoice);
};

export const deleteInvoice = async (id: string) => {
  await axiosPrivate.delete(`/user/invoices/${id}`);
};

export const updateInvoice = async (id: string, updatedInvoice: Invoice) => {
  await axiosPrivate.patch(`/user/invoices/${id}`, updatedInvoice);
};
