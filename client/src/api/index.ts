import axios from "axios";
import { Invoice } from "types";

const url = "http://localhost:3000/invoices";

export const fetchInvoices = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchInvoice = async (id: string) => {
  try {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const addInvoice = async (invoice: Invoice) => {
  try {
    await axios.post(url, invoice);
  } catch (error) {
    console.error(error);
  }
};

export const deleteInvoice = async (id: string) => {
  try {
    await axios.delete(`${url}/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export const updateInvoice = async (id: string, updatedInvoice: Invoice) => {
  try {
    await axios.patch(`${url}/${id}`, updatedInvoice);
  } catch (error) {
    console.error(error);
  }
};
