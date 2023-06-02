import axios from "axios";
import { Invoice } from "types";

interface postAuthProps {
  username: string;
  password: string;
}

// const url = "https://invoice-app-server-ogo2.onrender.com/invoices";
const baseUrl = "http://localhost:3000/";

export const postRegister = async ({ username, password }: postAuthProps) => {
  try {
    console.log(username, password);
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

export const fetchInvoices = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/invoices/public`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchInvoice = async (id: string) => {
  try {
    const response = await axios.get(
      `${`${baseUrl}api/invoices/public`}/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const addInvoice = async (invoice: Invoice) => {
  try {
    await axios.post(`${baseUrl}api/invoices/public`, invoice);
  } catch (error) {
    console.error(error);
  }
};

export const deleteInvoice = async (id: string) => {
  try {
    await axios.delete(`${`${baseUrl}api/invoices/public`}/${id}`);
  } catch (error) {
    console.error(error);
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
  }
};
