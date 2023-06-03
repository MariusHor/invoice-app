import { useCallback, useState } from "react";
import { ActionsBar, InvoiceList, Pagination } from "features";
import { InvoiceFallback, Spinner } from "components";
import { useFilters, useInvoices } from "hooks";
import { filterInvoices, getTotalPages, paginateInvoices } from "utils";

export const Dashboard = (): React.JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [invoicesPerPage] = useState(6);
  const { filters } = useFilters();

  const handleCurrentPage = useCallback(
    (value: number) => setCurrentPage(value),
    []
  );

  const { data: invoices, isLoading } = useInvoices();

  if (isLoading) return <Spinner />;

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

  return (
    <>
      <ActionsBar />
      {currentInvoices.length ? (
        <div className="flex w-full grow flex-col justify-center gap-6 p-4">
          <InvoiceList currentInvoices={currentInvoices} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
          />
        </div>
      ) : (
        <InvoiceFallback>
          <p className="paragraph-secondary mx-auto mt-6 max-w-42 text-center">
            Create an invoice by clicking the New Invoice button and get started
          </p>
        </InvoiceFallback>
      )}
    </>
  );
};
