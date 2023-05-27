import { useQuery } from "@tanstack/react-query";
import { fetchInvoices } from "api";
import { InvoiceResult } from "types";

export const invoicesQuery = () => ({
  queryKey: ["invoices"],
  queryFn: fetchInvoices,
});

export const useInvoices = ({
  initialData,
}: {
  initialData?: InvoiceResult[];
}) => useQuery({ ...invoicesQuery(), initialData });
