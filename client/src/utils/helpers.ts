import { parse, add, format } from "date-fns";
import { FiltersState, InvoiceResult } from "types";
import { INVOICES_PER_PAGE } from "./constants";

export const paginateInvoices = (
  filteredInvoices: InvoiceResult[],
  currentPage: number
) => {
  const indexOfLastInvoice = currentPage * INVOICES_PER_PAGE;
  const indexOfFirstInvoice = indexOfLastInvoice - INVOICES_PER_PAGE;

  return filteredInvoices.slice(indexOfFirstInvoice, indexOfLastInvoice);
};

export const filterInvoices = (
  invoices: InvoiceResult[],
  filters: FiltersState
) => {
  return invoices.filter((invoice: InvoiceResult) => {
    switch (invoice.status) {
      case "paid":
        return filters.paid;
      case "pending":
        return filters.pending;
      case "draft":
        return filters.draft;
      default:
        return false;
    }
  });
};

export const getTotalPages = (filteredInvoices: number) =>
  Math.ceil(filteredInvoices / INVOICES_PER_PAGE);

export const formatDate = (createdAt: string, paymentTerms: number) => {
  const dateString = createdAt;
  const originalDate = parse(dateString, "yyyy-MM-dd", new Date());
  const newDate = add(originalDate, { days: paymentTerms });

  return format(newDate, "yyyy-MM-dd");
};
