import axios from "axios";
import { Invoice, LoginValues } from "types";

// const baseURL = "https://invoice-app-server-ogo2.onrender.com/";

const baseURL = "http://localhost:4500/";

export const axiosPrivate = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const postRegister = async ({ username, password }: LoginValues) => {
  await axios.post(
    `${baseURL}api/auth/register`,
    JSON.stringify({ username, password }),
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }
  );
};

export const postLogin = async ({ username, password }: LoginValues) => {
  const response = await axios.post(
    `${baseURL}api/auth/login`,
    JSON.stringify({ username, password }),
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }
  );

  const accessToken = response?.data?.accessToken;
  return { accessToken };
};

export const getSignout = async () => {
  try {
    await axios.get(`${baseURL}api/auth/signout`, {
      withCredentials: true,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getRefreshToken = async () =>
  await axios.get(`${baseURL}api/auth/refresh`, {
    withCredentials: true,
  });

export const getInvoices = async () => {
  const response = await axiosPrivate.get(`${baseURL}api/invoices/public`);
  return response.data;
};

export const postInvoice = async (invoice: Invoice) => {
  await axios.post(`${baseURL}api/invoices/public`, invoice);
};

export const deleteInvoice = async (id: string) => {
  await axios.delete(`${`${baseURL}api/invoices/public`}/${id}`);
};

export const updateInvoice = async (id: string, updatedInvoice: Invoice) => {
  await axios.patch(`${`${baseURL}api/invoices/public`}/${id}`, updatedInvoice);
};
