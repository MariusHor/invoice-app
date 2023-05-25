import axios from "axios";
import { FormValues } from "types";

const url = "http://localhost:3000/invoices";

export const fetchInvoices = async () => {
  const response = await axios.get(url);
  return response.data;
};

export const addInvoice = (invoice: FormValues) => axios.post(url, invoice);
