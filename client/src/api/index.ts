import axios from "axios";
import { Invoice, LoginValues } from "types";

const baseUrl = "https://invoice-app-server-ogo2.onrender.com/";

export const postRegister = async ({ username, password }: LoginValues) => {
  try {
    await axios.post(
      `${baseUrl}api/auth/register`,
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
      `${baseUrl}api/auth/login`,
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

export const getRefreshToken = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/auth/refresh`, {
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
    const response = await axios.get(`${baseUrl}api/invoices/public`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postInvoice = async (invoice: Invoice) => {
  try {
    await axios.post(`${baseUrl}api/invoices/public`, invoice);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteInvoice = async (id: string) => {
  try {
    await axios.delete(`${`${baseUrl}api/invoices/public`}/${id}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateInvoice = async (id: string, updatedInvoice: Invoice) => {
  try {
    await axios.patch(
      `${`${baseUrl}api/invoices/public`}/${id}`,
      updatedInvoice
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
};
