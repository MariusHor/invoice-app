import { FiltersState, InvoiceResult } from "types";
import { filterInvoices, getTotalPages, paginateInvoices } from "utils";

interface useFilterInvoicesProps {
  invoices: InvoiceResult[];
  filters: FiltersState;
  invoicesPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const useFilterInvoices = ({
  invoices,
  filters,
  invoicesPerPage,
  currentPage,
  setCurrentPage,
}: useFilterInvoicesProps) => {
  const filteredInvoices = filterInvoices(invoices, filters);
  const totalPages = getTotalPages(filteredInvoices.length, invoicesPerPage);

  let currentInvoices = paginateInvoices(
    filteredInvoices,
    currentPage,
    invoicesPerPage
  );

  if (currentPage > 1 && !currentInvoices.length) {
    currentInvoices = paginateInvoices(
      filteredInvoices,
      currentPage - 1,
      invoicesPerPage
    );

    setCurrentPage(currentPage - 1);
  }

  return { totalPages, currentInvoices };
};
