import { parse, add, format } from "date-fns";
import { FiltersState, InvoiceResult } from "types";
import { INVOICES_PER_PAGE } from "./constants";
import { capitalize } from "@mui/material";
import { camelToNormal } from "./utils";

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

export const checkInvoiceFalsyFields = (obj: object, prop?: string) => {
  const errors = Object.entries(obj).reduce(
    (result: string[], [key, value]) => {
      if (key === "__v" || key === "_id") return result;
      if (value === "" || value === 0) {
        const field = prop
          ? `${capitalize(camelToNormal(prop))} ${capitalize(key)}`
          : capitalize(key);
        return [...result, `Invoice field ${field} is not filled in`];
      }
      if (typeof value === "object" && value !== null && !Array.isArray(value))
        checkInvoiceFalsyFields(value, key);
      if (Array.isArray(value))
        value.forEach((item) => checkInvoiceFalsyFields(item, key));

      return result;
    },
    []
  );

  if (errors.length === 1) {
    throw new Error(errors[0]);
  }

  if (errors.length > 1)
    throw new Error("Multiple invoice fields are not filled in");
};
