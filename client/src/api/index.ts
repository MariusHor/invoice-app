import axios from "axios";
import { InvoiceResult } from "types";

const url = "http://localhost:8000/invoices";

export const fetchInvoices = async () => {
  const response = await axios.get("/data.json");
  return response.data;
};

export const addInvoice = (invoice: InvoiceResult) => axios.post(url, invoice);
