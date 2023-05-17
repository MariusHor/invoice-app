import { useQuery } from "@tanstack/react-query";
import fetchInvoices from "api/fetchInvoices";

export const invoicesQuery = () => ({
  queryKey: ["invoices"],
  queryFn: fetchInvoices,
});

export const useInvoices = () => useQuery(invoicesQuery());
