import { useCallback, useState } from "react";
import { InvoiceList, InvoiceListFallback, Pagination } from "features";
import { Spinner } from "components";
import { useFilters, useInvoices } from "hooks";
import { filterInvoices, getTotalPages, paginateInvoices } from "utils";

export const Invoices = (): React.JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [invoicesPerPage] = useState(6);
  const { data, isLoading } = useInvoices();
  const { filters } = useFilters();

  const handleCurrentPage = useCallback(
    (value: number) => setCurrentPage(value),
    []
  );

  if (isLoading) {
    return <Spinner />;
  }

  const filteredInvoices = filterInvoices(data, filters);
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

  return (
    <div className="flex w-full grow flex-col justify-center gap-6 p-4">
      {currentInvoices.length ? (
        <>
          <InvoiceList currentInvoices={currentInvoices} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
          />
        </>
      ) : (
        <InvoiceListFallback />
      )}
    </div>
  );
};
