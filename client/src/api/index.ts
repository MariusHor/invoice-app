import axios from "axios";
import { Invoice, LoginValues } from "types";

const baseURL = "https://invoice-app-server-ogo2.onrender.com/";

export const axiosPrivate = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const postRegister = async ({ username, password }: LoginValues) => {
  try {
    await axios.post(
      `${baseURL}api/auth/register`,
      JSON.stringify({ username, password }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postLogin = async ({ username, password }: LoginValues) => {
  try {
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
  } catch (error) {
    console.log(error);
    throw error;
  }
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

export const getRefreshToken = async () => {
  try {
    const response = await axios.get(`${baseURL}api/auth/refresh`, {
      withCredentials: true,
    });

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getInvoices = async () => {
  try {
    const response = await axiosPrivate.get(`${baseURL}api/invoices/public`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postInvoice = async (invoice: Invoice) => {
  try {
    await axios.post(`${baseURL}api/invoices/public`, invoice);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteInvoice = async (id: string) => {
  try {
    await axios.delete(`${`${baseURL}api/invoices/public`}/${id}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateInvoice = async (id: string, updatedInvoice: Invoice) => {
  try {
    await axios.patch(
      `${`${baseURL}api/invoices/public`}/${id}`,
      updatedInvoice
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
};
