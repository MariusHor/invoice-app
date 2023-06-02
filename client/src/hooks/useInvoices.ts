import { useQuery } from "@tanstack/react-query";
import { getInvoices } from "api";
import { InvoiceResult } from "types";

export const invoicesQuery = () => ({
  queryKey: ["invoices"],
  queryFn: getInvoices,
});

export const useInvoices = ({
  initialData,
}: {
  initialData?: InvoiceResult[];
}) => useQuery({ ...invoicesQuery(), initialData });
