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

export const addInvoice = (invoice: Invoice) => {
  try {
    axios.post(url, invoice);
  } catch (error) {
    console.error(error);
  }
};

export const deleteInvoice = (id: string) => {
  try {
    axios.delete(`${url}/${id}`);
  } catch (error) {
    console.error(error);
  }
};
