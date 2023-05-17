import { useCallback, useContext, useState } from "react";
import { InvoiceList, InvoiceListFallback, Pagination } from "features";
import { filterInvoices, getTotalPages, paginateInvoices } from "utils";
import { Spinner } from "components";
import { useInvoices } from "hooks";
import { FiltersContext } from "context";

export const Invoices = (): React.JSX.Element => {
  const invoices = useInvoices();
  const context = useContext(FiltersContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [invoicesPerPage] = useState(6);

  const handleCurrentPage = useCallback(
    (value: number) => setCurrentPage(value),
    []
  );

  if (invoices.isLoading) {
    return <Spinner />;
  }

  if (!context) {
    throw new Error("FiltersContext must be used within a FilterProvider");
  }

  const { filters } = context;

  const filteredInvoices = filterInvoices(invoices.data, filters);

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

  const totalPages = getTotalPages(filteredInvoices.length, invoicesPerPage);

  if (!currentInvoices.length) {
    return <InvoiceListFallback />;
  }

  return (
    <div className="flex w-full grow flex-col justify-center gap-6 p-4">
      <InvoiceList currentInvoices={currentInvoices} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
      />
    </div>
  );
};
