import { useQuery } from "@tanstack/react-query";
import { fetchInvoices } from "api";

export const invoicesQuery = () => ({
  queryKey: ["invoices"],
  queryFn: fetchInvoices,
});

export const useInvoices = () => useQuery(invoicesQuery());
