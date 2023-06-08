import { parse, add, format } from "date-fns";
import { FiltersState, InvoiceResult } from "types";

export function invariant(value: unknown): asserts value {
  if (value) {
    return;
  }

  throw new Error("Invariant violation");
}

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

export const formatDate = (createdAt: string, paymentTerms: number) => {
  const dateString = createdAt;
  const originalDate = parse(dateString, "yyyy-MM-dd", new Date());
  const newDate = add(originalDate, { days: paymentTerms });

  return format(newDate, "yyyy-MM-dd");
};

export const getCharacterValidationError = (str: string) => {
  return `Password must have at least 1 ${str} character`;
};

export const parseJwt = (token: string | undefined) => {
  try {
    if (token) return JSON.parse(atob(token.split(".")[1]));
    throw new Error();
  } catch (e) {
    return null;
  }
};
