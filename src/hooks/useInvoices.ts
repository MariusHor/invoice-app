import { useQuery } from "@tanstack/react-query";
import fetchInvoices from "api/fetchInvoices";

export const useInvoices = () =>
  useQuery({
    queryKey: ["invoices"],
    queryFn: fetchInvoices,
  });
