import { FiltersState, FormValues, InvoiceResult } from "types";

export const capitalize = (string: string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
};

export const paginateInvoices = (
  filteredInvoices: InvoiceResult[],
  currentPage: number,
  invoicesPerPage: number
) => {
  const indexOfLastInvoice = currentPage * invoicesPerPage;
  const indexOfFirstInvoice = indexOfLastInvoice - invoicesPerPage;

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

export const getTotalPages = (
  filteredInvoices: number,
  invoicesPerPage: number
) => Math.ceil(filteredInvoices / invoicesPerPage);
