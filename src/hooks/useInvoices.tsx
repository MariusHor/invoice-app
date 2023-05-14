import { useQuery } from "@tanstack/react-query";
import fetchInvoices from "src/api/fetchInvoices";

export const useInvoices = () =>
  useQuery({
    queryKey: ["invoices"],
    queryFn: fetchInvoices,
  });
