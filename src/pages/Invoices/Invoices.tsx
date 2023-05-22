import { useCallback, useState } from "react";
import { InvoiceList, InvoiceListFallback, Pagination } from "features";
import { useFilters } from "hooks";
import { filterInvoices, getTotalPages, paginateInvoices } from "utils";
import { useLoaderData } from "react-router-dom";
import { invoicesLoader } from "./loader";

export const Invoices = (): React.JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [invoicesPerPage] = useState(6);
  const { filters } = useFilters();
  const invoices = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof invoicesLoader>>
  >;

  const handleCurrentPage = useCallback(
    (value: number) => setCurrentPage(value),
    []
  );

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
